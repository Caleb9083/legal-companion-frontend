import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../url";

const UpdateConstitutionModal = ({
    handleClose,
    handleShow,
    constitutionId,
}) => {
    const url = `${BASE_URL}/api/v2/constitutions/${constitutionId}`;

    const [constitutionData, setConstitutionData] = useState({
        name: "",
        preamble: "",
    });

    useEffect(() => {
        axios.get(url).then((res) =>
            setConstitutionData({
                name: res.data.title,
                preamble: res.data.preamble,
            })
        );
    }, []);

    const handleChange = (e) => {
        const newConstitution = { ...constitutionData };
        newConstitution[e.target.name] = e.target.value;
        setConstitutionData(newConstitution);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(url, {
                title: constitutionData.name,
                preamble: constitutionData.preamble,
            })
            .then((res) => {
                handleClose();
                toast.success("Constitution updated successfully");
            })
            .catch((err) => {
                handleClose();
                toast.error("Constitution not Updated!, Try again");
            });
    };
    return (
        <>
            <Modal show={handleShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: "#034078" }}>Update constitution</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ color: "#034078" }}>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Constitution Name</Form.Label>
                            <Form.Control
                                name="name"
                                value={constitutionData.name}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                placeholder="Enter the name of the Constitution"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Preamble</Form.Label>
                            <Form.Control
                                name="preamble"
                                value={constitutionData.preamble}
                                onChange={(e) => handleChange(e)}
                                as="textarea"
                                placeholder="Enter the Preamble"
                            />
                        </Form.Group>
                        <Button style={{ backgroundColor: "#034078", color: "#fff", border: "none" }} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Discard
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UpdateConstitutionModal;
