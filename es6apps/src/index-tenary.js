//tenary operator
let a = 10;
let b = 20;
if (a === b) {
    console.log(`A and B are equal`)
} else {
    console.log(`A and B are not equal`)
}

a === b ? console.log(`A and B are equal`) : console.log(`A and B are not equal`)

//based on truthy and falsy values
let x = 0
x ? console.log('X is valid') : console.log('X is Invalid')
