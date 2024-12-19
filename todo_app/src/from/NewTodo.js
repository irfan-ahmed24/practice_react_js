import React from 'react'
import { useState } from 'react'

import './NewTodo.css'

export default function NewTodo(props) {
    const [todo, setTodo] = useState({ title: "", desc: "" })

    const { title, desc } = todo

    const handlechange = (e) => {
        const name = e.target.name;
        setTodo({ ...todo, [name]: e.target.value })
    }

    const submithandle = (e) => {
        e.preventDefault()
        props.onaddtodo(todo)
        setTodo({ title: "", desc: "" })
    }

    return (
        <div className='newtodo'>
            <h2>Todo App</h2>
            <form>
                <div>
                    <lebel htmlFor="title">Title:</lebel>
                    <input type="text" id='title' name="title" onChange={handlechange} value={title}></input>
                </div>
                <div>
                    <lebel htmlFor="desc">Description:</lebel>
                    <input type="textarea" id='desc' name="desc" onChange={handlechange} value={desc}></input>
                </div>
                <button type='submit' className='btn' onClick={submithandle}>Add todo</button>
            </form>
        </div>
    )
}
