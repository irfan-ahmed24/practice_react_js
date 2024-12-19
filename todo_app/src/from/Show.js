import React from 'react'


import './Show.css'

export default function Show(props) {
    const todos = props.todos;
    const handledelete = (id) => {
        props.onRemove(id);
    }
    return (
        <div className='showTodo'>
            {
                todos.map(todo =>
                    <div key={todo.id} className='new' id={todo.id}>
                        <div>
                            <h2>{todo.todo.title}</h2>
                            <p>{todo.todo.desc}</p>
                        </div>
                        <button onClick={() => { handledelete(todo.id) }}>
                            <i class="fa fa-trash fa-2x"></i>
                        </button>
                    </div>)
            }
        </div>
    )
}
