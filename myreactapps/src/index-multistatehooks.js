import ReactDOM from "react-dom/client";
import { useState } from "react";

const Counter = props => {
    //state declaration
    const [incValue, setIncValue] = useState(0)
    const [decValue, setDecValue] = useState(100)

    return <CounterDisplay incValue={incValue} decValue={decValue} onDecrement={setDecValue} onIncrement={setIncValue} />
}


const CounterDisplay = ({ incValue, decValue, onIncrement, onDecrement }) => {
    return <>
        <h2>Incrementer {incValue} | Decrementer {decValue}</h2>
        <button onClick={() => {
            onIncrement(incValue + 1)
        }}>+</button>
        <button onClick={() => {
            onDecrement(decValue - 1)
        }}>-</button>
    </>
}

const App = () => {
    return <>
        <Counter />
    </>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)
