import React, { useState, useEffect } from "react";
import "./styles/ChaptersPage.css";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BsPlusLg } from "react-icons/bs";
import ChapterCard from "../components/ChapterCard";
import Banner from "../components/Banner";
import AddChapterModal from "../components/AddChapterModal";

const ChaptersPage = () => {
    const [chapters, setChapters] = useState([]);
    const [constitution, setConstitution] = useState([]);
    const { constitutionId } = useParams();
    const [isChapterModalOpen, setIsChapterModalOpen] = useState(false);

    const handleChapterShow = () => {
        setIsChapterModalOpen(true);
    };

    const handleChapterClose = () => {
        setIsChapterModalOpen(false);
    };

    useEffect(() => {
        let chaptersUrl = `https://project-legal-companion.herokuapp.com/api/v2/constitutions/${constitutionId}/chapters`;
        let constitutionUrl = `https://project-legal-companion.herokuapp.com/api/v2/constitutions/${constitutionId}`;
        fetch(chaptersUrl)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then((chapterData) => {
                setChapters(chapterData);
            });

        fetch(constitutionUrl)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then((constitutionData) => {
                setConstitution(constitutionData);
            });
    }, [chapters]);

    return (
        <div className="chapters_container">
            <div className="constitution_title">
                {constitution && constitution.title}
            </div>

            <div className="constitution_sub_section_title">Preamble</div>
            <div className="constitution_preamble_container">
                <div className="constitution_preamble_body">
                    {constitution && constitution.preamble}
                </div>
            </div>
            <div className="constitution_sub_section_title ">Chapters</div>

            <div className="constitution_chapters">
                {chapters &&
                    chapters.map((chapter) => {
                        return (
                            <ChapterCard
                                key={chapter._id}
                                title={chapter.title}
                                description={chapter.description}
                                constitutionId={chapter.constitution}
                                chapterId={chapter._id}
                            />
                        );
                    })}
            </div>
            <div className="chapter_add_button_container">
                <div className="chapter_add_button">
                    {isChapterModalOpen && (
                        <AddChapterModal
                            constitutionId={`${constitutionId}`}
                            handleShow={handleChapterShow}
                            handleClose={handleChapterClose}
                        />
                    )}
                </div>
                <Button
                    style={{ backgroundColor: "#034078" }}
                    onClick={handleChapterShow}>
                    <BsPlusLg style={{ marginRight: "4px", width: "0.8rem" }} />
                    Add new chapter
                </Button>
            </div>
            <Banner />
        </div>
    );
};

export default ChaptersPage;
