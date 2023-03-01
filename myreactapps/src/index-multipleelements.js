//returning multiple dom elements
import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => <div>
    <h1>Hello</h1>
    <h1>Hai</h1>
    <h2>Welcome</h2>
</div>


const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<Heading />)
