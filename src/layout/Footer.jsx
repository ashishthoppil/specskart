import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container fluid className="p-0">
        <Row className="g-0">
          <Col lg={6} className="mx-auto text-center">
            {/* <Image src="path/to/your/logo.png" className="footer-logo" fluid /> */}
            <h1 className="footer-logo">SpecsKart</h1>
            <p className="mt-3">
              Discover our stylish and high-quality frames and glasses for every
              occasion.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
