import ReactDOM from "react-dom/client";
import React from "react";


//Class component which declares state:
/**
 * props are data which are sent from parent to child 
 * state are data which are encapuslated within compoent
 * 
 */
class Counter extends React.Component {

    //declare state for this component
    state = {
        //component specific data
        counter: 0 // initial state
    }


    render() {

        console.log('state => ', this.state)
        return <div>
            <h1>Counter App -State </h1>
            <h2>Counter {this.state.counter} </h2>
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
