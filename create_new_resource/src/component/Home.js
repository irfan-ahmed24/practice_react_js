import React from 'react'
import New from './New'
import Show from './Show'

export default function Home() {
    const data = [
        {
            id: 1,
            title: "this is title 1",
            desc: "this is description 1"
        },
        {
            id: 2,
            title: "this is title 2",
            desc: "this is description 2"
        },
        {
            id: 3,
            title: "this is title 3",
            desc: "this is description 3"
        },
        {
            id: 4,
            title: "this is title 4",
            desc: "this is description 4"
        }
    ]
    return (
        <div>
            <New />
            <Show data={data} />
        </div>
    )
}
