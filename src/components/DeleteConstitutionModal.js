import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast } from "react-toastify";

const DeleteConstitutionModal = ({
    handleClose,
    handleShow,
    constitutionId,
}) => {
    const url = `https://project-legal-companion.herokuapp.com/api/v2/constitutions/${constitutionId}`;

    const handleOk = () => {
        axios
            .delete(url)
            .then((res) => {
                handleClose();
                toast.success("Constitution deleted successfully");
                console.log(res.data);
            })
            .catch((err) => {
                handleClose();
                toast.error("Constitution not deleted!, Try again");
                console.log(err.message);
            });
    };

    return (
        <>
            <Modal show={handleShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: "#034078" }}>Delete Constitution</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ color: "#034078" }}>
                    Are you sure you want to delete this constitution
                </Modal.Body>
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

export default DeleteConstitutionModal;
