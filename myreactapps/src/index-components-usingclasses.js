import React from "react";
import ReactDOM from "react-dom/client";

class Heading extends React.Component {
    
    render() {
        return <h1>Hello React!</h1>
    }
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<Heading />)
