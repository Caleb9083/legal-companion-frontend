import React from "react";
import "./styles/Hero.css";
import Button from "react-bootstrap/Button"
import { AiFillEye } from 'react-icons/ai';
import hero_right_img from "../images/court-hammer-books-judgment-law-concept.jpg"

const Hero = () => {
    return (
        <div className="hero_container">
            <div className="hero_left">
                <div className="span_elements">
                    <span>Would you like to</span>
                    <span>know what some </span>
                    <span>constitutions talk</span>
                    <span>about?</span>
                </div>
                <div className="button_container">
                    <Button variant="primary" className="size"><AiFillEye /> View Constitutions</Button>
                </div>
            </div>
            <div className="hero_right">
                <div className="hero_image_container">
                    {/* <img style={{ height: "100%", width: "100%" }} src={hero_right_img} alt="hero_right_img" /> */}
                </div>
            </div>

        </div>
    );
};

export default Hero;
