import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import './Home.css'

import Show from './Show'
import NewTodo from './NewTodo'




export default function Home() {

    const [todos, setTodos] = useState([])

    const handleaddtodo = (todo) => {
        setTodos([...todos, { id: uuid(), todo }])
    }
    const handleRemove = (id) => {
        const folterTodo = todos.filter(todo => todo.id !== id)
        setTodos(folterTodo)
    }

    return (
        <div className="home">
            <div className='todo'>
                <NewTodo onaddtodo={handleaddtodo} />
                <Show todos={todos} onRemove={handleRemove} />
            </div>
        </div>
    )
}
