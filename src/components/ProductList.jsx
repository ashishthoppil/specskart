import { useCallback } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import {
  faCircle,
  faCartPlus,
  faSearchPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "lodash";

import { addToCart, removeFromCart } from "../slices/cartSlice";

const ProductList = ({ products }) => {
  const cartItems = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <div className="product-list">
      <Row className="mb-5" id="shop">
        <h1 className="d-flex justify-content-center">Products</h1>
      </Row>
      <Row>
        {!isEmpty(products) ? (
          products.map((product, index) => (
            <Col
              key={index}
              md={4}
              onClick={() => navigate(`/products/${product.productName}`)}
            >
              <Card
                style={{ backgroundColor: "#f8f9fa", marginBottom: "1rem" }}
              >
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.productName}</Card.Title>
                  <Card.Text>{product.productDescription}</Card.Text>
                  <Card.Text className="d-flex justify-content-between">
                    <h2 className="text-danger my-auto mx-0">
                      <strong>${product.price}</strong>
                    </h2>

                    {product.inventory > 0 ? (
                      <div className="text-success my-auto mx-0">
                        <FontAwesomeIcon icon={faCircle} />{" "}
                        <span className="ml-2">In Stock</span>
                      </div>
                    ) : (
                      <div className="text-danger my-auto mx-0">
                        <FontAwesomeIcon icon={faCircle} />{" "}
                        <span className="ml-2">Out of Stock</span>
                      </div>
                    )}
                  </Card.Text>
                  <div className="d-flex justify-content-between ">
                    <Card.Text className="my-auto mx-0">
                      Type: {product.category}
                    </Card.Text>
                    <Button
                      variant="outline-dark"
                      className="rounded-10 pt-2"
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
                      {checkCart(product) ? " In Cart" : " Add to Cart"}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div className="text-center">No products listed</div>
        )}
      </Row>
      <div className="d-flex justify-content-center mt-5">
        <Button variant="outline-dark" className="rounded-0 py-3 px-5">
          <FontAwesomeIcon icon={faSearchPlus} /> Load More
        </Button>
      </div>
    </div>
  );
};

export default ProductList;
