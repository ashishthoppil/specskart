import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { addOrder } from "../slices/orderSlice";

const ShippingPage = () => {
  const cartItems = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addOrder({ ...data, items: cartItems }));
    toast("Order placed!");
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  return (
    <div style={{ backgroundColor: "#343a40", padding: "10rem 40rem" }}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup className="mb-3 text-center">
          <h1>Enter Shipping Details</h1>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Name</FormLabel>
          <FormControl
            className="rounded-0"
            id="name"
            name="name"
            isInvalid={errors.name}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <Form.Control.Feedback type="invalid">
              This field is required.
            </Form.Control.Feedback>
          )}
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Address</FormLabel>
          <FormControl
            className="rounded-0"
            as="textarea"
            id="address"
            name="address"
            isInvalid={errors.address}
            {...register("address", { required: true })}
          />
          {errors.address && (
            <Form.Control.Feedback type="invalid">
              This field is required.
            </Form.Control.Feedback>
          )}
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Phone</FormLabel>
          <FormControl
            className="rounded-0"
            id="phone"
            name="phone"
            type="number"
            step="0.01"
            isInvalid={errors.phone}
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <Form.Control.Feedback type="invalid">
              This field is required.
            </Form.Control.Feedback>
          )}
        </FormGroup>

        <FormGroup className="mb-3 text-center">
          <Button
            variant="outline-light"
            className="rounded-0 py-3 px-5 mt-5"
            type="submit"
          >
            Place order <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default ShippingPage;
