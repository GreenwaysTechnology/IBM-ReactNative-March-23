//equal operators

let a = 100;
let b = "100";

//== only test content is equal or not 
if (a == b) {
    console.log(`a and b are equal`)
} else {
    console.log(`a and b are not equal`)
}

// === test content + type equal or not
//recommended operator
if (a === b) {
    console.log(`a and b are equal`)
} else {
    console.log(`a and b are not equal`)
}