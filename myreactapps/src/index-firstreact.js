//create dom element using react 
import React from "react";
import ReactDOM from "react-dom/client";

//declarative programming
const Heading = <h1>Hello React</h1>
const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(Heading)
