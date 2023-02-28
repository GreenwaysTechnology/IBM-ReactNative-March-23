//Object destructuring - ES 6 

//without destructuring
// function printEmployee(employee) {
//     console.log(`id : ${employee.id}`)
//     console.log(`name : ${employee.name}`)
// }

//with destructuring
// function printEmployee(employee) {
//     // const { id, name ,address } = employee
//     const { id, name, address: { city } } = employee

//     console.log(`id : ${id}`)
//     console.log(`name : ${name}`)
//     // console.log(`city : ${address.city}`)
//     console.log(`city : ${city}`)

// }
// const printEmployee = (employee) => {
//     // const { id, name ,address } = employee
//     const { id, name, address: { city } } = employee

//     console.log(`id : ${id}`)
//     console.log(`name : ${name}`)
//     // console.log(`city : ${address.city}`)
//     console.log(`city : ${city}`)

// }

//destructuring inside args
const printEmployee = ({ id, name, address: { city } }) => {
    console.log(`id : ${id}`)
    console.log(`name : ${name}`)
    // console.log(`city : ${address.city}`)
    console.log(`city : ${city}`)

}
printEmployee({ id: 1, name: 'subramanian', address: { city: "Coimbatore" } })
///////////////////////////////////////////////////////////////////////////////////
//Object destructuring with returing object

// function getStock() {
//     return {
//         id: 1,
//         name: 'google',
//         qty: 10,
//         price: 10000
//     }
// }
// console.log(getStock())

// function getStock(id = 0, name = '', qty = 0, price = 0) {
//     return {
//         id: id,
//         name: name,
//         qty: qty,
//         price: price
//     }
// }
// console.log(getStock())
// console.log(getStock(1, 'google', 100, 1000))

// //destructuring 
// function getStock(id = 0, name = '', qty = 0, price = 0) {
//     //objectKey:localvariable
//     //if objectkey and localvariable are same, remove one 
//     return {
//         id,
//         name,
//         qty,
//         price
//     }
// }
// console.log(getStock())
// console.log(getStock(1, 'google', 100, 1000))

// const getStock = (id = 0, name = '', qty = 0, price = 0) => {
//     return {
//         id,
//         name,
//         qty,
//         price
//     }
// }
const getStock = (id = 0, name = '', qty = 0, price = 0) => ({
    id,
    name,
    qty,
    price
})
console.log(getStock())
console.log(getStock(1, 'google', 100, 1000))