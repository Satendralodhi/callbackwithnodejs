const express=require('express')
const router=express.Router()
const callBackController=require('../Controllers/callBack.Controller')
router.get('/',callBackController.getAllcallBacks)
router.post('/',callBackController.CreatecallBack)

module.exports=router