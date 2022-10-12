import React, { useState } from "react";
import "./styles/ConstitutionCard.css";
import img from "../images/download.png";
import { Link } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import DeleteConstitutionModal from "./DeleteConstitutionModal";
import UpdateConstitutionModal from "./UpdateConstitutionModal";

const ConstitutionCard = (props) => {
    const { constitutionId } = props;

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

    const handleUpdateShow = () => {
        setIsDeleteModalOpen(true);
    };

    const handleUpdateClose = () => {
        setIsUpdateModalOpen(false);
        console.log("close clicked")
    };

    const handleDeleteShow = () => {
        setIsUpdateModalOpen(true);
    };

    const handleDeleteClose = () => {
        setIsDeleteModalOpen(false);
        console.log("close clicked")
    };

    return (
        <>
            <div className="card">
                <img
                    src={img}
                    alt="Avatar"
                    style={{ width: "100%", borderRadius: "25px 25px 0px 0px" }}
                />
                <div className="card_title_container">
                    <div className="card_name">
                        <Link className="card_name" to={`/constitutions/${constitutionId}`}>
                            {props.title}
                        </Link>
                    </div>

                    <div className="card_icon">
                        <BiDotsVerticalRounded
                            style={{ width: "30px", height: "30px", color: "#034078" }}
                        />
                        <div className="dropdown-content">
                            <div className="dropdown-content-item" onClick={handleUpdateShow}>
                                Edit name and preamble
                            </div>
                            <div className="dropdown-content-item" onClick={handleDeleteShow}>
                                Delete
                            </div>
                            {isUpdateModalOpen && (
                                <UpdateConstitutionModal
                                    handleShow={handleUpdateShow}
                                    handleClose={handleUpdateClose}
                                    constitutionId={`${constitutionId}`}
                                />
                            )}

                            {isDeleteModalOpen && (
                                <DeleteConstitutionModal
                                    handleShow={handleDeleteShow}
                                    handleClose={handleDeleteClose}
                                    constitutionId={`${constitutionId}`}
                                />
                            )}

                        </div>
                    </div>
                </div>
                <div className="card_open_container">
                    <Link to={`/constitutions/${constitutionId}`}>
                        <Button>Open</Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ConstitutionCard;
