import { Col, Container} from "react-bootstrap";
import LogoutButton from "./Logout";
import LoginButton from "./Login";
import React from "react";
import NavBar from "./Navigation";

const HomePage: React.FC = () => {
    return (
        <Container>
            <NavBar />
            <Col>
            <h1>Welcome to the Task Management Application with Typescript!</h1>
            <p>Welcome to the start of your task management work!</p>
            <LoginButton />
            <LogoutButton />
            </Col>
        </Container>
    );
};

export default HomePage;