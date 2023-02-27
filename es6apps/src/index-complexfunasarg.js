
function sayGreet(greet) {
    let status = greet('Subramanian')
    console.log(status)
}
let hello = function (name = '') {
    console.log(`Hello ${name}`)
    return 'done'
}
sayGreet(hello)

sayGreet(function (name = '') {
    console.log(`Hello ${name}`)
    return 'done'
})
/////////////////////////////////////////////////////////////////////////////////
//complex parameters
function auth(userName, password, success, failure) {
    if (userName === 'admin' && password === 'admin') {
        //call success
        success('login Success')
    } else {
        failure('login failed')
    }
}
auth('admin', 'admin', function (status) {
    console.log(status)
}, function (err) {
    console.log(err)
})

auth('foo', 'bar', function (status) {
    console.log(status)
}, function (err) {
    console.log(err)
})














