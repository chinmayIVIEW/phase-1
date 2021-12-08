const express = require('express')
const app = express()
const path = require("path")
const hbs = require("hbs")
const port = process.env.PORT || 8000

// ? public static path
const public_path = path.join(__dirname,"../public")
const template_path = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials")

app.use(express.static(public_path)) 
// old method from public folder

app.set('view engine','hbs')
// to inform the express which view engine we are using 

app.set('views',template_path)
// to change the name views to templates we have to give the path of nes directory

hbs.registerPartials(partials_path)
// we have to also give the path of partials after imporing the package 


// ?Routing
app.get('/',(req,res)=>{
    res.render('index')
    // res.send("welcome to project of express")

})

app.get('/about',(req,res)=>{
    res.render('about')
    // res.send("welcome to about page of project")

})

app.get('/weather',(req,res)=>{
    res.render('weather')
    // res.send("welcome to weather page of project")

})

app.get('*',(req,res)=>{
    res.render('404error',{
        errorMsg:"Opps Error occured "
    })
    // res.send("Oops !!! Error page")

})

app.listen(port,()=>{
    console.log("success");
})