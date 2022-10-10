import React from "react";
import "./styles/SectionCard.css";

const SectionCard = (props) => {
    return (
        <div className="section_card_container">
            <div className="section_card_title">
                <div className="section_card_title_text">{props.title}</div>
            </div>
            <div className="section_card_content">{props.content}</div>
        </div>
    );
};

export default SectionCard;
