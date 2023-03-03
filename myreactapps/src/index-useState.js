import ReactDOM from "react-dom/client";
import React, { useState } from "react";


class Counter__ extends React.Component {

    state = {
        counter: 0 // initial state
    }
    onIncrement = () => {
        this.setState(previousState => {
            console.log('Previous State /Old State =>', previousState)
            return { ...previousState, counter: previousState.counter + 1 }
        })
    }

    render() {
        console.log('Current State => ', this.state)
        return <div>
            <h1>Counter App -State </h1>
            <h2>Counter {this.state.counter} </h2>
            <button onClick={this.onIncrement}>+</button>
        </div>
    }
}
////////////////////////////////////////////////////////////////////////////////////
//Functional Component with state
/**
 * 
 * The class component state must be object  state = {}
 * The functional component using hooks state can be even primitive, even though if you write primitive behind the scene it will be object only
 * in hooks we never use setState method instead we can use our own setState eq pure funcitons
 *  
 */
const Counter = props => {
    //state declaration
    const [counter, setCounter] = useState(0)

    //listener 
    // const onIncrement = () => {
    //     // setCounter(previousCounter => {
    //     //     console.log('Previous State /Old State =>', previousCounter)
    //     //     return previousCounter + 1
    //     // })
    //     setCounter(counter + 1)
    // }

    console.log('Current State =>', counter)
    // return <CounterDisplay counter={counter} setCounter={setCounter} />
    return <CounterDisplay counter={counter} onIncrement={setCounter} />


}

const CounterDisplay = ({ counter, onIncrement }) => {
    return <>
        <h1>Counter App -Using Hooks </h1>
        <h2>Counter {counter}</h2>
        {/* <button onClick={onIncrement}>+</button> */}
        {/* Inline Listener */}
        <button onClick={() => {
            onIncrement(counter + 1)
        }}>+</button>
    </>
}

const App = () => {
    return <>
        <Counter />
    </>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)
