import React, { useState, useContext } from "react";
import "./styles/LoginPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from '../context/userContext'
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext);
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const newLoginData = { ...loginData };
        newLoginData[e.target.name] = e.target.value;
        setLoginData(newLoginData);
    };

    const { email, password } = loginData;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { data } = await axios
            .post("https://project-legal-companion.herokuapp.com/api/v2/auth/signin", {
                ...loginData,
            })
        // .then((res) => {

        //     toast.success("Signed Up successfully");
        //     setLoginData({
        //         email: "",
        //         password: "",
        //     });
        // });

        if (data.status === "success") {
            toast.success("Successfully Logged In")
            setUser({
                isLoggedIn: true,
                email: data.data.user[0].email,
                name: data.data.user[0].name
            })
            navigate("/")

        } else {
            toast.error("Wrong Username or Password")
        }
    };

    return (
        <div className="login_login_container">
            <div className="login_top_text">
                <p className="top_text_large">Already have an account?</p>
                <p>Sign in with your email and password</p>
            </div>
            <Form onSubmit={(e) => handleSubmit(e)} style={{ color: "#034078" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        name="email"
                        value={email}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        type="email"
                        placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        value={password}
                        onChange={(e) => handleChange(e)}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>
                <Button
                    style={{
                        backgroundColor: "#034078",
                        color: "#fff",
                        border: "none",
                        marginRight: "1.5rem",
                    }}
                    variant="primary"
                    type="submit">
                    Sign in
                </Button>
                <Button
                    style={{ backgroundColor: "#034078", color: "#fff", border: "none" }}
                    variant="primary"
                    type="submit">
                    Sign in with Google
                </Button>
            </Form>
        </div>
    );
};

export default LoginPage;
