const express = require('express');
const app = express();
const path = require('path');

// builtin middleware for serving static pages 

const staticpath=path.join(__dirname, '../middleware_exp')
app.use(express.static(staticpath));


app.get('/',(req,res)=>{
    res.send("welcome to the page")
})

app.get('/about',(req,res)=>{
    res.send("welcome to the about page")
})

app.listen(8000,()=>{
    console.log("listning to the port")
})