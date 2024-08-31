const mongoose=require('mongoose');
const signupSchema=new mongoose.Schema({
   Fullname:String,
    Password:String,
    MobileNo:String,
    Email:String,
})
module.exports=mongoose.model('signs',signupSchema);