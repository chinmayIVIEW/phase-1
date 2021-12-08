const EventEmitter = require("events");
const event = new EventEmitter();

// we can call multiple callback functions using the same event name i:e - what is your Bio-data?

// event.on('what is your Bio-data?',()=>{
//     console.log('my name is chinmay')
// })

// event.on('what is your Bio-data?',()=>{
//     console.log('my age is 24')
// })

// event.on('what is your Bio-data?',()=>{
//     console.log('my state is odisha')
// })

event.emit("what is your Bio-data?");

// registering for the event with callback (parameters)

event.on("check page", (statusCode, message) => {
  console.log(`status code is ${statusCode} and page is ${message}`);
});

event.emit("check page", 200, "ok");
