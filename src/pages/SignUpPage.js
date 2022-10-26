import React, { useState } from "react";
import "./styles/LoginPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";

const SignUpPage = () => {

    const [signUpData, setSignUpData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e) => {
        const newSignUpData = { ...signUpData }
        newSignUpData[e.target.name] = e.target.value;
        setSignUpData(newSignUpData)
    };

    const { name, email, password, confirmPassword } = signUpData

    const handleSubmit = (e) => {
        e.preventDefault();
        const { password, confirmPassword } = signUpData
        if (password === confirmPassword) {
            axios.post("https://project-legal-companion.herokuapp.com/api/v2/auth/signup", {
                ...signUpData
            }).then((res) => {
                console.log(res.data)
                toast.success("Signed Up successfully")
                setSignUpData({
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                })
            })
        } else {
            console.log("Password don't match")
        }

    }
    return (

        <div className="login_signup_container">
            <div className="login_top_text">
                <p className="top_text_large">Don't have an account?</p>
                <p>Sign up with your email and password</p>
            </div>
            <Form onSubmit={(e) => handleSubmit(e)} style={{ color: "#034078" }}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="name" value={name} onChange={(e) => { handleChange(e) }} type="text" placeholder="Enter username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" value={email} onChange={(e) => { handleChange(e) }} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" value={password} onChange={(e) => handleChange(e)} type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name="confirmPassword" value={confirmPassword} onChange={(e) => { handleChange(e) }} type="password" placeholder="Password" />
                </Form.Group>
                <Button style={{ backgroundColor: "#034078", color: "#fff", border: "none", }} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SignUpPage