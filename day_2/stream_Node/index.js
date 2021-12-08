const fs = require('fs');
const http = require('http');


const server = http.createServer()

server.on('request', (req, res) => {
    // fs.readFile("input.txt", (err, data) => {
    //     if (err) return console.error(err)
    //     res.end(data.toString())
    // })

    //  2 way how to stream the text in real time
    const rstream = fs.createReadStream("input.txt")
    // rstream.on("data",(chunk_data)=>{
    //     res.write(chunk_data)
    // })
    // rstream.on("end",()=>{
    //     res.end()
    // })
    // rstream.on("error",(err)=>{
    //     console.error(err)
    //     res.end("file not found")
    // })

    //  3 way to stream the data using pipe
    rstream.pipe(res)
})

server.listen(8000,"127.0.0.1")