import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateChapterModal = ({
    handleClose,
    handleShow,
    constitutionId,
    chapterId,
}) => {
    const url = `https://project-legal-companion.herokuapp.com/api/v2/constitutions/${constitutionId}/chapters/${chapterId}`;

    const [chapterData, setChapterData] = useState({
        title: "",
        description: "",
    });

    useEffect(() => {
        axios.get(url).then((res) =>
            setChapterData({
                title: res.data.title,
                description: res.data.description,
            })
        );
    }, []);

    const handleChange = (e) => {
        const newChapter = { ...chapterData };
        newChapter[e.target.name] = e.target.value;
        setChapterData(newChapter);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(url, {
                title: chapterData.title,
                description: chapterData.description,
            })
            .then((res) => {
                handleClose();
                toast.success("Chapter updated successfully");
            })
            .catch((err) => {
                handleClose();
                toast.error("Chapter not Updated!, Try again");
            });
    };
    return (
        <>
            <Modal show={handleShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Constitution Chapter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Chapter Name</Form.Label>
                            <Form.Control
                                name="title"
                                value={chapterData.title}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                placeholder="Enter the title of the Chapter"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                name="description"
                                value={chapterData.description}
                                onChange={(e) => handleChange(e)}
                                as="textarea"
                                placeholder="Enter the description"
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
};

export default UpdateChapterModal;
