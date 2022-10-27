import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import { UserContext } from "../context/userContext";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const { user, setUser } = useContext(UserContext);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const handleLogout = () => {
        setUser({
            name: "",
            email: "",
            isLoggedIn: false,
        });
        navigate("/");
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
                    {user.isLoggedIn ? (
                        <div className="nav-right">
                            <li className="nav-item">
                                <Link className="nav-links-right-user">{user.name}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-links-right" onClick={handleLogout}>
                                    <Button
                                        style={{
                                            backgroundColor: "#034078",
                                            color: "#fff",
                                            border: "none",
                                        }}>
                                        Logout
                                    </Button>
                                </Link>
                            </li>
                        </div>
                    ) : (
                        <div className="nav-right">
                            <li className="nav-item">
                                <Link
                                    className="nav-links-right"
                                    onClick={closeMobileMenu}
                                    to="/auth">
                                    <Button
                                        style={{
                                            backgroundColor: "#034078",
                                            color: "#fff",
                                            border: "none",
                                        }}>
                                        Sign in
                                    </Button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-links-right"
                                    onClick={closeMobileMenu}
                                    to="/auth">
                                    <Button
                                        style={{
                                            backgroundColor: "#5aa6ed",
                                            color: "#fff",
                                            border: "none",
                                        }}>
                                        Sign Up
                                    </Button>
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
