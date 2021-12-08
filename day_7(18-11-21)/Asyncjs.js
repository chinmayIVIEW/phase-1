// Hoisting in js ******************

// it is a mechanisim where variable and functions decalaration are moved to the 
// top of their scope before the code execute 
// i:e -
// console.log(myName);
// var myName = "chinmay"
// but in hoisting rule veriable are to be create fst
// var myName = "chinmay"
// console.log(myName);

// Scoping in js ************************
// let a = "hello guys"
// const first = ()=>{
//     let b = "how are you ?"

//     const second = ()=>{
//         let c = "Hi I am jarvish"
//         console.log(a+b+c);
//     }
//     second()
    // console.log(a+b+c); it cant be executed because its global for c variable 
// }
// first()

// "use strict" *****************
// x = "chinmay"
// console.log(x);

// async programming*****************

// const func2 = ()=>{
//     setTimeout(() => {
//         console.log("this is from set timeout");
//     }, 3000);
// }

// const func1 = ()=>{
//     console.log("welcome to func1");
//     func2()
//     console.log("func1 proccess end")
// }

// func1()

// Event Loop ***********************


// closure *******************
