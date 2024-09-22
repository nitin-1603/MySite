import { useState } from 'react'
import '../../css components/Login.css'
import Signup from './Signup'
import { NavLink } from 'react-router-dom'

const Login = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: ''
    })

    const [isSignup, setSignup] = useState(false)

    const handleSignupClick = () => {
        setSignup(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setFormData({ name: '', number: "" })
        alert("form is submitted")

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

    }

    return (
        <>
            {
                isSignup ? (<Signup />) : (

                    <div className="login-page">
                        <div className="login-container">
                            <h2>Login</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="input-group">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" id="name" name="name" value={formData.name} required onChange={handleChange} />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="number">Number:</label>
                                    <input type="number" id="number" name="number" value={formData.number} onChange={handleChange} required />
                                </div>
                                <button type="submit">Submit</button>
                                <NavLink to="/signup" onClick={handleSignupClick} className='signup-link'>Signup</NavLink>
                            </form>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Login
