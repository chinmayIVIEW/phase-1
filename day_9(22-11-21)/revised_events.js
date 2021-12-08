// this module works as events like click,hober etc...
// you can create , listen and Fire

const EventEmitter = require("events")
const event = new EventEmitter()


// event.on('sayMyName',()=>{
//     console.log("my name is chinmay");
// })


// event.on('sayMyName',()=>{
//     console.log("i am from rkl");
// })



// event.emit("sayMyName")



event.on('checkpage',(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
})


event.emit("checkpage",200,"ok"); 