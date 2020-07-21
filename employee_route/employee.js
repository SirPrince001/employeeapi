const express = require('express')

const employee_route = express.Router()

//import the schema

let emp_Schema = require('../employee_schema/employeeSchema')


//get employee
employee_route.route('/get-employees').get(async(req,res)=>{
    res.send(await emp_Schema.find())

})

//get employee by id
employee_route.route('/get-employee/:id').get(async(req,res)=>{
    res.send(await emp_Schema.findById({_id:req.params.id}))
})

//create an employee

employee_route.route('/create-employee').post(async(req,res)=>{
    // properties od the new employee
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const salary = req.body.salary
    const  dob = req.body.dob
    console.log(email)

    // creaing new new user
    let newEmployee = new emp_Schema({
        firstName:firstName,
        lastName:lastName,
        email:email,
        salary:salary,
        dob:dob
    })

    if(! await emp_Schema.findOne({email:email})){
        let data = await newEmployee.save()

        res.send(data)
    }else{
        res.send('User exist with this details , please try again with another details')
    }
})


// update employee

employee_route.route('/update-employee').post(async(req,res)=>{
    // parameters to be updated
    id = req.body.id
    firstName = req.body.firstName
    lastName = req.body.lastName
    email = req.body.email
    dob = req.body.dob

    const updateResult = await emp_Schema.updateOne({_id :id} , {
        firstName:firstName,
        lastName:lastName,
        email:email,
        dob:dob
    })

    if(updateResult.nModified > 0) {
        res.send('Employee Updated Successfully')
    }else{
        res.send('Unsucessful')
    }
})

//delete employee

employee_route.route('/delete-employee/:id').delete((req,res)=>{
    emp_Schema.deleteOne({_id:req.params.id})
})


module.exports = employee_route
