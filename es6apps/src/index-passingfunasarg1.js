
//how to pass function as parameter to another function:

function add(a = 0, b = 0) {
    let c = a + b
    console.log(c)
}
//10 and 10 are hard coded numbers
add(10, 10)
let x = 10
let y = 90
//x and y values are passed as parameters
add(x, y)
/////////////////////////////////////////////////////////////////////////

//function as parameter to another function 

function sayGreet(greet) {
    //invoke function 
    greet()
}
//passing function as parameter
let hello = function () {
    console.log('hello')
}
function hai() {
    console.log('hai')
}
sayGreet(hello)
sayGreet(hai)
//anonmous inline function 
sayGreet(function () {
    console.log('welcome')
})