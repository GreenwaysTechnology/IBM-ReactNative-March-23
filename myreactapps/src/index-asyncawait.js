import ReactDOM from "react-dom/client";
import React, { useEffect, useState } from 'react'

const POSTAPI = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    return fetch(url);
}


//parent compoent
const Posts = () => {
    //state
    const [state, setState] = useState({
        error: null,  // to show error 
        isLoaded: false, //spiner status
        posts: [] // data
    })

    async function fetchData() {
        // You can await here
        try {
            // const response = await POSTAPI();
            // const posts = await response.json()
            const posts = await (await POSTAPI()).json()
            setState(prevState => ({ ...prevState, posts: prevState.posts.concat(posts), isLoaded: true }))
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
    const { error, isLoaded, posts } = state
    if (error) {
        return <>Error</>
    } else if (!isLoaded) {
        return <>Loading....</>
    } else {
        return <div>
            <h1>Posts App</h1>
            <ul>
                {posts.map(post => {
                    return <li key={post.id}>{post.title}</li>
                })}
            </ul>
        </div>
    }

}


const App = () => {
    return <div style={{ marginTop: 50, marginLeft: 150, color: 'blueviolet', fontStyle: 'oblique' }}>
        <Posts />
    </div>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)
