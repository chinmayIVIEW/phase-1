const fs = require("fs")

// Async always want a call back for file handeling

fs.writeFile('mytxt.txt',"here is chinmay",()=>{
    console.log("call back created")
})

fs.appendFile('mytxt.txt','chiku is my bro',()=>{
    console.log("task completed")
})

fs.readFile('mytxt.txt','utf-8',(err,data)=>{
    console.log(data)
})
 

