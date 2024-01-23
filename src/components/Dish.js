// Dish.js
import React from "react";

const Dish = ({ title, category, price, img, desc }) => {
  return (
    <div className="dish">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{category}</p>
      <p>${price}</p>
      <p>{desc}</p>
    </div>
  );
};

export default Dish;
