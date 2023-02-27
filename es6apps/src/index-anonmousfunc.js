//function as value

//let is keyword
//10 is value - number
//a is variable
let a = 10

//like number,strings,boolean , function is also value
//since function is value , can be assigned to a variable.
//that variable can be used to invoke that function : higher order functions

//there are various syntax:

//syntax 1 : declare function 

function sayHello() {
    console.log('hello')
}
//we can assign the function to a variable 

let hello = sayHello
hello()


//syntax 2 : Anonmous function : the function without name and assigned in the inline .

let hai = function() {
  console.log('hai')
};
hai()





