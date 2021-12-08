require("dotenv").config()
const express = require("express")
const app = express()
const router = require('../Jwt/users/user.router')

app.use(express.json())


app.use('/api/users',router)



app.listen(process.env.APP_PORT,()=>{
    console.log("server is up and running ");
})