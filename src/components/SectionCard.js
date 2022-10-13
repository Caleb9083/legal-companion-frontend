import React from "react";
import "./styles/SectionCard.css";
import { BiDotsVerticalRounded } from "react-icons/bi"

const SectionCard = (props) => {
    return (
        <div className="section_card_container">
            <div className="section_card_title">
                <div className="section_card_title_text">{props.title}</div>
                <div className="card_icon card_icon_section">
                    <BiDotsVerticalRounded
                        style={{ width: "30px", height: "30px", color: "#034078" }}
                    />
                    <div className="dropdown-content section">
                        <div className="dropdown-content-item">
                            Edit title and description
                        </div>
                        <div className="dropdown-content-item">
                            Delete
                        </div>
                    </div>
                </div>
            </div>
            <div className="section_card_content">{props.content}</div>
        </div>
    );
};

export default SectionCard;
