// 4 ways to writing events in javascript 
// 9.45.0 timing 
// 1.using alert()
// 2.By calling a function 
// 3.using inline events (HTML onclick = "" property and Element.onclick)
// 4.using event listeners (addEventListener and IE's attachment)
// const element = element.addeventlistners("event name",function)
// recommended to use the addEventListener

// const checkevent = ()=>{
    // console.log(event) its returns the global event object (parent)
    // console.log(event.target) it return the target attribute of event object (part of parent)
    // console.log(event.type); it return the target attribute of event object (part of parent)
// } 

// const element = document.getelementbyId('element')
// element.addeventlistners("event name",checkevent)


// mouse events
// i:e mouse down
//     mouse up
//     mouse enter
//     mouse leave

// keyboard events
//  onkeypress
//  onkeydown
//  onkeyup

// input events