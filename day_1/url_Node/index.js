const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url == "/") {
    res.end('hello world from home page')
    }else if (req.url == "/about") {
        res.end('hello world from about page ')
    }else{
        res.writeHead(404);
        res.end("page doesnt exist")
    }
})

server.listen(8000,"127.0.0.1",()=>{
    console.log('listening on port')
})