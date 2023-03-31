import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
} from "reactstrap";
import axiosInstance from "../../axios";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
    console.log(process.env);
    if (username.length && password.length) {
      // props.showError(null);
      const payload = {
        email: username,
        password: password,
      };
      axiosInstance
        .post(`/create`, payload)
        .then(function (response) {
          if (response.status === 200) {
            console.log(response);
            navigate("/");
          } else {
            console.log("Some error ocurred");
          }
        })
        .catch(function (error) {
          console.log(error);
          setShowError(true);
        });
    } else {
      console.log("Please enter valid username and password");
    }
  };

  return (
    <Container className="d-flex justify-content-left align-items-center vh-80">
      <Form className="p-5" onSubmit={handleLogin}>
        <h2 className="mb-4">Login</h2>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        {showError && (
          <Alert color="danger">Invalid username or password</Alert>
        )}
        <Button color="primary" className="w-100">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginScreen;
