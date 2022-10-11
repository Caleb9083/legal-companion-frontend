import React from "react";
import "./styles/ConstitutionCard.css";
import img from "../images/download.png";
import { Link } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Button from "react-bootstrap/Button";

const ConstitutionCard = (props) => {
    const { constitutionId } = props;
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
                            <Link className="dropdown-content-item" to="#">
                                Edit name and preamble
                            </Link>
                            <Link className="dropdown-content-item" to="#">
                                Delete
                            </Link>
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
