// crud in array 
// const animals = ['pigs','goats','sheep']

// animals.push("chicken","cats")
// we can push one or more data and return new length of array
// console.log(animals)

// animals.unshift("chicken")
// add data to the starting of an array and return new length of array
// console.log(animals)

// const myNum = [2,3,4,6,7,8]
// myNum.unshift(9)
// myNum.push(10)
// console.log(myNum)

// const plants = ["broccoli","culiflower","kale","tamato"]s
// relem = plants.pop("tamato")
// console.log(plants)
// console.log(relem)

// plants.shift()
// its remove fst element of an array and return it like pop
// console.log(plants)

// const months = ["jan","march","April","June","July"] 
// splice method take 3 arguments starting index,how many data to be deleted and then the data to be update
// console.log(months.includes("march"))
// const indexof = months.indexOf("march")
// if(indexof != -1){
//     const updatedMonth = months.splice(indexof,1,"March")
// }else{
//     console.log("no data found")
// }
// months.splice(months.length,0,"Dec")
// const newMonth = months.splice(1,1,"March")

// if (indexof != -1) {
//     const delMonth = months.splice(indexof,1)
//     console.log(months)
// } else {
//     console.log("no data found")
// }

// console.log(months)

// map,reduce and filter ***********************************
// const arr1 = [25,36,49,64,81]

// const sqroot = (a)=>{
//     return Math.sqrt(a)
// }

// const result = arr1.map(sqroot)
// console.log(result)

// const arr2 = [2,3,4,6,8]

// const mult = (a)=>{
//    return a * 2
// }
// const result = arr2.map().filter((a)=>{
//     return a > 10
// })
// console.log(result)

// we can set the value of acc 
// const arr1 = [5,6,2]

// let sum  = arr1.reduce((acc,element)=>{
//     return acc += element
// },acc_value)

// console.log(sum) 