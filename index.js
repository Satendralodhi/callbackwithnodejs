


const express = require('express')
const app=express()
//initilies db
require('./initdb')()
const createerrors=require('http-errors')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const dotenv=require('dotenv').config()
console.log(dotenv.parsed)
   
const callBackRoute = require('./Routes/callBack.route')
app.use('/callBack',callBackRoute)

app.use((req,res,next)=>{
    
    next(createerrors(404,'Not found'))
})
//error handller
app.use((err,req,res,next)=>{
 res.status(err.status||500)
 res.send({
    error:{
        status:err.status||500,
        message:err.message
    }
 })
})
const PORT=process.env.PORT||3000
app.listen(PORT,()=>{
    console.log("server started on port ",PORT,'.............')
})