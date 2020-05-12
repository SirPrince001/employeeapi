const express = require('express');

const app = express()

const mongoose = require('mongoose')

const bodyParser = require('body-parser')

const cor = require('cors')

const config_DB = require('./empolyee_db/database')

const emp_route = require('./employee_route/employee')

//connecting to Database
mongoose.connect(config_DB.db , {useNewUrlParser:true , useUnifiedTopology:true}).then(() =>{
    console.log('Connected to Database!!')

}, error => {
    console.log('Error connectiong to the database' + error)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cor())
app.use(emp_route)


app.listen(5000 , () => {
    console.log('Listening to port 5000');
})