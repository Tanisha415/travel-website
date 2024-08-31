const mongoose=require('mongoose');
const usersSchema=new mongoose.Schema({
   Fullname:String,
    Email:String,
    MobileNo:String,
    Subject:String,
    Description:String,
})
module.exports=mongoose.model('users',usersSchema);