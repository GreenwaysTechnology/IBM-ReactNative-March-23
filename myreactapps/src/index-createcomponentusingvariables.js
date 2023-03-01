//component creation using variable pattern
import React from "react";
import  ReactDOM  from "react-dom/client";

//create component
const Heading = <h1>Hello React!</h1>

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(Heading)
