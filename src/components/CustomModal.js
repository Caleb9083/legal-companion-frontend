import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import axios from "axios";

function CustomModal({ handleClose, handleShow }) {
    const url =
        "https://project-legal-companion.herokuapp.com/api/v2/constitutions/";
    const [constitutionData, setConstitutionData] = useState({
        name: "",
        preamble: "",
    });

    const handleChange = (e) => {
        const newConstitution = { ...constitutionData };
        newConstitution[e.target.name] = e.target.value;
        setConstitutionData(newConstitution);
        console.log(constitutionData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(url, {
                title: constitutionData.name,
                preamble: constitutionData.preamble,
            })
            .then((res) => {
                console.log(res.data);
            });
    };

    return (
        <>
            <Modal show={handleShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a new constitution</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                        <Button variant="primary" type="submit">
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
}

export default CustomModal;
