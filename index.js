const express = require('express');
const app = express();
const PORT = 5000;
require ('./Models/config');
const cors = require('cors')

const User = require('./Models/User');

app.use(express.json());
app.use(cors());

app.post('/signup', async (req,res) =>{
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
    // console.log(req.body);
})

app.get('/',(req,res)=>{
    res.send("bakend is runnig");
})

app.listen(PORT,(req,res) =>{
    console.log(`${PORT}, DB Connected`);
})