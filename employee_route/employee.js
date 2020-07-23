const express = require("express");

const employee_route = express.Router();

//import the schema

let emp_Schema = require("../employee_schema/employeeSchema");

//get employee
employee_route.route("/get-employees").get(async (req, res) => {
  res.send(await emp_Schema.find());
});

//get employee by id
employee_route.route("/get-employee/:id").get(async (req, res) => {
  res.send(await emp_Schema.findById({ _id: req.params.id }));
});

//create an employee

employee_route.route("/create-employee").post(async (req, res) => {
  // properties od the new employee
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const salary = req.body.salary;
  const dob = req.body.dob;
  console.log(email);

  // creaing new new user
  let newEmployee = new emp_Schema({
    firstname: firstname,
    lastname: lastname,
    email: email,
    salary: salary,
    dob: dob,
  });

  if (!(await emp_Schema.findOne({ email: email }))) {
    let data = await newEmployee.save();
   res.send({
     response:data
   });
   res.send('You have sucessfully register now employee');

    
  } else {
    res.send(
      "User exist with this details , please try again with another details"
    );
    
  }
});

//login
employee_route.route('/login').post(async(req,res)=>{
  let userEmail = req.body.email
  userEmail = await emp_Schema.findOne({email:userEmail})
  if(!userEmail){
    res.send('provide valid email address')
  }else{
    res.send({
      response:userEmail
    })
    
    //res.redirect('https://goofy-galileo-4a23b4.netlify.app/')
  }
})

// update employee

employee_route.route("/update-employee").post(async (req, res) => {
  // parameters to be updated
  id = req.body.id;
  firstName = req.body.firstName;
  lastName = req.body.lastName;
  email = req.body.email;
  dob = req.body.dob;

  const updateResult = await emp_Schema.updateOne(
    { _id: id },
    {
      firstName: firstName,
      lastName: lastName,
      email: email,
      dob: dob,
    }
  );

  if (updateResult.nModified > 0) {
    res.send("Employee Updated Successfully");
  } else {
    res.send("Unsucessful");
  }
});

//delete employee

employee_route.route("/delete-employee/:id").delete((req, res) => {
  emp_Schema.deleteOne({ _id: req.params.id });
});

module.exports = employee_route;
