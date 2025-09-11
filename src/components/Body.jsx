import React from "react";
import Header from "./Header";
import Restaurants from "./Restaurants";
import { Routes, Route } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <Header />

      {/* Page content changes depending on route */}
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/cart" element={<h1>Cart Page</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
      </Routes>
    </div>
  );
};

export default Body;
