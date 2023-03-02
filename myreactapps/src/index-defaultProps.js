
import ReactDOM from "react-dom/client";

//This is child component
const Greeter = props => <>
    <h3>{props.message} {props.name}</h3>
</>

//Default Props
Greeter.defaultProps = {
    message: 'Default Message',
    name: 'Default Name'
}

//This is parent
const App = () => {
    //variables
    const name = 'Ram'
    const message = 'Hai'
    //jsx comments
    return <div>
        {/* This is jsx comment */}
        <hr />
        <Greeter message="Hello" name="Subramanian" />
        <Greeter message={message} name={name} />
        {/* No properties passed */}
        <Greeter />
        <Greeter message='welcome' />
    </div>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)
