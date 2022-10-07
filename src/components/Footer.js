import React from "react";
import "./styles/Footer.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <footer>
            <div className="footer_top">
                <div className="footer_top_items"><BsFillTelephoneFill />+233 57 2141 392</div>
                <div className="footer_top_items"><FiMail />calebosam12@gmail.com</div>
                <div className="footer_top_items"><IoLocationSharp />Location</div>
            </div>
            <div className="footer_bottom">LEGAL COMPANION</div>
        </footer>
    );
};

export default Footer;
