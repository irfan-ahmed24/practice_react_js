import React from 'react'
import { useState } from 'react'

export default function New() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, desc)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' id='title' name='title' onChange={(e) => setTitle(e.target.value)} />
                <textarea id='desc' name='desc' onChange={(e) => setDesc(e.target.value)}></textarea>
                <button type='submit'>Send</button>
            </form>
        </div>
    )
}
