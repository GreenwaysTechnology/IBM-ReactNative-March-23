//returning value from the function 

function add(a = 0, b = 0) {
    return a + b
}
let c = add(10, 10)
console.log(`c ${c}`)
console.log(`c ${add(10, 10)}`)

function doStuff() {
    return // undefined
}
console.log(doStuff())

//login
// function login(userName = '', password = '') {
//     if (userName === 'admin' && password === 'admin') {
//         return 'Login Success'
//     } else {
//         return 'Login Failed'
//     }
// }
function login(userName = '', password = '') {
    return (userName === 'admin') && (password === 'admin') ? "Login Success" : "Login failed"
}
console.log(login('admin', 'admin'))