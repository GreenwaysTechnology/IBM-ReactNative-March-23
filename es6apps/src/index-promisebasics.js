//Promise With factory apis 

function sayGreet(message) {
    console.log(message)
}
function delay() {
    //by default is async
    return Promise.resolve('Hello')
}
function getError() {
    //by default is async
    return Promise.reject('something went wrong')
}
function main() {
    sayGreet('start')
    delay().then(res => console.log(res))
    getError().catch(err => console.log(err))
    sayGreet('end')
}
main()
