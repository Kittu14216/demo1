// src/App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Layout from "./Layout";
import FoodList from "./components/Items/Items";
import CategoryPage from "./components/CategoryItems/CategoryItems";
import ItemDetail from "./components/Modal/Modal";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/items" element={<FoodList />} />
          <Route path="/category/:category" element={<CategoryPage />} />

          <Route path="/item/:id" element={<ItemDetail />} />
          {/* <Route path="/cate/:category" element={<CategoryPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
