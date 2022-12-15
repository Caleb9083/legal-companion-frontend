import React, { useState, useEffect, useContext } from "react";
import Banner from "../components/Banner";
import "./styles/SectionsPage.css";
import { useParams } from "react-router-dom";
import SectionCard from "../components/SectionCard";
import Button from "react-bootstrap/Button";
import AddSectionModal from "../components/AddSectionModal";
import axios from "axios";
import PlaceholderLoader from "../components/PlaceholderLoader";
import { UserContext } from "../context/userContext";
import { BASE_URL } from "../url";
import { toast } from "react-toastify";

const SectionsPage = () => {
  const [sections, setSections] = useState([]);
  const [chapter, setChapter] = useState([]);
  const [constitution, setConstitution] = useState([]);
  const { constitutionId, chapterId } = useParams();
  const [isAddSectionModalOpen, setIsAddSectionModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(UserContext);

  const handleSectionShow = () => {
    setIsAddSectionModalOpen(true);
  };

  const handleSectionClose = () => {
    setIsAddSectionModalOpen(false);
  };

  let sectionsUrl = `${BASE_URL}/api/v2/constitutions/${constitutionId}/chapters/${chapterId}/sections`;
  let chapterUrl = `${BASE_URL}/api/v2/constitutions/${constitutionId}/chapters/${chapterId}`;
  let constitutionUrl = `${BASE_URL}/api/v2/constitutions/${constitutionId}`;

  const getData = async () => {
    try {
      const fetchConstitutionData = await axios
        .get(constitutionUrl)
        .then((res) => {
          setConstitution(res.data);
        });
      const fetchChapterData = await axios.get(chapterUrl).then((res) => {
        setChapter(res.data);
      });
      const fetchSectionData = await axios.get(sectionsUrl).then((res) => {
        setSections(res.data);
      });
      setIsLoading(true);
    } catch (error) {
      toast.error(`Error fetching data: ${error.message}`);
    }
  };

  useEffect(() => {
    getData();
  }, [sections]);

  return (
    <div>
      <div className="sections_container">
        <div className="sections_chapter_head">
          <div className="sections_chapter_title">
            {isLoading ? chapter.title : <PlaceholderLoader />}
          </div>
          <div className="sections_constitution_title">
            {isLoading ? constitution.title : <PlaceholderLoader />}
          </div>
        </div>
        <div className="sections_body">
          {isLoading ? (
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
            })
          ) : (
            <PlaceholderLoader />
          )}
        </div>
        {user.isLoggedIn && (
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
        )}
      </div>
      <Banner />
    </div>
  );
};

export default SectionsPage;
