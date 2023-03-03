import ReactDOM from "react-dom/client";
import React from 'react'

//parent compoent
class Parent extends React.Component {
    constructor() {
        super()
        console.log('parent constructor is called')
    }
    render() {
        console.log('parent render is called')
        return <>
            <h1>Parent Compoent</h1>
            <Child/>
        </>
    }
    componentDidMount(){
        console.log('parent componentDidMount is called')
    }
}

//child compoenent
class Child extends React.Component {
    constructor() {
        super()
        console.log('Child constructor is called')
    }
    render() {
        console.log('Child render is called')
        return <>
            <h1>Child Compoent</h1>
        </>
    }
    componentDidMount(){
        console.log('Child componentDidMount is called')
    }
}

const App = () => {
    return <>
        <Parent />
    </>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)
