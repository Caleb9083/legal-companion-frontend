import React from "react";
import "./styles/Hero.css";
import { Button } from "./Button";
import { AiFillEye } from 'react-icons/ai';

const Hero = () => {
    return (
        <div className="hero_container">
            <div className="hero_left">
                <div className="span_elements">
                    <span>Want to know</span>
                    <span>what some</span>
                    <span>constitutions</span>
                </div>
                <div className="button_container">
                    <Button buttonSize={"btn--medium"}><AiFillEye />View Constitutions</Button>
                </div>
            </div>
            <div className="hero_right">

            </div>
        </div>
    );
};

export default Hero;
