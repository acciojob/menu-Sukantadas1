import React from "react";

const Categories = ({ categories, filterDishes }) => {
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button
          id={`filter-btn-${index}`}
          key={index}
          onClick={() => filterDishes(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
