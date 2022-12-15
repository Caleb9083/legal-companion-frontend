import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../url";
import { UserContext } from "../context/userContext";

const DeleteChapterModal = ({
  handleClose,
  handleShow,
  constitutionId,
  chapterId,
}) => {
  const { user } = useContext(UserContext);
  const url = `${BASE_URL}/api/v2/constitutions/${constitutionId}/chapters/${chapterId}`;
  const handleOk = () => {
    axios
      .delete(url, {
        headers: {
          ContentType: "application/json",
          authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        if (res.data.status === "success") {
          handleClose();
          toast.success("Chapter deleted successfully");
        } else {
          handleClose();
          toast.error(`${res.data.message}`);
        }
      });
  };

  return (
    <>
      <Modal show={handleShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#034078" }}>Delete Chapter</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "#034078" }}>
          Are you sure you want to delete this chapter
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

export default DeleteChapterModal;
