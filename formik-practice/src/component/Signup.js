//use normal way

import React from 'react'
import { useState } from 'react'


export default function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePass = (e) => {
        setPass(e.target.value)
    }

    const value = { name, email, pass }

    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(value)
        setName('')
        setEmail('')
        setPass('')
    }

    return (
        <div>
            <h2>Signup Form</h2>
            <form onSubmit={handlesubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" required onChange={handleName} value={name} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" required onChange={handleEmail} value={email} />
                </div>
                <div>
                    <label>Pass:</label>
                    <input type="password" name="pass" required onChange={handlePass} value={pass} />
                </div>
                <button type='submit'>Signup</button>
            </form>
        </div>
    )
}

//using formik
// import React from 'react'
// import { useFormik } from 'formik'

// export default function Signup() {

//     const formik = useFormik({
//         initialValues: {
//             name: '',
//             email: '',
//             pass: ''
//         },
//         onSubmit: (values) => {
//             console.log(values)
//         }
//     })


//     return (
//         <div>
//             <h2>Signup Form</h2>
//             <form onSubmit={formik.handleSubmit}>
//                 <div>
//                     <label>Name:</label>
//                     <input type="text" name="name" required onChange={formik.handleChange} value={formik.values.name} />
//                 </div>
//                 <div>
//                     <label>Email:</label>
//                     <input type="email" name="email" required onChange={formik.handleChange} value={formik.values.email} />
//                 </div>
//                 <div>
//                     <label>Pass:</label>
//                     <input type="password" name="pass" required onChange={formik.handleChange} value={formik.values.pass} />
//                 </div>
//                 <button type='submit'>Signup</button>
//             </form>
//         </div>
//     )
// }



