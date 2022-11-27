import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../url";

const AddChapterModal = ({ handleClose, handleShow, constitutionId }) => {
    const url = `${BASE_URL}/api/v2/constitutions/${constitutionId}/chapters`;
    const [chapterData, setChapterData] = useState({
        constitution: constitutionId,
        name: "",
        description: "",
    });

    const handleChange = (e) => {
        const newConstitution = { ...chapterData };
        newConstitution[e.target.name] = e.target.value;
        setChapterData(newConstitution);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(url, {
                title: chapterData.name,
                description: chapterData.description,
            })
            .then((res) => {
                handleClose();
                toast.success("Chapter created successfully");
                console.log(res.data);
            })
            .catch((err) => {
                handleClose();
                toast.error("Chapter not created!, Try again");
                console.log(err.message);
            });
    };

    return (
        <>
            <Modal show={handleShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: "#034078" }}>Add a new chapter</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ color: "#034078" }}>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Chapter Name</Form.Label>
                            <Form.Control
                                name="name"
                                value={chapterData.name}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                placeholder="Enter the name of the Chapter"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                name="description"
                                value={chapterData.description}
                                onChange={(e) => handleChange(e)}
                                as="textarea"
                                placeholder="Enter the Description"
                                required
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

export default AddChapterModal;
