//constructors
//es 6 classes
class Employee {
    //instance variables
    constructor(id = 0, name = "", city = "") {
        this.id = id
        this.name = name
        this.city = city
    }
    //instance methods
    calculateSalary() {
        return 1000
    }
}
//create object 
//let is keyword
//employee is reference variable
//new is keyword
//Employee() //constructor call 
let employee = new Employee(1, "Subramanian", "Coimbatore")
console.log(employee.id, employee.name, employee.calculateSalary())

