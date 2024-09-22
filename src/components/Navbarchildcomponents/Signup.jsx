import { useState } from 'react';
import '../../css components/Signup.css'
import { NavLink } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        emailOrNumber: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Implement your signup logic here
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <h2>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">First Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="firstname"
                            value={formData.firstname}
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="name">First Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="lastname"
                            value={formData.lastname}
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phoneNumber">Email or Number:</label>
                        <input
                            type="phone"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Signup</button>
                    <NavLink to='/login' className="login-link">Login</NavLink>
                </form>
            </div>
        </div>
    );
};

export default Signup;
