import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/ChapterCard.css";
import { GiOpenBook } from 'react-icons/gi'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import DeleteChapterModal from "./DeleteChapterModal";

const ChapterCard = (props) => {
    const { constitutionId, chapterId } = props;
    const [isDeleteChapterModalOpen, setIsDeleteChapterModalOpen] = useState(false)

    const handleDeleteChapterShow = () => {
        setIsDeleteChapterModalOpen(true);
    };

    const handleDeleteChapterClose = () => {
        setIsDeleteChapterModalOpen(false);
    };

    return (
        <div className="constitution_chapter_container">
            <Link
                className="link"
                to={`/constitutions/${constitutionId}/chapters/${chapterId}`}>

                <div className="constitution_chapter_name">
                    <div className="constitution_chapter_icon"><GiOpenBook /></div>
                    <div className="constitution_chapter_title">{`${props.title}:`}</div>
                    <div className="constitution_chapter_description">
                        {props.description}
                    </div>
                </div>
            </Link>
            <div className="card_icon">
                <BiDotsVerticalRounded
                    style={{ width: "30px", height: "30px", color: "#fff" }}
                />
                <div className="dropdown-content">
                    <div className="dropdown-content-item" >
                        Edit name and description
                    </div>
                    <div className="dropdown-content-item" onClick={handleDeleteChapterShow} >
                        Delete
                    </div>
                    {isDeleteChapterModalOpen && (
                        <DeleteChapterModal
                            handleShow={handleDeleteChapterShow}
                            handleClose={handleDeleteChapterClose}
                            constitutionId={`${constitutionId}`}
                            chapterId={`${chapterId}`}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
export default ChapterCard;
