import React, { useState, useContext } from "react";
import "./styles/LoginPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../url";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
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

    const { data } = await axios.post(
      `${BASE_URL}/api/v2/auth/signin`,
      {
        ...loginData,
      }
    );

    if (data.status === "success") {
      toast.success("Successfully Logged In");
      setUser({
        isLoggedIn: true,
        email: data.data.user.email,
        name: data.data.user.name,
        token: data.token
      });
      navigate("/");
    } else {
      toast.error(`${data.message}`);
    }
  };

  return (
    <div className="login_login_container">
      <div className="login_top_text">
        <p className="top_text_large">Already have an account?</p>
        <p>Sign in with your email and password</p>
      </div>
      <Form onSubmit={(e) => handleSubmit(e)} style={{ color: "#034078" }}>
        <Form.Group className="mb-3">
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

        <Form.Group className="mb-3">
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
          }}
          variant="primary"
          type="submit">
          Sign in
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
