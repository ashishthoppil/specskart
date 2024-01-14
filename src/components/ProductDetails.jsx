import { Card, Button, Container, Row, Col } from "react-bootstrap";
import React, { useCallback } from "react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { useParams } from "react-router-dom";

import { addToCart, removeFromCart } from "../slices/cartSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const productId = useParams("productId");
  const cartItems = useSelector((state) => state.cart.products);
  const products = useSelector((state) => state.productList.products);
  const product = products.filter(
    (item) => item.productName === productId.productId
  )[0];

  const checkCart = useCallback(
    (product) => {
      const cartItem = cartItems.filter(
        (item) => item.name === product.productName
      );
      return !isEmpty(cartItem);
    },
    [cartItems]
  );

  return (
    <Container
      className="vh-100"
      fluid
      style={{ backgroundColor: "#343a40", padding: "10rem 30rem" }}
    >
      <Row className="align-items-center justify-content-center h-100 border border-light p-5">
        <Col md={6}>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src={product.image} />
          </Card>
        </Col>

        <Col md={6} className="text-white">
          <h1 className="mb-5">
            <strong>{product.productName}</strong>
          </h1>
          <p>{product.productDescription}</p>
          <h3 className="text-danger">${product.price}</h3>
          <Button
            variant="outline-light rounded-0"
            className="mt-5"
            onClick={(event) => {
              event.stopPropagation();
              if (checkCart(product)) {
                dispatch(removeFromCart(product.productName));
              } else {
                dispatch(
                  addToCart({
                    img: product.image,
                    name: product.productName,
                    qty: 1,
                  })
                );
              }
            }}
          >
            <FontAwesomeIcon icon={faCartPlus} />{" "}
            {checkCart(product) ? " In Cart" : "Add to Cart"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
