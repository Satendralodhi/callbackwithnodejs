
const CallBack=require('../Models/callBack.model')
const mongoose=require('mongoose')
const createError=require('http-errors')

module.exports={


    getAllcallBacks:async(req,res,next)=>{

        try{
        const results= await CallBack.find()
     
        res.send(results)
        }
        catch(error){
            console.log(error.message)
        }
        },

        CreatecallBack:  async(req,res,next)=>{
            try{
                const callBack=new CallBack(req.body)
                const result=await callBack.save()
                res.send("data is saved")
            }
                catch(error){
            console.log(error.message)
            if(error.name=== 'ValidationError'){
                next(createError(422,error.message))
                return
            }
            next(error)
                }
            },




   

}