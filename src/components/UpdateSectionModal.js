import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../url";

const UpdateSectionModal = ({
    handleClose,
    handleShow,
    constitutionId,
    chapterId,
    sectionId,
}) => {
    const url = `${BASE_URL}/api/v2/constitutions/${constitutionId}/chapters/${chapterId}/sections/${sectionId}`;

    const [sectionData, setSectionData] = useState({
        title: "",
        content: "",
    });

    useEffect(() => {
        axios.get(url).then((res) =>
            setSectionData({
                title: res.data.title,
                content: res.data.content,
            })
        );
    }, []);

    const handleChange = (e) => {
        const newSection = { ...sectionData };
        newSection[e.target.name] = e.target.value;
        setSectionData(newSection);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(url, {
                title: sectionData.title,
                content: sectionData.content,
            })
            .then((res) => {
                handleClose();
                toast.success("Section updated successfully");
            })
            .catch((err) => {
                handleClose();
                toast.error("Section not Updated!, Try again");
            });
    };
    return (
        <>
            <Modal show={handleShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: "#034078" }}>Update Chapter Section</Modal.Title>
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
                                placeholder="Enter the title of the Section"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                name="content"
                                value={sectionData.content}
                                onChange={(e) => handleChange(e)}
                                as="textarea"
                                style={{ height: "150px" }}
                                placeholder="Enter the content for this section"
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

export default UpdateSectionModal;
