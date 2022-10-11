import React from "react";
import "./styles/Features.css";
import features_img from "../images/book-library-with-open-textbook.jpg"

const Features = () => {
    return (
        <div className="features_container">
            <div className="features-top">
                <div className="feature-item single">
                    <span className="feature_span">Uploads of some of the</span>
                    <span className="feature_span">popular legislative</span>
                    <span className="feature_span">instruments</span>
                </div>
            </div>
            <div className="features-middle">
                <div className="feature-item ">
                    <span className="feature_span">Uploads of some of the</span>
                    <span className="feature_span">popular legislative</span>
                    <span className="feature_span">instruments</span>
                </div>
                <div className="feature-img">
                    <img style={{ height: "100%", width: "100%" }} src={features_img} alt="features_img" />
                </div>
                <div className="feature-item">
                    <span className="feature_span">Uploads of some of the</span>
                    <span className="feature_span">popular legislative</span>
                    <span className="feature_span">instruments</span>
                </div>
            </div>
            <div className="features-bottom">
                <div className="feature-item single">
                    <span className="feature_span">Uploads of some of the</span>
                    <span className="feature_span">popular legislative</span>
                    <span className="feature_span">instruments</span>
                </div>
            </div>
        </div>
    );
};

export default Features;