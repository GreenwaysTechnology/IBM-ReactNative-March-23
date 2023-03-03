import ReactDOM from "react-dom/client";
import { useState } from "react";

const Counter = props => {
    const [counter, setCounter] = useState({ incValue: 0, decValue: 100 })

    const onIncrement = () => {
        // setCounter(prevCounter => {
        //     return { ...prevCounter, incValue: prevCounter.incValue + 1 }
        // })
        // setCounter(prevCounter => ({ ...prevCounter, incValue: prevCounter.incValue + 1 }))
        setCounter(({ ...counter, incValue: counter.incValue + 1 }))
    }

    return <>
        <h1>Counter Hooks Using Object</h1>
        <h2>Counter Incrementer {counter.incValue} | Decrementer {counter.decValue}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            setCounter(prevCounter => {
                return { ...prevCounter, decValue: prevCounter.decValue - 1 }
            })
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
