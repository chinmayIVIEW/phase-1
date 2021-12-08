scope chain and lexical scoping in js ***************

the scope chain is used to resolve the value of variable names in js 

scope chain in js is lexically defined which means that we can see what 
the scope chain will be by looking at the code .

At the top, we have the global scope , which is the window object in the browser.

Lexxical scoping means Now,the inner function can get access to their parent 
function veriable but the vice-versa is not true .

Closure ************************
A closure is the combination of a function bundeled together (enclosed)
with references to its surrounding state ( the lexical environment )

in other words , a closures gives you access to outer function's scope from 
an inner function.

function currying *******************
when a function ,insted of taking all arguments at one time ,takes the first
one and return a new function that takes the second one and returns a new function
which takes the third one, and so forth,until all argument have been fulfilled.
 

