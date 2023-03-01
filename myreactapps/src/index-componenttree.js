import React from "react";
import ReactDOM from "react-dom/client";

const MenuItem = () => <div>
    <a href="#Home">Home</a> |
    <a href="#Services"> Services </a> |
    <a href="#contactus"> Contact us </a> |
    <a href="#products"> Products </a>
</div>

const MenuBar = () => <nav>
    <MenuItem />
</nav>

const Heading = () => <div>
    <MenuBar />
    <h1>IBM</h1>
    <hr />
</div>


const Body = () => <div>
    <p>
        The React is declarative lib for building user interfaces
    </p>
    <p>
        The React is declarative lib for building user interfaces
    </p>    <p>
        The React is declarative lib for building user interfaces
    </p>    <p>
        The React is declarative lib for building user interfaces
    </p>
</div>
const Footer = () => <div>
    <h2>Footer</h2>
</div>

//Application Component
const App = () => <div>
    <Heading />
    <Body />
    <Footer />
</div>

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)
