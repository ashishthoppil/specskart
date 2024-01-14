import React from "react";
import { useForm } from "react-hook-form";
import { Button, Modal } from "react-bootstrap";
import { get, isEmpty } from "lodash";
import { useDispatch } from "react-redux";

import { USER_DATA } from "../shared/data/user-data";
import { setOrGetItem } from "../shared/helpers/helper";
import { setUser } from "../slices/userSlice";

const LoginModal = ({ show, onHide }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const userDetails = USER_DATA.filter(
      (user) =>
        get(user, "username") === get(data, "username") &&
        get(user, "password") === get(data, "password")
    );
    if (!isEmpty(userDetails)) {
      // Set data in local storage
      setOrGetItem("user", get(userDetails[0], "username"));
      setOrGetItem("userType", get(userDetails[0], "userType"));
      dispatch(
        setUser({
          type: "SAVE_USER",
          payload: {
            isAuthenticated: true,
            username: get(userDetails[0], "username"),
            userType: get(userDetails[0], "userType"),
          },
        })
      );
      onHide();
    } else {
      setError("password", {
        type: "error",
        message: "Invalid username or password!",
      });
    }
  };

  return (
    <Modal show={show} onBackdropClick={onHide} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>LOGIN</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="username"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <p className="text-danger">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              id="password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>
          <div className="d-flex flex-row-reverse mt-3">
            <Button
              variant="outline-dark"
              className="rounded-0 py-2 px-4"
              type="submit"
            >
              SUBMIT
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
