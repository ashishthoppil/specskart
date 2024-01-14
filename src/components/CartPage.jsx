import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const products = useSelector((state) => state.cart.products);

  const navigate = useNavigate();

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#333",
        minHeight: "100vh",
        padding: "10rem",
      }}
    >
      <Row className="align-items-center justify-content-center h-100">
        <Col md={12}>
          <h1 className="pb-5" style={{ color: "white" }}>
            Shopping Cart
          </h1>

          <Row>
            {products.map((product) => (
              <div
                key={product.id}
                className="d-flex mt-4 p-5 border border-light"
              >
                <Col md={6} className="">
                  <Card style={{ backgroundColor: "#444", border: "none" }}>
                    <Card.Img variant="top" src={product.img} />
                  </Card>
                </Col>
                <Col md={6} className="m-auto">
                  <h1 className="text-white text-center">{product.name}</h1>
                </Col>
              </div>
            ))}
          </Row>
        </Col>

        <Col>
          <Button
            className="mt-5 rounded-0 py-4"
            variant="outline-light"
            style={{ display: "block", margin: "0 auto" }}
            onClick={() => navigate("/shipping")}
          >
            Go to Shipping
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
