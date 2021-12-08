const mysql = require("mysql")

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'**********',
    database:'********'
})


conn.connect((err)=>{
    if (err) throw err;
    console.log("successfully conected");
})

module.exports = {conn}