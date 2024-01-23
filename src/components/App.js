import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import menuItems from "./data";

const allCategories = [
  "All",
  ...new Set(menuItems.map((item) => item.category)),
];

const App = () => {
  const [dishes, setDishes] = useState(menuItems);
  const [currentCategory, setCurrentCategory] = useState("All");

  const filterDishes = (category) => {
    if (category === "All") {
      setDishes(menuItems);
    } else {
      const filteredDishes = menuItems.filter(
        (item) => item.category === category
      );
      setDishes(filteredDishes);
    }
    setCurrentCategory(category);
  };

  return (
    <main id="main">
      <h1>Menu App</h1>
      <Categories categories={allCategories} filterDishes={filterDishes} />
      <Menu dishes={dishes} />
    </main>
  );
};

export default App;
