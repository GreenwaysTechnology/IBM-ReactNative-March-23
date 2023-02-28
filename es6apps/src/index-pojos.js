//built on objects:
//browser objects -  DOM objects 
//pojo objects 

//Wrapper classes
let str = 'Hello' // behind the scene it creates object 
//we can access methods of objects 
console.log(str.toUpperCase())
//Numbers
let price = 1000.7343434
console.log(price.toFixed(3))

//Math 
console.log(Math.random())

//date
console.log(new Date())

//JSON Parser : String to object and Object to String 
let employee = {
    id: 1,
    name: 'Subramaian'
}
console.log(employee)
//convert to json (string)
console.log(JSON.stringify(employee))

let empStr = JSON.stringify(employee)
//convert into object 
console.log(JSON.parse(empStr))

//data structure : Array:

let skills = ["java", "javascript", "Mobility"]

skills.forEach(skill => console.log(skill))

let employees = [
    {
        id: 1,
        name: 'A1'
    },
    {
        id: 2,
        name: 'A2'
    },
    {
        id: 3,
        name: 'A3'
    }
]
employees.forEach(employee => console.log(employee.id, employee.name))