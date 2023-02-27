//parameters and args

//a and b are args
//es 6 default args
function add(a = 0, b = 0) {
    console.log(`a ${a} b ${b}`)
    let c = a + b
    console.log(`C is ${c}`)
}
//10 and 10 are parameters
add(10, 10)
//default values are undfined, undefined
add() //if you dont pass any values