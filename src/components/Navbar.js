import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import { UserContext } from "../context/userContext";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const { isLoggedIn } = useContext(UserContext);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Legal Companion
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/constitutions"
                                className="nav-links"
                                onClick={closeMobileMenu}>
                                Constitutions
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-links"
                                onClick={closeMobileMenu}
                                to="/contact-us">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    {isLoggedIn ? (
                        <div></div>
                    ) : (
                        <div className="nav-right">
                            <li className="nav-item">
                                <Link
                                    className="nav-links"
                                    onClick={closeMobileMenu}
                                    to="/auth">
                                    Sign in
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-links"
                                    onClick={closeMobileMenu}
                                    to="/auth">
                                    Sign Up
                                </Link>
                            </li>
                        </div>
                    )}

                    {button}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
