//anonmous functions with arg and return 

let add = function (a = 0, b = 0) {
    console.log(`a ${a} b ${b}`)
    return a + b
};
console.log(add())
console.log(add(10, 10))

let login = function (userName = '', password = '') {
    return (userName === 'admin') && (password === 'admin') ? "Login Success" : "Login Failed"
}
console.log(login('admin','admin'))