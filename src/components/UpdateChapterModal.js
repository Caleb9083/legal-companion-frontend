import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../url";
import { UserContext } from "../context/userContext";

const UpdateChapterModal = ({
  handleClose,
  handleShow,
  constitutionId,
  chapterId,
}) => {
  const { user } = useContext(UserContext);
  const url = `${BASE_URL}/api/v2/constitutions/${constitutionId}/chapters/${chapterId}`;

  const [chapterData, setChapterData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    axios.get(url).then((res) => {
      setChapterData({
        title: res.data.chapter.title,
        description: res.data.chapter.description,
      });
    });
  });

  const handleChange = (e) => {
    const newChapter = { ...chapterData };
    newChapter[e.target.name] = e.target.value;
    setChapterData(newChapter);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        url,
        {
          title: chapterData.title,
          description: chapterData.description,
        },
        {
          headers: {
            ContentType: "application/json",
            authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === "success") {
          handleClose();
          toast.success("Chapter updated successfully");
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
          <Modal.Title style={{ color: "#034078" }}>
            Update Constitution Chapter
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "#034078" }}>
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
                style={{ height: "80px" }}
                placeholder="Enter the description"
              />
            </Form.Group>
            <Button
              style={{
                backgroundColor: "#034078",
                color: "#fff",
                border: "none",
              }}
              variant="primary"
              type="submit"
            >
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
