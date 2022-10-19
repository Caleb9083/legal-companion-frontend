import React from "react";
import Hero from "../components/Hero";
import "./styles/Home.css";
import Features from "../components/Features";
const Home = () => {
    return (
        <div>
            <div className="hero_section">
                <Hero />
            </div>
            <div className="hero_next_section">
                <div className="hero_next_img"></div>
                <div className="features_section">
                    <Features />
                </div>
            </div>
        </div>
    );
};

export default Home;
