import React from "react";
import "./styles/ContactUs.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ContactUs = () => {
    return (
        <div>
            <div className="contact_section_top">
                <div className="contact_section_top_contents">
                    <h1>Contact Us</h1>
                    <p>Some text about who we are and what we do.</p>
                </div>
            </div>
            <div className="contact_section_main">
                <div className="contact_section_main_left">
                    <div className="contact_section_main_left_top">
                        <p className="contact_section_main_left_top-text">
                            Ipsum consectetur dolore quis ex duis consequat quis non nisi
                            excepteur. Ex est nisi cillum ex culpa eu. Commodo consequat
                            aliqua aliquip esse irure. Quis tempor fugiat minim aliqua laboris
                            nulla nostrud sit et nisi dolore aliqua sint. Proident consequat
                            sint id sunt ad nulla pariatur nisi.
                        </p>
                    </div>
                    <div className="contact_section_main_left_bottom">
                        <p className="contact_section_main_left_bottom-text">
                            You collaborate with strategic copywriters, developers, editors,
                            graphic designers, marketers and strategists to develop powerful
                            marketing programs that move the needle.
                        </p>
                        <p className="contact_section_main_left_bottom-text">
                            Let's discuss your marketing goals. We'd love to help you achieve
                            them.
                        </p>
                    </div>
                </div>
                <div className="contact_section_main_right">
                    <Form
                        style={{
                            color: "#034078",
                            boxShadow: "0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45)",
                            padding: "20px",
                            borderRadius: "15px",
                        }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="John Doe" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1">
                            <Form.Label>How can we help you</Form.Label>
                            <Form.Control
                                placeholder="Let us know how we can better assist you..."
                                as="textarea"
                                rows={3}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Text id="passwordHelpBlock" muted>
                                By clicking Submit, I agree to be contacted at the phone number
                                (by calling or text message) and email address provided with
                                more information or offers about the Legal Companion project.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group style={{ marginTop: "5px" }}>
                            <Button
                                style={{
                                    backgroundColor: "#034078",
                                    color: "#fff",
                                    border: "none",
                                }}
                                variant="primary"
                                type="submit">
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
