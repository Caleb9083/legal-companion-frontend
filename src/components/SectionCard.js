import React, { useState, useContext } from "react";
import "./styles/SectionCard.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import UpdateSectionModal from "./UpdateSectionModal";
import DeleteSectionModal from "./DeleteSectionModal";
import { UserContext } from "../context/userContext";

const SectionCard = (props) => {
    const { constitutionId, chapterId, sectionId } = props;
    const [isUpdateSectionModalOpen, setIsUpdateSectionModalOpen] =
        useState(false);
    const [isDeleteSectionModalOpen, setIsDeleteSectionModalOpen] =
        useState(false);
    const { isLoggedIn } = useContext(UserContext);

    const handleUpdateSectionShow = () => {
        setIsUpdateSectionModalOpen(true);
    };

    const handleUpdateSectionClose = () => {
        setIsUpdateSectionModalOpen(false);
    };
    const handleDeleteSectionShow = () => {
        setIsDeleteSectionModalOpen(true);
    };

    const handleDeleteSectionClose = () => {
        setIsDeleteSectionModalOpen(false);
    };

    return (
        <div className="section_card_container">
            <div className="section_card_title">
                <div className="section_card_title_text">{props.title}</div>
                {isLoggedIn && (
                    <div className="card_icon card_icon_section">
                        <BiDotsVerticalRounded
                            style={{ width: "30px", height: "30px", color: "#fff" }}
                        />
                        <div className="dropdown-content section">
                            <div
                                className="dropdown-content-item"
                                onClick={handleUpdateSectionShow}>
                                Edit title or content
                            </div>
                            <div
                                className="dropdown-content-item"
                                onClick={handleDeleteSectionShow}>
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
                            {isDeleteSectionModalOpen && (
                                <DeleteSectionModal
                                    handleShow={handleDeleteSectionShow}
                                    handleClose={handleDeleteSectionClose}
                                    constitutionId={`${constitutionId}`}
                                    chapterId={`${chapterId}`}
                                    sectionId={`${sectionId}`}
                                />
                            )}
                        </div>
                    </div>
                )}
            </div>
            <div className="section_card_content">{props.content}</div>
        </div>
    );
};

export default SectionCard;
