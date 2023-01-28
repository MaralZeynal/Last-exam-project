import React, { useState } from "react";
import { Route, Routes } from "react-router";
import AddPage from "../pages/add-page";
import DetailPage from "../pages/detail-page";
import HomePage from "../pages/home-page";
import WishlistPage from "../pages/wishlist-page";

const Routing = ({ wishlists, setWishlists }) => {
  // const [wishlists, setWishlists] = useState([]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage wishlists={wishlists} setWishlists={setWishlists} />
          }
        />
        <Route path="/home-page/:_id" element={<DetailPage />} />
        <Route path="/add-page" element={<AddPage />} />
        <Route
          path="/wishlist-page"
          element={
            <WishlistPage wishlists={wishlists} setWishlists={setWishlists} />
          }
        />
      </Routes>
    </div>
  );
};

export default Routing;
