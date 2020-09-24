const incomeType= require("../models/incomeType");

const {check_id,check_name,check_exist,check_text}=require("./extra");
const {case1}=require("./vm");

exports.validateID = [
    check_id("id"),
    check_exist(incomeType,"id","id","param","not_exist"),
    case1
];
exports.insertValidateData = [
    check_text("note"),
    check_name("name"),
    check_exist(incomeType,"name","name"),
    case1
];
exports.updateValidateData = [
    check_text("note"),
    check_id("id"),
    check_exist(incomeType,"id","id","param","not_exist"),
    check_name("name"),
    check_exist(incomeType,"name","name"),
    case1
];