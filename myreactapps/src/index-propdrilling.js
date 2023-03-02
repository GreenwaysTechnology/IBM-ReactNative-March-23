import ReactDOM from "react-dom/client";

const USER = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
}

export const Address = props => {
    return <>
        <h3>Address</h3>
        <p>Street {props.address.street}</p>
        <p>Street {props.address.suite}</p>
        <p>Street {props.address.city}</p>
        <p>Street {props.address.zipcode}</p>
    </>
}
export const Location = props => {

    return <>
        <h3>Location</h3>
        <p>Lat {props.geo.lat}</p>
        <p>Lng {props.geo.lat}</p>
    </>
}
export const Company = props => {
    return <>
        <h3>Company</h3>
        <p>Name {props.company.name}</p>
    </>
}

export const UserInfo = props => {

    return <>
        <h2>Id {props.user.id}</h2>
        <p>Name {props.user.name}</p>
        <p>User Name {props.user.username}</p>
        <p>Email {props.user.email}</p>
        <p>Phone {props.user.phone}</p>
        <p>Url {props.user.website}</p>
    </>
}
//Prop driling
export const User = props => {
    return <>
        <UserInfo user={props.user} />
        <Address address={props.user.address} />
        <Location geo={props.user.address.geo} />
        <Company company={props.user.company} />
    </>
}
//Add default Props

const App = () => {
    return <div>
        <User user={USER} />
    </div>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)
