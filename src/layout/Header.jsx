import React, { useState } from "react";
// import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Form,
  Badge,
} from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMoon,
  faUser,
  faLongArrowLeft,
  faPlus,
  faBarChart,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import LoginModal from "../components/LoginModal";
import { ADMIN, USER } from "../shared/data/user-data";
import { setOrGetItem } from "../shared/helpers/helper";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "lodash";

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.products);

  const handleLoginModalVisibility = (visibility) => {
    setShowLoginModal(!visibility);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  return (
    <>
      <Navbar className="py-4 bg-transparent" bg="light" expand="lg">
        <Container>
          {/* Logo */}
          {/* text-light */}
          <Navbar.Brand
            onClick={() => navigate("/home")}
            className="d-flex gap-2 text-white"
          >
            SpecsKart
          </Navbar.Brand>
          <div className="d-flex gap-3">
            {/* Navbar Toggle for mobile */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            {/* Navbar items */}
            <div className="d-flex gap-3">
              <Nav.Link onClick={() => navigate("/cart")}>
                <Button variant="transparent">
                  {!isEmpty(cartItems) && (
                    <Badge bg="danger">{cartItems.length}</Badge>
                  )}
                  <FontAwesomeIcon icon={faCartShopping} />
                </Button>
              </Nav.Link>
              {/* Theme switcher button - Replace with your logic */}
              <Nav.Link href="#theme-switcher">
                <Button variant="transparent">
                  <FontAwesomeIcon icon={faMoon} />
                </Button>
              </Nav.Link>
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {setOrGetItem("userType") === ADMIN && (
                  <>
                    <Nav.Link onClick={() => navigate("/product-create")}>
                      <FontAwesomeIcon icon={faPlus} /> Add Products
                    </Nav.Link>
                    <Nav.Link href="/reports">
                      <FontAwesomeIcon icon={faBarChart} /> Reports
                    </Nav.Link>
                    <Nav.Link
                      href="#"
                      onClick={() => {
                        localStorage.clear();
                        navigate("/home");
                      }}
                    >
                      <FontAwesomeIcon icon={faSignOut} />
                      <span> Logout</span>
                    </Nav.Link>
                  </>
                )}
                {setOrGetItem("userType") === USER && (
                  <>
                    <Nav.Link href="#" onClick={() => localStorage.clear()}>
                      <FontAwesomeIcon icon={faUser} />
                    </Nav.Link>
                  </>
                )}
                {setOrGetItem("userType") !== USER &&
                  setOrGetItem("userType") !== ADMIN && (
                    <>
                      <Nav.Link href="/home">Home</Nav.Link>
                      <Nav.Link href="#shop">Shop</Nav.Link>
                      <Button
                        variant=""
                        className=""
                        onClick={() =>
                          handleLoginModalVisibility(showLoginModal)
                        }
                      >
                        Login
                      </Button>
                    </>
                  )}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <LoginModal show={showLoginModal} onHide={handleCloseModal} />
    </>
  );
};

export default Header;
