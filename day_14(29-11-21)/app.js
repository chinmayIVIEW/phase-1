const {password,host,user,database} = require("./details")
const mysql = require("mysql")
const express = require("express")
const body_parser = require("body-parser")
const app = express()
const port = 8000

app.set('view engine','hbs')

app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json())



// DB connections
const db = mysql.createConnection({
    host : host,
    user : user,
    password : password,
    database : database,
    multipleStatements : true
})

// db checking 
db.connect((err)=>{
    if (!err) {
        console.log("connected");
    } else {
        console.log("connection failed");
        console.log(err);
    }
})

app.get('/',(req,res)=>{
    res.render('insert')
})

// to insert/create data into database **********
app.post('/insert',(req,res)=>{
    let lname = req.body.lname
    let fname = req.body.fname
    let age = req.body.age

    let sql_query = `INSERT into Persons(LastName,FirstName,Age) values('${lname}','${fname}','${age}')`;
    db.query(sql_query,(err)=>{
        if (err) throw err;
        res.send ("<h1>Success</h1>")
    })
})


// to read the data
app.get('/show',(req,res)=>{
    let sql_query = 'select * from Persons';
    db.query(sql_query,(err,result)=>{
        if (err) throw err;
        res.render('show',{values:result})
    })
})

// to delete the data
app.get('/delete/:id',(req,res)=>{
    let id = req.params.id;
    let sql_query = `delete from Persons where Personid = ${id}`;
    db.query(sql_query,(err,result)=>{
        if (err) throw err;
        res.redirect('/show')
    })
})


// to update the data
app.get('/Edit/:id',(req,res)=>{
    let id = req.params.id;
    let sql_query = `select * from Persons where Personid = ${id}`;
    db.query(sql_query,(err,result)=>{
        if (err) throw err;
        res.render('Edit',{values:result});
    })
})



app.post('/update/:id',(req,res)=>{
    let lname = req.body.lname
    let fname = req.body.fname
    let age = req.body.age
    let id = req.params.id;
    let sql_query = `UPDATE Persons set LastName = '${lname}',FirstName = '${fname}',Age = '${age}' where Personid = ${id}`
    db.query(sql_query,(err,result)=>{
        if (err) throw err;
        res.redirect('/show');
    })
})



app.listen(port,()=>{
    console.log("port 8000 running");
})