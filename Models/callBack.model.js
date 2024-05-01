
const mongoose=require('mongoose')
const Schema= mongoose.Schema
const callBackSchema=new Schema({
 
   
    First_Name: {
        type:String,
        required:true
       
      },
      Last_Name: {
        type:String,
        required:true
      },
      
      Mobile_Number: {
        type:String,
        required:true
       
      },
      
      Email_Id: {
        type:String,
        required:true
       
       
      },
      Class: {
        type:String,
        required:true
      },
      Goal: {
        type:String,
        required:true
      },
      Preferred_Mode:{
        type:String,
        required:true
      },
      State:{
        type:String,
        required:true
      },
})

const callBack= mongoose.model('callBack',callBackSchema)
module.exports=callBack