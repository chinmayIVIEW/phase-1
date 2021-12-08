// 4 type of stream 
// ReadableStream,WritableStream,Duplex,TransformStream

// each stream is an event emitter instance 
// i:e - data,end,error,finish

const fs = require("fs")
const http = require("http")

const server = http.createServer()

server.on('request',(req,res)=>{

// ? 1st way !!!
//   fs.readFile("dummy.txt","utf-8",(err,data)=>{
//       if (err) {
//           console.log(err);
//       }
//       res.end(data)  
//   })
// ? 2nd way !!!!
    // const rstream = fs.createReadStream("dummy.txt")
    // rstream.on('data',(chunk_data)=>{
    //     res.end(chunk_data)
    // })
    // rstream.on('end',()=>{
    //     res.end()
    // })
    // rstream.on('error',(err)=>{
    //     console.log(err);
    //     res.end("file not found")
    // })
// ? 3rd way !!! stream.pipe ()
// its take a readable string and connect it to a writeable string
    const rstream = fs.createReadStream("dummy.txt")
    rstream.pipe(res)
})
server.listen(8000,"127.0.0.1")