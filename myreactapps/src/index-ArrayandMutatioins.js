import ReactDOM from "react-dom/client";
import React from "react";


class Todo extends React.Component {

    //data
    state = {
        todos: [{ id: 0, title: 'learn react', completed: false }]
    }
    onAdd = () => {
        this.setState(previousState => {
            console.log('state', previousState)
            //mutate array
            let newTodo = {
                id: Math.random(),
                title: 'learn new Things',
                completed: false
            }
           // return { ...previousState, todos: previousState.todos.concat(newTodo) }
           return { ...previousState, todos:[...previousState.todos,newTodo] }
        })
    }
    render() {
        const { todos } = this.state
        return <div>
            {
                todos.map(todo => {
                    return <div key={todo.id}>
                        <p>id : {todo.id}</p>
                        <p>title: {todo.title}</p>
                        <p>Status: {todo.completed ? 'done' : 'Not Done'}</p>
                    </div>
                })
            }
            <h1>Add New Todo</h1>
            <button onClick={this.onAdd}>+</button>
        </div>
    }
}



const App = () => {
    return <div style={{ margin: 50 }}>
        <Todo />
    </div>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<App />)
