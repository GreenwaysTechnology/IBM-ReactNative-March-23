//async programming using callbacks:

function sayGreet(message) {
    console.log(message)
}
function delay(callback) {
    //wrap inside async api 
    setTimeout(callback, 5000,'i am delayed response')
}

function main() {
    sayGreet('hello')
    //passing function is called "listener / callback functions/handler"
    delay(data => {
        console.log('delay',data)
    })
    sayGreet('hai')
}
main()