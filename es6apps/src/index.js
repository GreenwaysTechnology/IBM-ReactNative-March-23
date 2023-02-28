//{} only for export 
import { firstName,lastName,age,status,address,skills } from "./mylib";

//no {} for export default
import TodoService from "./services/todo.service";


console.log(firstName,lastName)
console.log(age)
console.log(status)
console.log(address)
console.log(skills)
let service = new TodoService()
console.log(service.findAll())
