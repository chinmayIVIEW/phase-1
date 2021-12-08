mysql = require("mysql")

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Chinmay567..',
    database:'node_mysql'
})

conn.connect((err)=>{
        if (err) throw err;
        console.log("successfully conected");
    })



module.exports = conn



