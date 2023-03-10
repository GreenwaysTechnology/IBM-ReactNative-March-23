import ReactDOM from "react-dom/client";
import React, { useEffect, useState } from 'react'

const PHOTOSAPI = () => {
    const url = 'https://jsonplaceholder.typicode.com/photos'
    return fetch(url);
}


//parent compoent
const Photos = () => {
    //state
    const [state, setState] = useState({
        error: null,  // to show error 
        isLoaded: false, //spiner status
        photos: [] // data
    })

    async function fetchData() {
        // You can await here
        try {
            const photos = await (await PHOTOSAPI()).json()
            setState(prevState => ({ ...prevState, photos: prevState.photos.concat(photos), isLoaded: true }))
        }
        catch (err) {
            setState(prevState => ({ ...prevState, isLoaded: true, error: err }))
        }

    }
    //componentDidMount
    useEffect(() => {
        fetchData();
    }, [])



    {/* Here we need to display three different things: Error,loader,data */ }
    {/* Conditional Rendering */ }
    const { error, isLoaded, photos } = state
    if (error) {
        return <>Error</>
    } else if (!isLoaded) {
        return <>Loading....</>
    } else {
        return <div>
            <h1>Photo App</h1>
            <div>
                {photos.map(photo => {
                    return <div>
                        <h1>{photo.title}</h1>
                        <img src={photo.thumbnailUrl} alt="Your pic" />
                    </div>
                })}
            </div>
        </div>
    }

}


const App = () => {
    return <div style={{ marginTop: 50, marginLeft: 150, color: 'blueviolet', fontStyle: 'oblique' }}>
        <Photos />
    </div>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)
