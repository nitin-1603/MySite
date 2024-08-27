// Navbar.jsx
import { useState } from 'react';
import '../../css components/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <a href="/" className="logo">MySite</a>
                <button className="navbar-toggler" onClick={handleToggleMenu}>
                    ☰
                </button>
                <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                      
                        <li><NavLink to="/form">Form</NavLink></li>
                        <li><NavLink to="/useEffectHook">useEffect Hook</NavLink></li>
                        <li><NavLink to="/useMemo">useMemo and useCallback  Hook </NavLink></li>
                        <li><NavLink to="/cart">Cart Item </NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
