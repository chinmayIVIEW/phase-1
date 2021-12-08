const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send("<h2>wel come to my Home page</h2>")
})
// to send multiple line of html lines
app.get('/about',(req, res)=> {
    res.write('<h1>welcome to the about page</h1>')
    res.write('<h2>welcome to the about page</h2>')
    res.send()
})
// we can render object also into the web page 
app.get('/test', (req, res)=> {
    res.send({
        id : 1,
        name:"chinmay"
    })
})

app.listen(8000, ()=>{
    console.log('success')
})