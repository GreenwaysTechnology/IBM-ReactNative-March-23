import ReactDOM from "react-dom/client";
import React, { useEffect } from 'react'

//parent compoent
const Parent = () => {
    //Component did Mount
    useEffect(() => {
        console.log('parent componentDidMount is called')
    }, [])
    console.log('Parent render is called')
    return <>
        <h1>Parent Compoent</h1>
        <Child />
    </>
}

//child compoenent
const Child = () => {
    //Component did Mount
    useEffect(() => {
        console.log('Child componentDidMount is called')
    }, [])
    console.log('Child render is called')
    return <>
        <h1>Child Compoent</h1>
    </>
}

const App = () => {
    return <>
        <Parent />
    </>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)
