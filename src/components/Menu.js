// Menu.js
import React from "react";
import Dish from "./Dish";

const Menu = ({ dishes }) => {
  return (
    <div className="menu">
      {dishes.map((dish) => (
        <Dish key={dish.id} {...dish} />
      ))}
    </div>
  );
};

export default Menu;
