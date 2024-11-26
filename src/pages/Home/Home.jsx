import React, { useState } from "react";

import Header from "../../components/Header/Header";
import MenuList from "../../components/Category/Category";
import Category from "../../components/Category/Category";
import FoodList from "../../components/Category/Category";

export default function HomePage() {
  return (
    <div>
      <Header />
      <MenuList />
      {/* <FoodList /> */}
    </div>
  );
}
