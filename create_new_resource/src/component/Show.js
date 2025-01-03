import React from 'react'

import './show.css'

export default function Show(props) {
    const todos = props.data;
    return (
        <div className='todos'>
            {todos.map((todo) => <div key={todo.id} className='todo'>
                <h3>{todo.title}</h3>
                <p>{todo.desc}</p>
            </div>)}
        </div>
    )
}
