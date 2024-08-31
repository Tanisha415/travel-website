const mongoose=require('mongoose');
const dataSchema=new mongoose.Schema({
   From:String,
    To:String,
   
})
module.exports=mongoose.model('datas',dataSchema);