import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import axios from "axios";

const DeleteConstitutionModal = ({ handleClose, handleShow, constitutionId }) => {
    // const url = `https://project-legal-companion.herokuapp.com/api/v2/constitutions/${constitutionId}`;
    return (
        <>
            <Modal show={handleShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Constitution</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this constitution</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
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

export default DeleteConstitutionModal;
