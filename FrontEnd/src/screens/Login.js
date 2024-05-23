import React, { useState } from "react";
import login1 from "../images/login1.png";
import mainbg from "../images/mainbg.jpg";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!credentials.email) {
      errors.email = "Please enter your email.";
    }
    if (!credentials.password) {
      errors.password = "Please enter your password.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const response = await fetch("http://localhost:5001/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (!json.success) {
        alert("Enter valid credentials.");
      } else {
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("authToken", json.authToken);
        navigate("/");
      }
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div
        className="row g-0 justify-content-center align-items-center bg-info vh-100"
        style={{
          backgroundImage: "url(" + mainbg + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      >
        <div
          className=" d-flex justify-content-center align-items-center"
          style={{
            width: "50%",
            height: "60%",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            borderRadius: "60px",
          }}
        >
          <form className="col-6" onSubmit={handleSubmit}>
            <div className="text-center">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="black"/>
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="white"/>
</svg>

            </div>
            <h3
              className="login-title text-center py-2 mb-4 text-dark"
              style={{ borderBottom: "3px solid #375a7f" }}
            >
              Login
            </h3>
            <div className="form-floating mb-3">
              <input
                type="email"
                className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
                name="email"
                placeholder="Username"
                value={credentials.email}
                onChange={onChange}
              />
              <label htmlFor="email">Username</label>
              {formErrors.email && (
                <div className="invalid-feedback">{formErrors.email}</div>
              )}
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className={`form-control ${formErrors.password ? "is-invalid" : ""}`}
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={onChange}
              />
              <label htmlFor="password">Password</label>
              {formErrors.password && (
                <div className="invalid-feedback">{formErrors.password}</div>
              )}
            </div>
            <div className="d-flex justify-content-around">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <Link to="/createuser" className="btn btn-primary">
                SignUp
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
