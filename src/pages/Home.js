import React from 'react'
import Hero from '../components/Hero'
import "./styles/Home.css"
import hero_next_img from '../images/wooden-gavel-books-wooden-table (1).jpg'
import Features from '../components/Features'
const Home = () => {
    return (
        <div>
            <div className="hero_section">
                <Hero />
            </div>
            <div className='hero_next_section'>
                <div className="hero_next_img">
                    {/* <img style={{
                        height: "500px", width: "100%", backgroundPosition: "center",
                        backgroundSize: "cover"
                    }} src={hero_next_img} alt="hero_next_img" /> */}
                </div>
                <div className="features_section">
                    <Features />
                </div>
            </div>
        </div>
    )
}

export default Home