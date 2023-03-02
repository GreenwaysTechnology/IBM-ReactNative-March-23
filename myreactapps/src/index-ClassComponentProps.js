import ReactDOM from "react-dom/client";
import React from "react";
import PropTypes from 'prop-types'

// const User = ({ id, name, status, address: { city } }) => {
//     return <>
//         <h1>Id {id}</h1>
//         <h1>Name {name}</h1>
//         <h1>Status {status ? "Available" : "Not Available"}</h1>
//         <h1>City {city}</h1>
//     </>
// }

class User extends React.Component {

    render() {
        //in class component props are accessed using this keyword.
        const { id, name, status, address: { city } } = this.props
        return <>
            <h1>Id {id}</h1>
            <h1>Name {name}</h1>
            <h1>Status {status ? "Available" : "Not Available"}</h1>
            <h1>City {city}</h1>
        </>
    }
}

//prop validation rule 
User.propTypes = {
    id: PropTypes.number    //Id must be number
}
//Prop default values
User.defaultProps = {
    id: 0,
    name: 'default Name',
    status: false,
    address: {
        city: 'default city'
    }
}


const App = () => {
    let id = "abcd"
    id = 1
    let name = "Subramanian"
    let status = false
    let address = {
        city: 'Coimbatore'
    }
    return <>
        <User id={id} name={name} status={status} address={address} />
        <User />

    </>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)
