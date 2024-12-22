import React from 'react'

import Faq from './Faq'

import { data } from './Data'

export default function FAQs() {

    return (
        <div>
            {
                data.map((dta) => <Faq key={dta.id} dta={dta} />)
            }
        </div>
    )
}
