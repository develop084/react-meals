import "./AvailableMeals.css";
import Card from "../UI/Card";
import MealItem from "../MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Shushi",
    description: "Finest fish and veggies",
    price: 220.00,
  },
  {
    id: "m2",
    name: "Chilly Potato",
    description: "Finest Chilles with aromatic Potato",
    price: 70.00,
  },
  {
    id: "m3",
    name: "Burger",
    description: "Fast food with pattie wrap into the bun.",
    price: 50.00,
  },
  {
    id: "m4",
    name: "Pizza",
    description: "7 Cheese blend Pizza with amazing flavours",
    price: 120.00,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <li>
      <MealItem name={meal.name} 
      description = {meal.description}
      price={meal.price}
      />
    </li>
  ));
  return (
    <section>
      <Card>
        <ul className="list-elem">{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
