import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Modal";
import Cart from "../screens/Visit";
import { useCart } from "../components/ContextReducer";

const Navbar = () => {
  const navigate = useNavigate();
  const [cartView, setCartView] = useState(false);
  let data = useCart();
  console.log("Cart data",data);
  const handlelogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic fw-bolder" to="/">
            HouseHunt
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link
                  className="nav-link active fw-bolder"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active fw-bolder"
                    aria-current="page"
                    to="/myvisits"
                  >
                    My Visits
                  </Link>
                </li>
              ) : (
                ""
              )}
              <li className="nav-item">
              <Link
                    className="nav-link active fw-bolder"
                    aria-current="page"
                    to="/contact-us"
                  >
                    Contact Us
                  </Link>
              </li>
              <li className="nav-item">
              <Link
                    className="nav-link active fw-bolder"
                    aria-current="page"
                    to="/about-us"
                  >
                    About Us
                  </Link>
              </li>
              <li className="nav-item">
              <Link
                    className="nav-link active fw-bolder"
                    aria-current="page"
                    to="/profile"
                  >
                    Profile
                  </Link>
              </li>
            </ul>

            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link className="btn btn-light text-primary mx-1" to="/login">
                  Login
                </Link>

                <Link
                  className="btn btn-light text-primary mx-1"
                  to="/createuser"
                >
                  SignUp
                </Link>
              </div>
            ) : (
              <div>
                <div
                  className="btn btn-light text-primary mx-2"
                  onClick={() => setCartView(true)}
                >
                  Selected Visits{" "}
                  <Badge pill bg="danger">
                    {data.length}
                  </Badge>
                </div>
                {cartView ? (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart />
                  </Modal>
                ) : null}
                <div
                  className="btn btn-light text-primary mx-2"
                  onClick={handlelogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
