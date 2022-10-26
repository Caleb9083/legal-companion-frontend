import React from "react";
import "./styles/LoginPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginPage = () => {
    return (
        <div className="login_container">
            <div className="login_login_container">
                <div className="login_top_text">
                    <p className="top_text_large">Already have an account?</p>
                    <p>Sign in with your email and password</p>
                </div>
                <Form style={{ color: "#034078" }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button style={{ backgroundColor: "#034078", color: "#fff", border: "none", marginRight: "1.5rem" }} variant="primary" type="submit">
                        Sign in
                    </Button>
                    <Button style={{ backgroundColor: "#034078", color: "#fff", border: "none", }} variant="primary" type="submit">
                        Sign in with Google
                    </Button>
                </Form>
            </div>
            <div className="login_signup_container">
                <div className="login_top_text">
                    <p className="top_text_large">Don't have an account?</p>
                    <p>Sign up with your email and password</p>
                </div>
                <Form style={{ color: "#034078" }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button style={{ backgroundColor: "#034078", color: "#fff", border: "none", }} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;
