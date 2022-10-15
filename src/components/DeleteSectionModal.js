import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast } from "react-toastify";

const DeleteSectionModal = ({
    handleClose,
    handleShow,
    constitutionId,
    chapterId,
    sectionId,
}) => {
    const url = `https://project-legal-companion.herokuapp.com/api/v2/constitutions/${constitutionId}/chapters/${chapterId}/sections/${sectionId}`;
    const handleOk = () => {
        axios
            .delete(url)
            .then((res) => {
                handleClose();
                toast.success("Section deleted successfully");
                console.log(res.data);
            })
            .catch((err) => {
                handleClose();
                toast.error("Section not deleted!, Try again");
                console.log(err.message);
            });
    };

    return (
        <>
            <Modal show={handleShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Section</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this section</Modal.Body>
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

export default DeleteSectionModal;
