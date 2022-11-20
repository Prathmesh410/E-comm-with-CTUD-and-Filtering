const express = require('express');
const app = express();
const PORT = 5000;
app.get("/",(req,res) =>{
    res.send("Get route");
})
app.listen(PORT,(req,res) =>{
    console.log("DB Connected");
})