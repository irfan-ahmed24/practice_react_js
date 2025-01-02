import React from 'react'

export default function Show(props) {
    const todos = props.data;
    return (
        <div>
            {todos.map((todo) => <div key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.desc}</p>
            </div>)}
        </div>
    )
}
