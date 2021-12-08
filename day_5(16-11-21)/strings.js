// let myName = "Hello World"
// console.log(myName.length)

// escape charecter ***************************
// we can use ulternative quotes to escape
// let Sentence =  "we are the so-called \"vikings\" from the north"
// console.log(Sentence)

// find a string in a string ****************************
// const Bio = "Hello world this is javascript"
// console.log(Bio.indexOf("world")) forward serach
// console.log(Bio.lastIndexOf("world")) backword search

// seraching for a string in a string *************************
// console.log(Bio.search("world"))

// extracting string parts *******************************
// let str = "apple,banana,kiwi"
// let res = str.slice(0,5) we can use negative index
// console.log(str.slice(7,-2)) 
// console.log(str.slice(7))
// console.log(res)

// let loren = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
// let bind = loren.slice(0,280)
// console.log(bind.length)

// let res = str.substring(0,7) we cant use negative index
// console.log(res)

// let res = str.substr(0,4)
// console.log(str.substr(-4))
// console.log(res)

// Replacing string content *********************
// let myBio = "simply dummy text of the printing and typesetting industry"
// let replacedata = myBio.replace("text","summery")
// console.log(replacedata)


// extracting string charecter************
// let str = "Hello World"
// console.log(str.charAt(6)) return charecter when a index is given
// console.log(str.charCodeAt(6)) return unicode of that charecter and take index of that charecter
// console.log(str.charAt(str.length - 1))
// console.log(str.charCodeAt(str.length - 1))
// console.log(str[3])

// usefull methods *****************
// let myname = "Hello world"
// console.log(myname.toUpperCase())
// console.log(myname.toLowerCase())

// let fname = "Hello"
// let lname = "World"
// console.log(fname.concat(" ",lname))

// let str = "     Hello world         "
// console.log(str.trim())

// sting to array convertion
// let text = "a,b,c,d,e"
// console.log(text.split(","))
