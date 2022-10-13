import React, { useState } from "react";
import "./styles/SectionCard.css";
import { BiDotsVerticalRounded } from "react-icons/bi"
import UpdateSectionModal from "./UpdateSectionModal";

const SectionCard = (props) => {
    const { constitutionId, chapterId, sectionId } = props;
    const [isUpdateSectionModalOpen, setIsUpdateSectionModalOpen] = useState(false)

    const handleUpdateSectionShow = () => {
        setIsUpdateSectionModalOpen(true);
    };

    const handleUpdateSectionClose = () => {
        setIsUpdateSectionModalOpen(false);
    };

    return (
        <div className="section_card_container">
            <div className="section_card_title">
                <div className="section_card_title_text">{props.title}</div>
                <div className="card_icon card_icon_section">
                    <BiDotsVerticalRounded
                        style={{ width: "30px", height: "30px", color: "#034078" }}
                    />
                    <div className="dropdown-content section">
                        <div className="dropdown-content-item" onClick={handleUpdateSectionShow}>
                            Edit title and description
                        </div>
                        <div className="dropdown-content-item">
                            Delete
                        </div>
                        {isUpdateSectionModalOpen && (
                            <UpdateSectionModal
                                handleShow={handleUpdateSectionShow}
                                handleClose={handleUpdateSectionClose}
                                constitutionId={`${constitutionId}`}
                                chapterId={`${chapterId}`}
                                sectionId={`${sectionId}`}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className="section_card_content">{props.content}</div>
        </div>
    );
};

export default SectionCard;
