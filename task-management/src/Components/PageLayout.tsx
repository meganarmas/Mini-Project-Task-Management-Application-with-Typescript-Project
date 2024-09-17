import { Col, Container } from "react-bootstrap";
import React from "react";
import NavBar from "./Navigation";

type PageLayoutProps = {
    children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return(
        <Container>
            <Col>
            <NavBar />
            </Col>
            {children}
        </Container>
    );
};

export default PageLayout;