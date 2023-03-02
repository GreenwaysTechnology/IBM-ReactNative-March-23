import ReactDOM from "react-dom/client";

//Profile 
const Profile = () => {
    //data 
    const id = 1;
    const name = 'Subramanian Murugan'
    const address = {
        city: 'Coimbatore'
    }
    const status = true

    // Data binding {variable | expression} {id | 10 * 10}
    return <>
        <p>Id  {id} </p>
        <p>Name {name} </p>
        <p>City {address.city}</p>
        <p>Status {status ? "Available" : "Not Available"}</p>
    </>
}



const App = () => <div>
    <Profile />
</div>

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)
