// Event propagation ************

// Event bubbling and capturing are two ways of event propagation in the HTML Dom API
// when an event occures in an element inside another element,and both elements have 
// registered a handle for the event 

// the event propagation mode determine in which order the elements recieve the event 

// bottom to top = bubbling phase
// top to bottom = capturing phase

// Element.addEventListener('event-name',function-name,false)
//? by default the 3rd argument of addEventListener is false and it follows bubbling mode 
//? but when we make the 3rd argument to true then its behaving as a capturig mode 
// Element.addEventListener('event-name',function-name,true)

// Higher order function *******************
const add = (a,b)=>{
    return a + b
}

const calculator = (num1,num2,operator)=>{
    return operator (num1,num2)
}
// here calculator is a higher order function
// because a function is passed as a argument to the calculator function
// and add is a callback function
// beacuse the function add itself being passed to the higher oredr function 

console.log(calculator(5,6,add))