//inheritance : es 6 
class Account {
    constructor() {
        console.log('base class')
    }
    deposit(amount = 100) {
        return amount
    }
}
class SavingsAccount extends Account {
    constructor() {
        super()
        console.log('child class')
    }
    //redefine : overriding
    deposit(amount) {
        return 100 * super.deposit(amount)
    }
}
let sb = new SavingsAccount()
console.log(sb.deposit(1000))
console.log(sb.deposit())