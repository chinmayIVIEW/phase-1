let my_object = {key_1:"some text",key_2:true,key_3:5}

let my_object_as_string = JSON.stringify(my_object)

// JSON.stringfy converts javascript object into json text and stores 
// that JSON text in a string 

// console.log(my_object_as_string);
// console.log(typeof(my_object_as_string));

// JSON.parse convert json/string into javascript objects

let my_object_as_a_object = JSON.parse(my_object_as_string)

// console.log(my_object_as_a_object);
// console.log(typeof(my_object_as_a_object));


