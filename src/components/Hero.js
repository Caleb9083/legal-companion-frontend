import React from 'react'
import "./styles/Hero.css"
import { Button } from "./Button"

const Hero = () => {
    return (
        <div className='hero_container'>
            <div className='hero_left'>
                <span>Want to know</span>
                <span>what some</span>
                <span>constitutions</span>
                <div className="button_container">
                    <Button buttonSize={"btn--medium"}>View Constitutions</Button>
                </div>
            </div>
            <div className='hero_right'></div>
        </div>
    )
}

export default Hero