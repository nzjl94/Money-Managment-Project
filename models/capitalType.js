const { DataTypes } = require('sequelize');

const sequelize =require('../util/database');
const capitalType=sequelize.define('capitalType',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        unique: true,
        allowNull:false,
        get: function (){// not use arrow function becuse it does not contain this object
            return this.getDataValue('name').toUpperCase();
        },
        set(value) {
            this.setDataValue('name',value.toLowerCase());
        },
        validate:{
            len: { 
                args: [3,20],
                msg: "The name length should be between 3 and 20 characters."
            },
            notNull: true,            // won't allow null
            notEmpty: true,           // don't allow empty strings
        }
      
    },
    transfer_type: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['push', 'pull'],
        validate:{
            notNull: true,     
            notEmpty: true,
            isIn: [['push', 'pull']]
        }
    },
    row_type: {
        type: DataTypes.ENUM,
        allowNull: false,
        defaultValue: "dynamic",
        values: ['static', 'dynamic'],
        validate:{
            notNull: true,     
            notEmpty: true,
            isIn: [['static', 'dynamic']]
        }
    },
    note: {
        type: DataTypes.TEXT,
        allowNull:true
    }
},{
    paranoid: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    indexes:[
        {
            name: 'capital_type_index',
            fields: ['name']
        }
    ]
});

module.exports= capitalType;