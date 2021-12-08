const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const {conn} = require("./db")
const port  = process.env.PORT || 8000

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("success")
})
 
// api for creating records
app.post('/api/create',(req,res)=>{
    let username = req.body.UserName
    let location = req.body.Location
    let sql_query = `INSERT INTO Users (UserName , Location) VALUES ('${username}','${location}')`;
    conn.query(sql_query,(err,result)=>{
        if (err) throw err;
        res.send ("Success")
    })
})

// api for displaying records
app.get('/api/view',(req,res)=>{
    let sql_query = 'SELECT * FROM Users';
    conn.query(sql_query,(err,result)=>{
        if (err) throw err;
        res.send (result)
    })
})


// api for a single record
app.get('/api/view/:id',(req,res)=>{
    let id = req.params.id
    let sql_query = `SELECT * FROM Users where id = '${id}';`
    conn.query(sql_query,(err,result)=>{
        if(result.length === 0){
            res.send("No data present")
        }else if(!err){
            res.send(result)
        }else{
            console.log(err);
        }
    })
})

// api for update the records
app.put('/api/update',(req,res)=>{
    let id = req.body.ID
    let username = req.body.UserName
    let location = req.body.Location
    let sql_query = `UPDATE Users SET UserName = '${username}', Location = '${location}' where ID = ${id};`
    conn.query(sql_query,(err,result)=>{
        if (err) throw err;
        res.send ("update successfully")
    })
})

// api for delete the records
app.delete('/api/delete/:id',(req,res)=>{
    let id = req.params.id
    let sql_query = `DELETE FROM Users where id = ${id};`
    conn.query(sql_query,(err,result)=>{
        if (err) throw err;
        res.send ("deleted")
    })
})



app.listen(port,()=>{
    console.log("listing to the port 8000");
})