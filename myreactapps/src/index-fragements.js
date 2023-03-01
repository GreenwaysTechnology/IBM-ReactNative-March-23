// import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

//every opened element must be closed 
// const Heading = () => {
//     return <h1>Hello
// }

//some elements may not have closing tags, you can use self closing
// const Heading = () => {
//     return <div>
//         <h1>Hello</h1>
//         <hr/>
//     </div>
// }

//we have to wrap the elements under single root element
// const Heading = () => {

//     return <div>
//         <h1>Hello</h1>
//         <h2>Hai</h2>
//         <h3>Welcome</h3>
//     </div>
// }

// const Heading = () => {
//     return <React.Fragment>
//         <h1>Hello</h1>
//         <h2>Hai</h2>
//         <h3>Welcome</h3>
//     </React.Fragment>
// }

// const Heading = () => {
//     return <Fragment>
//         <h1>Hello</h1>
//         <h2>Hai</h2>
//         <h3>Welcome</h3>
//     </Fragment>
// }
const Heading = () => {
    return <>
        <h1>Hello</h1>
        <h2>Hai</h2>
        <h3>Welcome</h3>
    </>
}


const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<Heading />)
