const express = require("express")
const app = express()
const body_parser = require("body-parser")
const mysql = require("mysql")

// DB connections
const db = mysql.createConnection({
    host : "**********",
    user : "root",
    password : "*********",
    database : "node_mysql",
    multipleStatements : true
})

// connect to db
db.connect((err)=>{
    if(!err){
        console.log("connected");
    }else{
        console.log("mysql connected");
    }
})