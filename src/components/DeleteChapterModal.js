import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../url";

const DeleteChapterModal = ({
    handleClose,
    handleShow,
    constitutionId,
    chapterId,
}) => {
    const url = `${BASE_URL}/api/v2/constitutions/${constitutionId}/chapters/${chapterId}`;
    const handleOk = () => {
        axios
            .delete(url)
            .then((res) => {
                handleClose();
                toast.success("Chapter deleted successfully");
                console.log(res.data);
            })
            .catch((err) => {
                handleClose();
                toast.error("Chapter not deleted!, Try again");
                console.log(err.message);
            });
    };

    return (
        <>
            <Modal show={handleShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: "#034078" }}>Delete Chapter</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ color: "#034078" }}>Are you sure you want to delete this chapter</Modal.Body>
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

export default DeleteChapterModal;
