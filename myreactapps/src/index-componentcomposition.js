import React from "react";
import ReactDOM from "react-dom/client";
import { Heading } from "./layouts/header/Header";

//Application Component
const App = () => <div>
    <Heading />
</div>

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)