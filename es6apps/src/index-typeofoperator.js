

//!= !==
function add(a = 0, b = 0) {
    console.log(`a's type ${typeof a} b's type ${typeof b}`)
    if (typeof a === 'number' && typeof b === 'number') {
        let c = a + b
        console.log(`The c is ${c}`)
    } else {
        console.log('Invalid types')
    }
}
add(10, 10)
add()
add(true, "10")