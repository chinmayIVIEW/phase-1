const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("thanks for visting")
})

app.get("/about",(req,res)=>{
    res.send("thanks for visting the about page")
    console.log(req.query)
})


app.listen(8000,"127.0.0.1",()=>{
    console.log("listning the port 8000");
})