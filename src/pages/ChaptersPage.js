import React, { useState, useEffect, useContext } from "react";
import "./styles/ChaptersPage.css";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BsPlusLg } from "react-icons/bs";
import ChapterCard from "../components/ChapterCard";
import Banner from "../components/Banner";
import AddChapterModal from "../components/AddChapterModal";
import axios from "axios";
import PlaceholderLoader from "../components/PlaceholderLoader";
import { UserContext } from "../context/userContext";

const ChaptersPage = () => {
    const [chapters, setChapters] = useState([]);
    const [constitution, setConstitution] = useState([]);
    const { constitutionId } = useParams();
    const [isChapterModalOpen, setIsChapterModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { isLoggedIn } = useContext(UserContext);

    const handleChapterShow = () => {
        setIsChapterModalOpen(true);
    };

    const handleChapterClose = () => {
        setIsChapterModalOpen(false);
    };

    let chaptersUrl = `https://project-legal-companion.herokuapp.com/api/v2/constitutions/${constitutionId}/chapters`;
    let constitutionUrl = `https://project-legal-companion.herokuapp.com/api/v2/constitutions/${constitutionId}`;

    const getData = async () => {
        try {
            const fetchConstitutionData = await axios
                .get(constitutionUrl)
                .then((res) => {
                    setConstitution(res.data);
                });
            const fetchChapterData = await axios.get(chaptersUrl).then((res) => {
                setChapters(res.data);
            });
            setIsLoading(true);
        } catch (error) {
            console.log(`Error fetching data: ${error.message}`);
        }
    };

    useEffect(() => {
        getData();
    }, [chapters]);

    return (
        <div className="chapters_container">
            <div className="constitution_title">
                {isLoading ? constitution.title : <PlaceholderLoader />}
            </div>

            <div className="constitution_sub_section_title">Preamble</div>
            <div className="constitution_preamble_container">
                <div className="constitution_preamble_body">
                    {isLoading ? constitution.preamble : <PlaceholderLoader />}
                </div>
            </div>
            <div className="constitution_sub_section_title ">Chapters</div>

            <div className="constitution_chapters">
                {isLoading ? (
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
                    })
                ) : (
                    <PlaceholderLoader />
                )}
            </div>
            {isLoggedIn && (
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
            )}

            <Banner />
        </div>
    );
};

export default ChaptersPage;
