const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const employee_Schema = new Schema({
    firstname: String,
    lastname:String,
    email:String,
    salary:Number,
    dob:String
})


module.exports = mongoose.model('employeeSchema' , employee_Schema)