const express = require("express")
const app = express()
const port = process.env.PORT || 8000
const router = require("./routers/main")

app.use(express.json())
app.use('/api',router)


app.listen(port,()=>{
    console.log("server is running");
})



