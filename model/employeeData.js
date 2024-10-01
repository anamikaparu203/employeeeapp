const mongoose=require("mongoose");
//create the schema
const employeeSchema=mongoose.Schema({
    employeeName:String,
    employeeDesignation:String,
    employeeLocation:String,
    employeeSalary:Number
})
const employeeData=mongoose.model('employee',employeeSchema);
module.exports=employeeData;  