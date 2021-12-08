const fs = require("fs")

// file system using Async file which takes callback as its last argument
// thats called when that task is completed
// fs.writeFile("read_Async.txt","add me as i am from Async",
// (err)=>{
//     console.log("success");
// })

// fs.appendFile("read_Async.txt","i am from append system",(err)=>{
//     console.log("success");
// })

// to read the file using Async fs method
// fs.readFile("read_Async.txt","utf-8",(err,data)=>{
//     console.log(data);
//     console.log("success");
// })

// to delete the file
// fs.unlink("read_Async.txt",(err)=>{
//     console.log("file deleted");
// })


// everything in async fs we have a to pass a call back function as an argument.
