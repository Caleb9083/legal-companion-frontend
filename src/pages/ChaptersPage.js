import React, { useState, useEffect } from "react";
import "./styles/ChaptersPage.css";
import { useParams } from "react-router-dom";
import ConstitutionCard from "../components/ConstitutionCard";

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
        <div className="constitution_area_containter">
            <div className="constitution_title">
                <h1>{constitution && constitution.title}</h1>
            </div>
            <div className="constitution_preamble">
                {constitution && constitution.preamble}
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
