const mysql = require("mysql")


const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Chinmay567..',
    database:'node_mysql'
})



// conn.connect((err)=>{
//     if (err) throw err;
//     console.log("successfully conected");
// })

// to check the connection of db 
// conn.connect((err)=>{
//     if(!err){
//         console.log("connected");
//     }else{
//         console.log(err);
//     }
// })

module.exports = { conn }