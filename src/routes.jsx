import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import Home from "./components/home";

function Routing() {
  return (
    <Routes>
      <Route exact="true" path="/" element={<Home />} />
      <Route exact="true" path="/register" element={<RegisterForm />} />
      <Route exact="true" path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default Routing;
