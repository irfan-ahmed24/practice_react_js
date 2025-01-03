import React from 'react'
import { useState } from 'react'

import New from './New'
import Show from './Show'
import './Home.css'

export default function Home() {
    const [data, setData] = useState([])
    const recieveData = (todo) => {
        const { title, desc } = todo
        setData([...data, { title: title, desc: desc }])
    }
    return (
        <div className='container'>
            <New onData={recieveData} />
            <Show data={data} />
        </div>
    )
}
