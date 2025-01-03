import React from 'react'
import { useState } from 'react'

import './new.css'

export default function New(props) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const data = { title, desc }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onData(data);
        setTitle('');
        setDesc('');
    }
    return (
        <div className='newTodo'>
            <form onSubmit={handleSubmit} className='form'>
                <div className='title'>
                    <input type='text' id='title' name='title' onChange={(e) => setTitle(e.target.value)} placeholder='Enter Title...' value={title} />
                </div>
                <div className='desc'>
                    <textarea id='desc' name='desc' onChange={(e) => setDesc(e.target.value)} placeholder='Enter desc....' value={desc}></textarea>
                </div>
                <button type='submit' className='btn'>Send</button>
            </form>
        </div>
    )
}
