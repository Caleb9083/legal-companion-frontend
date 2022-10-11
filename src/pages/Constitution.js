import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./styles/Constitution.css";
import ConstitutionCard from "../components/ConstitutionCard";
import { FaUpload } from 'react-icons/fa'
import consti_img from '../images/consti.png'
import CustomModal from "../components/CustomModal";

const Constitution = () => {
    const [searchValue, setSearchValue] = useState("");
    const [data, setData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleShow = () => {
        setIsModalOpen(true)
    }

    const handleClose = () => {
        setIsModalOpen(false)
    }

    useEffect(() => {
        fetch("https://project-legal-companion.herokuapp.com/api/v2/constitutions/")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then((jsonData) => {
                setData(jsonData);
            })
            .catch((error) => console.log(`Error fetching data: ${error.message}`));
    }, []);

    return (
        <div className="constitution">
            <div className="constitution_hero_section">
                <div className="constituion_hero_text top">
                    Read through the popular legislative instruments
                </div>
                <div className="constituion_hero_text">
                    Edit name and preamble of existing legislative instruments
                </div>
                <div className="constituion_hero_text">
                    Upload new legislative instruments as well
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
                    <Button >
                        Search Document
                    </Button>
                </form>
            </div>
            <div className="constitution_main">
                <div className="constitution_main_head">All Documents</div>
                <div className="constitution_main_body">
                    {data &&
                        data.map((el) => (
                            <ConstitutionCard
                                key={el._id}
                                title={el.title}
                                constitutionId={el._id}
                            />
                        ))}
                </div>
                <div className="constitution_upload">
                    {isModalOpen && <CustomModal handleShow={handleShow} handleClose={handleClose} />}
                    <Button onClick={handleShow}><FaUpload />Upload new document</Button>
                </div>
                <div className="constitution_bottom">
                    <img src={consti_img} alt="consti_img" />
                </div>
            </div>
        </div>
    );
};

export default Constitution;
