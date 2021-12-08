const router = require("express").Router()
const conn = require("../db/connection")


router.post('/create',(req,res)=>{
    let eventname = "100 meter"
    let sql_query = `INSERT INTO restapi (Ranking,Name,DOB,Country,Score,event) VALUES ('${req.body.ranking}','${req.body.name}','${req.body.dob}','${req.body.country}','${req.body.score}','${eventname}');`
    conn.query(sql_query,(err,result)=>{
        if(err) throw err;
        console.log("data inserted");
        res.status(200).json(result)
    })
})

router.get('/show',(req,res)=>{
    let sql_query = `select * from restapi`
    conn.query(sql_query,(err,result)=>{
        if (err) throw err;
        res.status(200).json({
            message:result
        })
    })
})

router.patch('/update/:id',(req,res)=>{
    let id = req.params.id
    let sql_query = `UPDATE restapi set Ranking = '${id}',Name = '${req.body.name}',DOB = '${req.body.dob}',Country = '${req.body.country}',Score='${req.body.score}',event='${"100 meter"}' where Ranking = ${id} ;`
    conn.query(sql_query,(err,result)=>{
        if (err) throw err;
        res.json({
            messsage:result
        });
    })
})

router.delete('/delete/:id',(req,res)=>{
    let id = req.params.id
    let sql_query = `delete from restapi where Ranking = ${id}`
    conn.query(sql_query,(err,result)=>{
        if (err) throw err;
        res.json({
            data:result,
            messsage:"record deleted"
        });
    })
})

module.exports = router