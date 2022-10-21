import React from "react";
import "./styles/Footer.css";
import {
    FaTwitterSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <section>
                <footer className="footer-distributed">
                    <div className="footer-left">
                        <h3>
                            Legal<span> Companion</span>
                        </h3>

                        <p className="footer-links">
                            <Link to="#" className="link-1 some_a">
                                Home
                            </Link>

                            <Link to="#" className="some_a">Constitutions</Link>

                            <Link to="#" className="some_a">About</Link>

                            <Link to="#" className="some_a">Services</Link>
                            <Link to="#" className="some_a">Contact</Link>
                        </p>

                        <p className="footer-company-name">Company Name © 2015</p>
                    </div>

                    <div className="footer-center">
                        <div>
                            <i className="fa fa-map-marker"></i>
                            <p>
                                <span>444 S. Cedros Ave</span> Solana Beach, California
                            </p>
                        </div>

                        <div>
                            <i className="fa fa-phone"></i>
                            <p>+1.555.555.5555</p>
                        </div>

                        <div>
                            <i className="fa fa-envelope"></i>
                            <p>
                                <Link to="mailto:support@company.com">support@company.com</Link>
                            </p>
                        </div>
                    </div>

                    <div className="footer-right">
                        <p className="footer-company-about">
                            <span>About the company</span>
                            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
                            euismod convallis velit, eu auctor lacus vehicula sit amet.
                        </p>

                        <div className="footer-icons">
                            <Link className="iconX" to="#">
                                <FaTwitterSquare style={{ width: "2rem", height: "2rem" }} />
                            </Link>
                            <Link className="iconX" to="#">
                                <FaFacebookSquare style={{ width: "2rem", height: "2rem" }} />
                            </Link>
                            <Link className="iconX" to="#">
                                <FaLinkedin style={{ width: "2rem", height: "2rem" }} />
                            </Link>
                            <Link className="iconX" to="#">
                                <FaGithubSquare style={{ width: "2rem", height: "2rem" }} />
                            </Link>
                        </div>
                    </div>
                </footer>
            </section>
        </footer>
    );
};

export default Footer;
