import React, { useState } from "react";
import bg from "../images/mainbg.jpg";
import "../register.css";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    address: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value) {
          error = "Please enter your name.";
        }
        break;
      case "email":
        if (!value) {
          error = "Please enter your email address.";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Please enter a valid email address.";
        }
        break;
      case "password":
        if (!value) {
          error = "Please enter your password.";
        } else if (value.length < 6) {
          error = "Password must be at least 6 characters long.";
        }
        break;
      case "address":
        if (!value) {
          error = "Please enter your address.";
        }
        break;
      case "location":
        if (!value) {
          error = "Please enter your location.";
        }
        break;
      default:
        break;
    }
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const validateForm = () => {
    const errors = {};
    Object.keys(credentials).forEach((key) => {
      validateField(key, credentials[key]);
    });
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const response = await fetch("http://localhost:5001/api/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const json = await response.json();
      console.log(json);
      if (!json.success) {
        alert("Please enter valid information.");
      } else {
        alert("You are registered successfully!");
        navigate("/login");
      }
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
    validateField(name, value);
  };

  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: "url(" + bg + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover",
      }}
    >
      <MDBCard className="" style={{ width: "auto" }}>
        <MDBCardBody className="p-5">
          <h2
            className="text-uppercase text-center mb-4 fw-bolder"
            style={{ borderBottom: "3px solid #375a7f" }}
          >
            Register
          </h2>
          <form onSubmit={handleSubmit}>
            <MDBInput
              wrapperClass="mb-2"
              size="md"
              type="text"
              placeholder="Your Name"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
            {formErrors.name && (
              <div className="text-danger">{formErrors.name}</div>
            )}
            <MDBInput
              wrapperClass="mb-2"
              size="md"
              type="email"
              placeholder="Email Address"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
            {formErrors.email && (
              <div className="text-danger">{formErrors.email}</div>
            )}
            <MDBInput
              wrapperClass="mb-2"
              size="md"
              type="password"
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
            {formErrors.password && (
              <div className="text-danger">{formErrors.password}</div>
            )}
            <MDBInput
              wrapperClass="mb-2"
              size="md"
              type="text"
              placeholder="Address"
              name="address"
              value={credentials.address}
              onChange={onChange}
            />
            {formErrors.address && (
              <div className="text-danger">{formErrors.address}</div>
            )}
            <MDBInput
              wrapperClass="mb-2"
              size="md"
              type="text"
              placeholder="Location"
              name="location"
              value={credentials.location}
              onChange={onChange}
            />
            {formErrors.location && (
              <div className="text-danger">{formErrors.location}</div>
            )}
            <div className="d-flex flex-row justify-content-center mb-2">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I agree all statements in Terms of service"
              />
            </div>
            <div className="text-center mb-2">
              <button className="btn btn-primary w-100" type="submit">
                Register
              </button>
            </div>
            <div className="text-center">
              Have already an account? <Link to="/login">Login here</Link>
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignUp;
