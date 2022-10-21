import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";

const AddSectionModal = ({
    handleClose,
    handleShow,
    constitutionId,
    chapterId,
}) => {
    const url = `https://project-legal-companion.herokuapp.com/api/v2/constitutions/${constitutionId}/chapters/${chapterId}/sections`;
    const [sectionData, setSectionData] = useState({
        constitution: constitutionId,
        chapter: chapterId,
        title: "",
        content: "",
    });

    const handleChange = (e) => {
        const newSection = { ...sectionData };
        newSection[e.target.name] = e.target.value;
        setSectionData(newSection);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(url, {
                title: sectionData.title,
                content: sectionData.content,
            })
            .then((res) => {
                handleClose();
                toast.success("Section created successfully");
                console.log(res.data);
            })
            .catch((err) => {
                handleClose();
                toast.error("Section not created!, Try again");
                console.log(err.message);
            });
    };

    return (
        <>
            <Modal show={handleShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: "#034078" }}>Add a new section</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ color: "#034078" }}>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Section Title</Form.Label>
                            <Form.Control
                                name="title"
                                value={sectionData.title}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                placeholder="Enter the title of the section"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                name="content"
                                value={sectionData.content}
                                onChange={(e) => handleChange(e)}
                                as="textarea"
                                placeholder="Enter the content for the section"
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

export default AddSectionModal;
