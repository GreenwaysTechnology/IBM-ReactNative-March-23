
// function sayGreet(greet) {
//     let status = greet('Subramanian')
//     console.log(status)
// }

const sayGreet = greet => {
    let status = greet('Subramanian')
    console.log(status)
}
let hello = (name = '') => {
    console.log(`Hello ${name}`)
    return 'done'
}
sayGreet(hello)

sayGreet((name = '') => {
    console.log(`Hello ${name}`)
    return 'done'
})
/////////////////////////////////////////////////////////////////////////////////
//complex parameters
// function auth(userName, password, success, failure) {
//     if (userName === 'admin' && password === 'admin') {
//         //call success
//         success('login Success')
//     } else {
//         failure('login failed')
//     }
// }
const auth = (userName, password, success, failure) => {
    if (userName === 'admin' && password === 'admin') {
        //call success
        success('login Success')
    } else {
        failure('login failed')
    }
}

auth('admin', 'admin', status => console.log(status),
    err => console.log(err))

auth('foo', 'bar', status => console.log(status),
    err => console.log(err))














