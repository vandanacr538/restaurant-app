import React from "react";
import MealItem from "./MealItem/MealItem";
import "./MealsList.css";

const dummyMeals = [
  {
    id: "1",
    name: "Sushi",
    description: "Finsest fish and veggies",
    price: 22.99,
  },
  {
    id: "2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "3",
    name: "Barbecue Burger",
    description: "American , raw, meaty",
    price: 12.99,
  },
];

const MealsList = () => {
  return (
    <ul className="meals-list">
      {dummyMeals.map((meal) => {
        return (
          <MealItem
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        );
      })}
    </ul>
  );
};

export default MealsList;
