import React, { useState, useEffect } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";


const UpdateConstitutionModal = ({ handleClose, handleShow, constitutionId, show }) => {
    const url =
        `https://project-legal-companion.herokuapp.com/api/v2/constitutions/${constitutionId}`;

    const [constitutionData, setConstitutionData] = useState({
        name: "",
        preamble: "",
    });

    useEffect(() => {
        axios.get(url).then((res) => setConstitutionData({
            name: res.data.title,
            preamble: res.data.preamble,
        }))
    }, [])


    const handleChange = (e) => {
        const newConstitution = { ...constitutionData };
        newConstitution[e.target.name] = e.target.value;
        setConstitutionData(newConstitution);

    };

    const handleSubmit = (e) => {
        axios
            .put(url, {
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
                    <Modal.Title>Update constitution</Modal.Title>
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
    )
}

export default UpdateConstitutionModal