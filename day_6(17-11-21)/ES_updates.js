// ES-16 updates *******************

// Array.prototype.includes
// Exponential operator

// Array.prototype.includes
// const color = ['red','green','blue','white','pink']

// console.log(color.includes('red'));
// console.log(2**3);

// ES-17 updates  **************

// string padding 
// object.values()
// object.entries()

// const msg = "chinmay"
// const age = "24"
// console.log(msg.padStart(25));
// console.log(age.padEnd(25));

// const person = {myname:"fred",age:24}
// console.log(Object.values(person))
// console.log(Object.keys(person))
// ?to convert objects to array we use entries function
// console.log(Object.entries(person))
// ?to convert Arrays to object again (back to normal)
// console.log(Object.fromEntries(Object.entries(person)))


// ES-18 update ****************
// ...operatoe is use in object as well

// const person = {myname:"fred",age:24}
// const sperson = {...person}
// console.log(sperson);

// ES-19 update ****************

// let activities = [
//     ['Work', 9],
//     ['Eat', 1],
//     ['Commute', 2],
//     ['Play Game', 1],
//     ['Sleep', ['Run', 8]]
// ];
// before we use reduce function to flat a multi dimensional array 

// let flatArr = activities.reduce((accm,curr)=>{
//     return accm.concat(curr)
// })
// console.log(flatArr);

// new technique to flat array
// console.log(activities.flat(Infinity));


// ES-20 update ****************

// BigInt
let oldNum = Number.MAX_SAFE_INTEGER
const Newnum = 9007199254740991n + 10n
// ?now the numnum is a bigint 
// console.log(Newnum);
// console.log(typeof(Newnum));

// const foo = null ?? "Hello World"
// const foo = "Hello World" ?? null
// const foo = null ?? null
// ?just to check the string it is null or not 
// console.log(foo);