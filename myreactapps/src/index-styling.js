import React from "react";
import ReactDOM from "react-dom/client";
//import css files : 
//Global Styles are applied across the application, which is imported inside - index.js
import './index.css'
import './App.css'
import { Heading } from './layouts/header/Header'


//const Heading = () => <h1 class="App-header">Hello React!</h1>
//const Heading = () => <h1 className="App-header">Hello React!</h1>


const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<Heading />)
