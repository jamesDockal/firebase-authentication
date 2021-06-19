import React, { useState, useContext } from "react";

import { Form, Button, Jumbotron, Row, Col, Container } from "react-bootstrap";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { UserContext } from "../context/UserContext";

import { FacebookProvider, GoogleProvider } from "../utils/authProviders";
import signUpWithEmailAndPassword from "../utils/signUpWithEmailAndPassoword";
import signOut from "../utils/singOut";
import { socialMediaAuth } from "../utils/socialMediaAuth";

export default function SignUp() {
  const { User, setUser } = useContext(UserContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [erro, setErro] = useState();

  const socialLogin = async (provider) => {
    const user = await socialMediaAuth(provider);
    setUser(user);
  };

  const handleLogin = async (e) => {
    try {
      const user = await signUpWithEmailAndPassword(email, password);
      setUser(user);
    } catch (er) {
      setErro(er.message);
      console.log(erro);
    }
  };

  return (
    <Jumbotron>
      <Container>
        <Row className="justify-content: center">
          <Col className="text-center mt-5 p-3">
            {User && <h1>{User.email}</h1>}
            Sign Up
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Button onClick={() => handleLogin()} variant="primary btn-block">
                Login
              </Button>
            </Form>
            <FacebookLoginButton
              onClick={() => socialLogin(FacebookProvider)}
            />
            <GoogleLoginButton onClick={() => socialLogin(GoogleProvider)} />
            <Button onClick={() => signOut()}>signout</Button>
            {erro && <h1>{erro}</h1>}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
