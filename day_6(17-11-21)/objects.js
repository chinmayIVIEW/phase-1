// object litrals
//  its a simple key:value pair data structure
// storing variable and function together in one container, we can refer this as an objects .

// 1st way 
// let bio = {
//     myname : "chinmay",
//     age : 24,
//     getData : function() {
//         console.log(this.myname,this.age)
//     }
// }
// console.log(bio.myname);
// console.log(bio.age);
// bio.getData();

// 2 way
// let bio = {
//     myname : "chinmay",
//     age : 24,
//     getData () {
//         console.log(this.myname,this.age)
//     }
// }
// console.log(bio.myname);
// console.log(bio.age);
// bio.getData();

// 3rd way
// let bio = {
//     myname : {fname:"chinmay",lname:"dora"},
//     age : 24,
//     getData (){
//         console.log(this.myname.lname,this.age)
//     }
// }
// console.log(bio.myname.fname);
// console.log(bio.age);
// bio.getData();

//  what is this object
// the defination of "this" object is that it contain the current context
// the this object can have different values depending on where it is placed .

// console.log(this);  
// console.log(this.alert("awesome"))

// const obj = {
//     myage : 24,
//     myName : ()=>{
//         console.log(this)
//     }
// }
// obj.myName()
// this object is not working with arrow function (it gives window object)


// object properties ******************

// we can pass the data in dtnamicallt like this :
// let myName = "chinmay"
// const myBio = {
//     [myName] : "hello everyone",
//     [20 + 4] : "is my age"
// }
// console.log(myBio);

// no need to write key value pair if the key and value name is same
// let myName = "chinmay"
// let myAge = 24
// method- 1
// const myBio = {
//     myName : myName,
//     myAge : myAge
// }
// console.log(myBio);
// method -2
// const myBio = {myName,myAge}
// console.log(myBio);

// spread operator ******************************
const color = ['red','green','blue','white','pink']

const mycolor = ['red','green','blue','white','pink','yellow','black']

// 2nd time add one more color on top and tell we need to write it again
// on mycolor array too

// const myFavColor = [...color,'yellow','black']
// console.log(myFavColor);