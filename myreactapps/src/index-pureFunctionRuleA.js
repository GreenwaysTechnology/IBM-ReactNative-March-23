import ReactDOM from "react-dom/client";

//Pure function : Rule -1 -A
/**
 *  If function receives input, the function returns the same input without any mutation(change) either with local variables,args,global variables

 */

//wether this function is pure function or not ?
function getData(message) {
    return message
}
console.log(getData('hello'))

//whether this function is pure or not : 
// No this is impure function 
function update(product) {
    //update : mutation 
    product.qty = 1000
    product.price = 999
    return product;
}
const product = {
    id: 1,
    name: 'phone',
    qty: 100,
    price: 133
}
console.log(update(product))

//do you think that Rule-A of Pure function is applied in react?
//Yes! Every Component is pure with respect to props.

//Props are readonly : the compoent 
function Greeter(props) {
    //mutate the props 
   // props.message = "Welcome"
    return <>
        <h1>{props.message}</h1>
    </>
}

const App = () => {
    return <>
        <Greeter message="Hello" />
    </>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)
