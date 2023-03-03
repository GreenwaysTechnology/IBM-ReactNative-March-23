import ReactDOM from "react-dom/client";
import React from "react";

//state and listener as prop

class Counter extends React.Component {

    //data
    state = {
        counter: 0
    }
    //biz logic
    onIncrement = () => {
        this.setState(previousState => {
            console.log('Previous State /Old State =>', previousState)
            return { ...previousState, counter: previousState.counter + 1 }
        })
    }

    render() {
        //user interface
        return <div>
            {/* Counter and onIncrement as prop  */}
            <CounterDisplay counter={this.state.counter} onIncrement={this.onIncrement} />
        </div>
    }
}

//Presentational Component : The component which has only ui not state and biz logic 
// const CounterDisplay = props => {
//     return <>
//         <h1>Counter App -State </h1>
//         <h2>Counter {props.counter} </h2>
//         <button onClick={props.onIncrement}>+</button>
//     </>
// }
const CounterDisplay = ({ counter, onIncrement }) => <>
    <h1>Counter App -State </h1>
    <h2>Counter {counter} </h2>
    <button onClick={onIncrement}>+</button>
</>

const App = () => {
    return <>
        <Counter />
    </>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)
