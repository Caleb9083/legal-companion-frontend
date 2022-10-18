import React from "react";
import "./styles/Hero.css";
import Button from "react-bootstrap/Button"
import { AiFillEye } from 'react-icons/ai';

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
                </div>
            </div>

        </div>
    );
};

export default Hero;
