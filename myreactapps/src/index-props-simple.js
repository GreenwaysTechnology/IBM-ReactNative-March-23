//Props Pattern: data is supplied from the parent component

import ReactDOM from "react-dom/client";

//Child Component
//property is object which is bag of properties
// const Greeter = (msg) => {
//     console.log(msg)
//     return <>
//         <h2>Child Component</h2>
//         <h3>{msg.message} {msg.name}</h3>
//     </>
// }
// const Greeter = props => {
//     return <>
//         <h2>Child Component</h2>
//         <h3>{props.message} {props.name}</h3>
//     </>
// }

// const Greeter = props => {
//     const { message, name } = props
//     return <>
//         <h2>Child Component</h2>
//         <h3>{message} {name}</h3>
//     </>
// }
const Greeter = ({ message, name }) => <>
    <h2>Child Component</h2>
    <h3>{message} {name}</h3>
</>

//Parent Compoent
const App = () => {

    const name = 'Ram'
    const message = 'Hai'
    return <div>
        <h1>Parent Component</h1>
        <hr />
        {/* {Greeter('hello')} */}
        <Greeter message="Hello" name="Subramanian" />
        <Greeter message={message} name={name} />

    </div>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)
