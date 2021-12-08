// source html file in view folder - index.html

const express = require('express');
const app = express();



app.set("view engine","hbs")

// temp_eng_root
app.get("/", (req, res) => {
    res.render("index",{
        myname:"chinmay"
    })
})

app.get('/', (req, res) => {
    res.send("hello from template engine")
})


app.listen(8000,"127.0.0.1",()=>{
    console.log("its a success");
})