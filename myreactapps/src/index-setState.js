import ReactDOM from "react-dom/client";
import React from "react";


//Class component which declares state:
/**
 * props are data which are sent from parent to child 
 * state are data which are encapuslated within component
 * 
 */
class Counter extends React.Component {

    //declare state for this component
    state = {
        //component specific data
        counter: 0 // initial state
    }
    //listener declaration
    onIncrement = () => {
        // this.state.counter++
        // console.log('state =>', this.state)
        //we should not call render method explcitly, if you do so, there is no impact on ui render.
        //we need to tell react engine to trigger render cycle.
        //this.render()
        //we need to use setState method 
        this.setState(previousState => {
            console.log('Previous State /Old State =>', previousState)
            //You must return immutable object
            // return {
            //     counter: previousState.counter + 1
            // }
            // return Object.assign({}, previousState, { counter: previousState.counter + 1 })
            return { ...previousState, counter: previousState.counter + 1 }
        })
    }

    render() {
        console.log('Current State => ', this.state)
        return <div>
            <h1>Counter App -State </h1>
            <h2>Counter {this.state.counter} </h2>
            {/* Event Binding */}
            <button onClick={this.onIncrement}>+</button>
        </div>
    }
}

const App = () => {
    return <>
        <Counter />
    </>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)
