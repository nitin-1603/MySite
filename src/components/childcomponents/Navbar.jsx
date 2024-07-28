// Navbar.jsx
import { useState } from 'react';
import '../../css components/Navbar.css';

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
                        <li><a href="/">Form</a></li>
                        <li><a href="/useEffectHook">useEffect Hook</a></li>
                        <li><a href="/useMemo">useMemo and useCallback  Hook </a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
