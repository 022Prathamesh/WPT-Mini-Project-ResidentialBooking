import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { CartProvider } from "./components/ContextReducer";
import Carousal from "./components/Carousal";
import MyVisits from "./screens/MyVisits";
import ContactUs from "./screens/ContactUs";
import AboutUs from "./screens/AboutUs";
import Profile from "./screens/Profile";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/createuser" element={<SignUp />} />
          <Route exact path="/myvisits" element={<MyVisits />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/caro" element={<Carousal />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
