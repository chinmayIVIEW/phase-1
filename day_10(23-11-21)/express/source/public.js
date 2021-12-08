const express = require('express');
const app = express();
const path = require('path');


const staticpath = path.join(__dirname, '../public')
// console.log(__dirname);
// console.log(path.join(__dirname, '../public'));



// bulid in middleware to server the static page in public folder
app.use(express.static(staticpath))


app.get('/', (req, res) => {
    res.send("welcome to the page")
})


app.listen(8000,"127.0.0.1",()=>{
    console.log("success");
})