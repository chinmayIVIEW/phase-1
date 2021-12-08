require("dotenv").config()
const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const bodyParser = require("body-parser")

const {conn} =  require("./connection")

const public_path = path.join(__dirname,"./public")
const template_path = path.join(__dirname,"./templates/views")
const partials_path = path.join(__dirname,"./templates/partials")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use(express.static(public_path))

app.set("view engine","hbs")
app.set("views",template_path)
hbs.registerPartials(partials_path)


app.get('/show',(req,res)=>{
    let sql_query = 'select * from Registration';
    conn.query(sql_query,(err,result)=>{
        if (err) throw err;
        res.render('home',{values:result})
    })
})

app.get('/',(req,res)=>{
    res.render("register")
})

app.post('/register',(req,res)=>{

    const password = req.body.Password
    const confirmPassword = req.body.ConfirmPassword
    if (password === confirmPassword) {
        let sql_query = `INSERT INTO Registration (id,firstname,lastname,phone,email,age,gender) VALUES ('${req.body.id}','${req.body.FirstName}','${req.body.LastName}','${req.body.phone}','${req.body.email}','${req.body.age}','${req.body.gender}');`
        conn.query(sql_query,(err,result)=>{
            if (err) throw err;
            res.redirect("/show")
        })
    }else{
        res.send("password not matching")
    }
})


app.get('/update/:id',(req,res)=>{
    let id = req.params.id;
    let sql_query = `select * from Registration where id = ${id}`;
    conn.query(sql_query,(err,result)=>{
        if (err) throw err;
        console.log(result);
        res.render('update',{values:result});
    })
})

app.post('/updated/:id',(req,res)=>{
    let id = req.params.id
    let sql_query = `UPDATE Registration set id = '${id}',firstname = '${req.body.fname}',lastname = '${req.body.lname}',phone = '${req.body.phone}',email='${req.body.email}',age='${req.body.age}',gender='${req.body.gender}' where id = ${id} ;`
    conn.query(sql_query,(err,result)=>{
        if (err) throw err;
        res.redirect('/show');
    })
})

app.get('/delete/:id',(req,res)=>{
    let id = req.params.id
    let sql_query = `delete from Registration where id = ${id}`
    conn.query(sql_query,(err,result)=>{
        if (err) throw err;
        res.redirect('/show')
    })
})


app.listen(process.env.APP_PORT || 8000 ,()=>{
    console.log("success");
})