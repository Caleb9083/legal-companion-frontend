import React from "react";
import "./styles/ConstitutionCard.css";
import img from "./Images/ug.jpeg";
import { Link } from "react-router-dom";

const ConstitutionCard = (props) => {
    const { constitutionId } = props;
    return (
        <>
            <Link to={`/constitutions/${constitutionId}`}>
                <div className="card">
                    <img src={img} alt="Avatar" style={{ width: "100%" }} />
                    <div className="card_container">
                        <h4>
                            <b>{props.title}</b>
                        </h4>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default ConstitutionCard;
