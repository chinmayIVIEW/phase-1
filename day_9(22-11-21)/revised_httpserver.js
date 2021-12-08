const http = require("http")

const server = http.createServer((req,res)=>{
    if (req.url == '/') {
        res.end("from home page")
    } else if (req.url == "/about") {
        res.end("from about us page")
    }else{
        res.writeHead(404,{"Content-type":"text/html"})
        res.end("<h1>Page doesn't exist</h1>")
    }
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port");
})