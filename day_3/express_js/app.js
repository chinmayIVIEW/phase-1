const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("hello from express")
})
app.get('/about',(req,res)=>{
    res.send("this is chinmay")
})
app.listen(8000,()=>{
    console.log("listning the port from 8000")
})

