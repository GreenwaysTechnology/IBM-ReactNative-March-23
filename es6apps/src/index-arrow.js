//arrow functions 

//es 5 style of anonmous function 
let hello = function () {
    console.log('hello')
}
hello()
//es 6 style of anonmous function: arrow function 
let hai = () => {
    console.log('hai')
}
hai()
//code refactoring: how to write simple syntax:

//Use case 1: if function has only one line of body : we can remove {}
hai = () => console.log('hai')
hai()

//arrow and args and parameters

let add = function (a = 0, b = 0) {
    let c = a + b
    console.log(`c ${c}`)
}
add(10, 10)
add = (a = 0, b = 0) => {
    let c = a + b
    console.log(`c ${c}`)
}
add(10, 10)
//return values and arrows

let multiply = function (a = 0, b = 0) {
    return a * b
}
console.log(multiply(10, 10))
//arrow and return 
multiply = (a = 0, b = 0) => {
    return a * b
}
console.log(multiply(10, 10))

//use case 2: if function has single return statement: we can remove {} and return statement
multiply = (a = 0, b = 0) => a * b
console.log(multiply(10, 10))

//single arg without default value:
let getValue = (value) => {
    return value
}
console.log(getValue(10))
//single arg without default value: we can remove () , and return ,{}
getValue = value => value
console.log(getValue(10))