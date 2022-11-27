import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./styles/Constitution.css";
import ConstitutionCard from "../components/ConstitutionCard";
import { FaUpload } from "react-icons/fa";
import CustomModal from "../components/CustomModal";
import vid from "../images/background-video.mp4";
import axios from "axios";
import PlaceholderLoader from "../components/PlaceholderLoader";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Constitution = () => {
    const [searchValue, setSearchValue] = useState("");
    const [data, setData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { user, setUser } = useContext(UserContext);

    console.log(user.isLoggedIn);
    const handleShow = () => {
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    const getConstitutionData = async () => {
        try {
            const fetchData = await axios
                .get(
                    "https://project-legal-companion.herokuapp.com/api/v2/constitutions/"
                )
                .then((res) => {
                    setData(res.data);
                });
            setIsLoading(true);
        } catch (error) {
            console.log(`Error fetching data: ${error.message}`);
        }
    };

    useEffect(() => {
        getConstitutionData();
    }, [data]);

    return (
        <div>
            <div className="constitution">
                <div className="constitution_hero_section">
                    <div className="constituion_hero_text_top">
                        Legislative instruments
                    </div>
                    <div className="constituion_hero_text_down">
                        <div className="constituion_hero_text">
                            Read through the popular legislative instruments.
                        </div>
                        <div className="constituion_hero_text">
                            Edit name and preamble of existing legislative instruments.
                        </div>
                        <div className="constituion_hero_text">
                            Upload new legislative instruments.
                        </div>
                        <div className="constituion_hero_text">
                            Delete legislative instruments as well.
                        </div>
                    </div>
                </div>
                <div className="constitution_search">
                    <form className="search_field_container">
                        <input
                            className="search_input"
                            name="search"
                            type="text"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <Button className="customX_button">Search Document</Button>
                    </form>
                </div>
                <div className="constitution_main">
                    <div className="constitution_main_head">All Documents</div>
                    <div className="constitution_main_body">
                        {isLoading ? (
                            data.map((el) => (
                                <ConstitutionCard
                                    key={el._id}
                                    title={el.title}
                                    constitutionId={el._id}
                                />
                            ))
                        ) : (
                            <PlaceholderLoader />
                        )}
                    </div>
                    <div className="constitution_upload">
                        {isModalOpen && (
                            <CustomModal handleShow={handleShow} handleClose={handleClose} />
                        )}
                        {user.isLoggedIn && (
                            <Button className="customX_button" onClick={handleShow}>
                                <FaUpload /> Upload new document
                            </Button>
                        )}
                    </div>
                </div>
            </div>
            <div className="background_video">
                <video
                    src={vid}
                    autoPlay
                    loop
                    muted
                    className="background_video_content"
                />
                <div className="foreground">
                    <p className="foreground-text">
                        Laboris ut dolore tempor nisi voluptate officia officia. Cillum
                        excepteur elit in officia nisi magna minim nisi officia eu tempor
                        proident nulla. Do aute mollit reprehenderit elit proident qui est
                        id consequat aliquip excepteur. Fugiat id reprehenderit id minim
                        tempor ex ut nostrud eu et.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Constitution;
