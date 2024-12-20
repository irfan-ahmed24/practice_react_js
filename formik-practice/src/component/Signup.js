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
// import * as yup from 'yup'

// export default function Signup() {

//     const formik = useFormik({
//         initialValues: {
//             name: '',
//             email: '',
//             pass: ''
//         },
//         validationSchema: yup.object({
//             name: yup.string().min(4, "name must have 4 character").required(),
//             email: yup.string().email().required(),
//             pass: yup.string().min(8, "password must have 8 character").required()
//         }),
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
//                 {formik.touched.name && formik.errors.name && <p>{formik.errors.name}</p>}
//                 <div>
//                     <label>Email:</label>
//                     <input type="email" name="email" required onChange={formik.handleChange} value={formik.values.email} />
//                 </div>
//                 {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}

//                 <div>
//                     <label>Pass:</label>
//                     <input type="password" name="pass" required onChange={formik.handleChange} value={formik.values.pass} />
//                 </div>
//                 {formik.touched.pass && formik.errors.pass && <p>{formik.errors.pass}</p>}
//                 <button type='submit'>Signup</button>
//             </form>
//         </div>
//     )
// }



