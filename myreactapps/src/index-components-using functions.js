import React from "react";
import ReactDOM from "react-dom/client";

//component creation  using functions
// function Heading() {
//     return <h1>Hello React!</h1>
// }
// const Heading = () => {
//     return <h1>Hello React!</h1>
// }
const Heading = () => <h1>Hello React!</h1>


const rootElement = ReactDOM.createRoot(document.getElementById('root'))
// rootElement.render(<Heading></Heading>)
rootElement.render(<Heading />)
