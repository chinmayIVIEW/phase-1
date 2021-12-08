const fs = require("fs")

// fs.writeFileSync("read.txt","welcome to monday its a file system module revised")

// to add something extra to the file 
// fs.appendFileSync("read.txt","it is from append file to add some thing")

// to read the file data 
const data =fs.readFileSync("read.txt","utf-8")
// bydefault its return buffer data
// console.log(data);

// to rename the file 
// fs.renameSync("read.txt","newread.txt")


//to delete the file 
// fs.unlinkSync("read.txt") 