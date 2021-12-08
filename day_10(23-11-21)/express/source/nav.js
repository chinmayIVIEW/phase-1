/* ?
1. welcome to my home page
2. /about welcome to my about page 
3. /contact welcome to my contact page 
4. /temp welcome to my temp page
? */
// we can server json data also using app.json method

const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send("welcome to my home page")
})

app.get('/about', (req, res) =>{
    res.send("welcome to my about page")
})

app.get('/contact', (req, res) =>{
    res.send("welcome to my contact page")
})

app.get('/temp', (req, res) =>{
    res.json([{
        id:1,
        name:"chinmay"
    }])
    // res.send("welcome to my temp page")
})

app.listen(8000,"127.0.0.1",()=>{
    console.log("hiting the port 8000");
})