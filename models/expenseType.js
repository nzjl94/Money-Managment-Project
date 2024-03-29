const { DataTypes } = require('sequelize');

const sequelize =require('../util/database');
const expenseType=sequelize.define('expenseType',{
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
        validate:{
            len: [3,30],
            notNull: true,            // won't allow null
            notEmpty: true,           // don't allow empty strings
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
            name: 'expense_type_index',
            fields: ['name']
        }
    ]
});
module.exports= expenseType;