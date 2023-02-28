//constructors

function Employee(id = 0, name = "", city = "") {
    //instance variables
    this.id = id
    this.name = name
    this.city = city
    //instance methods
    this.calculateSalary = function () {
        return 1000
    }

}
//create object 
//let is keyword
//employee is reference variable
//new is keyword
//Employee() //constructor call 
let employee = new Employee(1, "Subramanian", "Coimbatore")
console.log(employee.id,employee.name,employee.calculateSalary())

