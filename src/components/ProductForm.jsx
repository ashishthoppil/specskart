import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  FormSelect,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setProduct } from "../slices/productSlice";

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [imageFile, setImageFile] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const payload = {
      category: data.category,
      image: imageFile,
      inventory: data.inventory,
      price: data.price,
      productDescription: data.productDescription,
      productName: data.productName,
    };

    dispatch(setProduct(payload));
    reset();
    navigate("/home#shop");
  };

  return (
    <div style={{ backgroundColor: "#343a40", padding: "10rem 40rem" }}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup className="mb-3 text-center">
          <h1>Create Product</h1>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Product Name</FormLabel>
          <FormControl
            className="rounded-0"
            id="productName"
            name="productName"
            isInvalid={errors.productName}
            {...register("productName", { required: true })}
          />
          {errors.productName && (
            <Form.Control.Feedback type="invalid">
              This field is required.
            </Form.Control.Feedback>
          )}
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Product Description</FormLabel>
          <FormControl
            className="rounded-0"
            as="textarea"
            id="productDescription"
            name="productDescription"
            isInvalid={errors.productDescription}
            {...register("productDescription", { required: true })}
          />
          {errors.productDescription && (
            <Form.Control.Feedback type="invalid">
              This field is required.
            </Form.Control.Feedback>
          )}
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Price</FormLabel>
          <FormControl
            className="rounded-0"
            id="price"
            name="price"
            type="number"
            step="0.01"
            isInvalid={errors.price}
            {...register("price", { required: true })}
          />
          {errors.price && (
            <Form.Control.Feedback type="invalid">
              This field is required.
            </Form.Control.Feedback>
          )}
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Inventory</FormLabel>
          <FormControl
            className="rounded-0"
            id="inventory"
            name="inventory"
            type="number"
            isInvalid={errors.inventory}
            {...register("inventory", { required: true })}
          />
          {errors.inventory && (
            <Form.Control.Feedback type="invalid">
              This field is required.
            </Form.Control.Feedback>
          )}
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Image</FormLabel>
          <input
            id="image"
            name="image"
            type="file"
            isInvalid={errors.image}
            {...register("image", { required: true })}
            className="rrounded-0 form-control"
            onChange={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onload = (e) => {
                const base64String = e.target.result;
                setImageFile(base64String);
              };
              reader.readAsDataURL(file);
            }}
          />
          {errors.image && (
            <Form.Control.Feedback type="invalid">
              This field is required.
            </Form.Control.Feedback>
          )}
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Category</FormLabel>
          <FormSelect
            className="rounded-0"
            id="category"
            name="category"
            isInvalid={errors.category}
            {...register("category", { required: true })}
          >
            <option value="">Select a category</option>
            <option value="Aviator">Aviator</option>
            <option value="Wayfarer">Wayfarer</option>
            <option value="Tortoise">Tortoise</option>
          </FormSelect>
          {errors.category && (
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
            Submit
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default ProductForm;
