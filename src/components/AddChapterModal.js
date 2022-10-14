import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify"


const AddChapterModal = ({ handleClose, handleShow, constitutionId }) => {
    const url =
        `https://project-legal-companion.herokuapp.com/api/v2/constitutions/${constitutionId}/chapters`;
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
                handleClose()
                toast.success('Chapter created successfully')
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
                            <Form.Label>Chapter Name</Form.Label>
                            <Form.Control
                                name="name"
                                value={chapterData.name}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                placeholder="Enter the name of the Chapter"
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


export default AddChapterModal