// array destructuring
// the destructuring assignment syntax is a javascript expression that makess it possible to unpack
// value from arrays,or properties from objects , into distinct variable 

// const myBio = ["chinmay","dora",24]

// let fname = myBio[0]
// let lname = myBio[1]
// let age = myBio[2]

// let [fname,lname,age] = myBio
// it follow the index of main list  
// console.log(age;
// let [fname,lname,age,occ="SDE"]= myBio
// we can define another variable in the list also and then access it
// console.log(occ);


// object destructuring
const myBio = {
    myFname : "chinmay",
    myLname : "Dora",
    age : 24
}

// old method
// let age = myBio.age
// console.log(age);

// let {myFname,myLname,age} = myBio
// let {fname,lname,age,occ="SDE"}= myBio
// console.log(age); 

