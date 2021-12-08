// 6 data types (premitive)
// undefined,Boolean,Number,String,BigInt,Symbol

// string
var Name = "Hello World";
// console.log(typeof(Name))

// number
var Age = 24;
// console.log(typeof(Age))

// Boolean
var Hello_World = true;
// console.log(typeof(Hello_World))

// console.log(10 + "20")
// console.log(9 - "5") #Bug
// console.log("java" + "script")
// console.log(" " + " ")
// console.log(" " + 0)
// console.log("Hello" - "World") Not a number i:e NaN
// console.log(true + true)
// console.log(true + true)
// console.log(true + false)
// console.log(false + true)
// console.log(false - true)  false = 0 , true = 1

// null vs undefined ?
var a = null;
// console.log(a);
// console.log(typeof(a)) #bug

var b;
// console.log(b);
// console.log(typeof(b))

// what is NaN ?
// its a property of the global object
// in other words , it is a variable in global scope
// the initial value of NAN is Not-a-Number

var num = 87964;
// console.log(isNaN(num)) to validate a number

// console.log(NaN === NaN)
// console.log(Number.NaN === NaN)
// console.log(isNaN(NaN))
// console.log(isNaN(Number.NaN))
// console.log(Number.isNaN(NaN))