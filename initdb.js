
const mongoose= require('mongoose')
const dotenv=require('dotenv').config()
module.exports=()=>{
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("mongoose connected....")
    })
    
    .catch(error=>console.log(error.message))
    mongoose.connection.on('connected',()=>{
        console.log('mongoose connected to db......')
    })
    mongoose.connection.on('error',(err)=>{
        console.log(err.message)
    })
    mongoose.connection.on('disconnected',()=>{
        console.log('mongoose disconnected to db......')
    })
    
    process.on('SIGINT',()=>{
        console.log('mongoose connection is disconnected......')
      mongoose.connection.close(()=>{
        console.log('mongoose connection is disconnected......')
        process.exit(0)
      })
    })
}