import ReactDOM from "react-dom/client";
import React from "react";


class Counter extends React.Component {

    //data
    state = {
        incValue: 0,
        decValue: 100
    }
    //biz logic
    onIncrement = () => {
        this.setState(previousState => {
            console.log('Previous State /Old State =>', previousState)
            return { ...previousState, incValue: previousState.incValue + 1 }
        })
    }
    onDecrement = () => {
        this.setState(previousState => {
            console.log('Previous State /Old State =>', previousState)
            return { ...previousState, decValue: previousState.decValue - 1 }
        })
    }

    render() {
        //user interface
        console.log('current State =>', this.state)
        return <div>
            {/* Counter and onIncrement as prop  */}
            {/* <CounterDisplay decValue={this.state.decValue} incValue={this.state.incValue} onIncrement={this.onIncrement} onDecrement={this.onDecrement} /> */}
            {/* Rest/Spread operator to merge proproperties */}
            {/* {...this.state} means we pass all state variable prop */}
            <CounterDisplay {...this.state} onIncrement={this.onIncrement} onDecrement={this.onDecrement} />
        </div>
    }
}

const CounterDisplay = ({ incValue, decValue, onIncrement,onDecrement }) => <>
    <h1>Counter App -State </h1>
    <h2>Counter Increment {incValue} | Decrement {decValue} </h2>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>

</>

const App = () => {
    return <>
        <Counter />
    </>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)
