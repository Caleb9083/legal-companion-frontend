import React, { useState, useEffect } from "react";
import "./styles/ChaptersPage.css";
import { useParams } from "react-router-dom";
import ConstitutionCard from "../components/ConstitutionCard";
import { Button } from "../components/Button";
import { BsPlusLg } from "react-icons/bs";

const ChaptersPage = () => {
    const [chapters, setChapters] = useState([]);
    const [constitution, setConstitution] = useState([]);
    const { constitutionId } = useParams();

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
    }, []);

    return (
        <div className="chapters_containter">
            <div className="constitution_title">
                {constitution && constitution.title}
            </div>
            <div className="constituion_img"></div>
            <div className="constitution_sub_section_title">Preamble</div>
            <div className="constitution_preamble_container">
                <div className="constitution_preamble_body">
                    {constitution && constitution.preamble}
                </div>
            </div>
            <div className="constitution_sub_section_title ">
                <div className="chapter_head">
                    Chapters{" "}
                    <Button buttonSize="btn-large">
                        <BsPlusLg />
                        Add new chapter
                    </Button>
                </div>
            </div>
            <div className="constitution_chapters">
                {chapters &&
                    chapters.map((chapter) => {
                        return (
                            <ConstitutionCard
                                key={chapter._id}
                                title={chapter.title}
                                description={chapter.description}
                                constitutionId={chapter.constitution}
                                chapterId={chapter._id}
                            />
                        );
                    })}
            </div>
            <div className="Constitution_ammendments"></div>
        </div>
    );
};

export default ChaptersPage;
