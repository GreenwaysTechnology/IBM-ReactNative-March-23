import ReactDOM from "react-dom/client";
import { PHOTOS } from './mock-data/photos'
import  "./index.css"
/**
 * Array Iteration apis
 *  =>for..each
 *  =>map
 *  =>filter 
 *  =>reduce 
 *we use always map
 */
//List binding

const List = props => {
    const { numList } = props
    return <>
        <h1>List Rendering</h1>
        <ul>
            {
                // numList.map(item => {
                //     console.log(item)
                //     return <li>{item}</li>
                // })
                numList.map(item => <li key={item}>{item}</li>)
            }
        </ul>
    </>
}

const Photo = props => {

    const { photos } = props
    return <div>
        <div>
            {
                photos.map(photo => {
                    return <div key={photo.id}>
                        <h2>id  {photo.id}</h2>
                        <h3>{photo.title}</h3>
                        <img src={photo.thumbnailUrl} alt="Your Pic" />
                    </div>
                })
            }
        </div>
    </div>
}



const App = () => {
    const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return <div>
        <List numList={numList} />
        <Photo photos={PHOTOS} />
    </div>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)
