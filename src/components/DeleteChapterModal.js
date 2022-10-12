import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const DeleteChapterModal = ({ handleClose, handleShow, constitutionId, chapterId }) => {
    const url = `https://project-legal-companion.herokuapp.com/api/v2/constitutions/${constitutionId}/chapters/${chapterId}`;
    console.log(url)
    const handleOk = () => {
        axios.delete(url).then((res) => console.log("success"))
    }

    return (
        <>
            <Modal show={handleShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Chapter</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this chapter</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleOk}>
                        Yes
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DeleteChapterModal