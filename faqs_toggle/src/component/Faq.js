import React from 'react'
import { useState } from 'react';

export default function Faq(datas) {
    const data = datas.dta;
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <section>
                <h2>{data.question}</h2>
                <div>
                    <button onClick={() => { setToggle(!toggle) }}>{toggle ? "-" : "+"}</button>
                    {toggle && <h3>{data.answer}</h3>}
                </div>
            </section>
        </div>
    )
}
