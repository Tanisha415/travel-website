require('./config')
const express=require('express');
const mongoose=require('mongoose');
const Users=require('./users');
const Signup=require('./signup');
const Data=require('./data');
const cors=require('cors');
const app=express();  
app.use(express.json());
app.use(cors());
app.post('/register',async(req,res)=>{
    let user =new Users(req.body);
    let result=await user.save();
    res.send(result);
})
app.post('/signup',async(req,res)=>{
    let signup =new Signup(req.body);
    let result=await signup.save();
    res.send(result);
})
app.post('/data',async(req,res)=>{
    let data =new Data(req.body);
    let result=await data.save();
    res.send(result);
})
app.put('/update',async(req,res)=>{
    let result=await Signup.updateOne(
        {Fullname:req.body.Fullname},{$set:req.body}
    )
    res.send(result)
})
app.delete('/delete', async (req, res) => {
    try {
      const { Fullname } = req.body;
  
      if (!Fullname) {
        return res.status(400).json({ message: 'Fullname is required' });
      }
  
      const result = await Signup.deleteOne({ Fullname });
  
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ success: true });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
app.post('/login', async (req, res) => {
    if (req.body.Email && req.body.Password) {
        let user = await Signup.findOne({ Email: req.body.Email, Password: req.body.Password });
        if (user) {
            res.send(user);
        } else {
            res.send("User not found");
        }
    } else {
        res.send("User not found");
    }
});


app.listen(5000)