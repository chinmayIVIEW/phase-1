const fs = require('fs');
const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url == "/") {
    res.end('hello world from home page')
    }else if (req.url == "/about") {
        res.end('hello world from about page ')
    }else if (req.url == "/userapi") {
        fs.readFile("userApi.json","utf-8",(err,data)=>{
            const objdata = JSON.parse(data)
            res.writeHead(200,{"content-type": "application/json"})
            console.log(objdata.errors[0].title)
        })
        res.end('hello world from userapi page ')
    }else{
        res.writeHead(404,{"content-type":"tezt/html"});
        res.end("<h1>page doesnt exist</h1>")
    }
})

server.listen(8000,"127.0.0.1",()=>{
    console.log('listening on port')
})