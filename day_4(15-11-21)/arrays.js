// when we use var then we can store only one variable
// i:e var friend1 = "ramesh"

let myFriends = ["ramesh","arjun","vishal","chinmay","world","arjun"]

// for (let index = 0; index < myFriends.length; index++) {
//     const element = myFriends[index];
//     console.log(element)
// }

// let fstindex = myFriends[0]
// console.log(fstindex)
// console.log(myFriends.length)
// console.log(myFriends[myFriends.length -1])

// for in loop => its give the index of the array
// for (let elements in myFriends) {
//     console.log(myFriends[elements])
// }

// for of loop => it gives elements of the array
// for (let elements of myFriends) {
//     console.log(elements)
// }

// for each loop
// myFriends.forEach((element,index,array) => {
//     console.log(element,index,array)
// });

// searching and shorting of an array
// console.log(myFriends.indexOf("arjun",3))
// console.log(myFriends.lastIndexOf("arjun"))
// console.log(myFriends.includes("world"))

// find only return one first element which found out first 
const prices = [200,23400,540,600,788,900,456,500]
// const findfelm = prices.find((currVal)=>{
//     return currVal > 400
// })
// console.log(findfelm)

// filter returns all the value with an array which satisfy the condition
// const fil_price = prices.filter((elements,index)=>{
//     return elements > 400
// })
// console.log(fil_price)
 
// sorting an array
console.log(prices.sort())
// sort cant be used in numbers as its converts it into string then 
// it get sorted but it can work in case of array of string

