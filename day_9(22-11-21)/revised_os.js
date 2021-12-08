const os = require("os")

console.log(os.arch())
// to know the architecture of the system 

console.log(os.platform());
// to know the os name 
console.log(os.type());


console.log(os.freemem());
// to know the free memory

console.log(os.homedir());
// to know the home directory

// console.log(os.networkInterfaces());

console.log(os.release());
// to know the relese date