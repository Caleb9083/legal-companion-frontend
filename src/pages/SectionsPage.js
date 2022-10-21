import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import "./styles/SectionsPage.css";
import { useParams } from "react-router-dom";
import SectionCard from "../components/SectionCard";
import Button from "react-bootstrap/Button";
import AddSectionModal from "../components/AddSectionModal";

const SectionsPage = () => {
    const [sections, setSections] = useState([]);
    const [chapter, setChapter] = useState([]);
    const [constitution, setConstitution] = useState([]);
    const { constitutionId, chapterId } = useParams();
    const [isAddSectionModalOpen, setIsAddSectionModalOpen] = useState(false);

    const handleSectionShow = () => {
        setIsAddSectionModalOpen(true);
    };

    const handleSectionClose = () => {
        setIsAddSectionModalOpen(false);
    };

    useEffect(() => {
        let sectionsUrl = `https://project-legal-companion.herokuapp.com/api/v2/constitutions/${constitutionId}/chapters/${chapterId}/sections`;
        let chapterUrl = `https://project-legal-companion.herokuapp.com/api/v2/constitutions/${constitutionId}/chapters/${chapterId}`;
        let constitutionUrl = `https://project-legal-companion.herokuapp.com/api/v2/constitutions/${constitutionId}`;
        fetch(sectionsUrl)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then((sectionData) => {
                setSections(sectionData);
            });

        fetch(chapterUrl)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then((chapterData) => {
                setChapter(chapterData);
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
    }, [sections]);

    return (
        <div>
            <div className="sections_container">
                <div className="sections_chapter_head">
                    <div className="sections_chapter_title">
                        {chapter && chapter.title}
                    </div>
                    <div className="sections_constitution_title">
                        {constitution && constitution.title}
                    </div>
                </div>
                <div className="sections_body">
                    {sections &&
                        sections.map((el) => {
                            return (
                                <SectionCard
                                    key={el._id}
                                    title={el.title}
                                    content={el.content}
                                    constitutionId={el.constitution}
                                    chapterId={el.chapter}
                                    sectionId={el._id}
                                />
                            );
                        })}
                </div>
                <div className="sections_add_button_container">
                    <div className="sections_add_button">
                        {isAddSectionModalOpen && (
                            <AddSectionModal
                                constitutionId={`${constitutionId}`}
                                chapterId={`${chapterId}`}
                                handleShow={handleSectionShow}
                                handleClose={handleSectionClose}
                            />
                        )}
                        <Button className="customX_button" onClick={handleSectionShow}>
                            Add new section
                        </Button>
                    </div>
                </div>
            </div>
            <Banner />
        </div>
    );
};

export default SectionsPage;
