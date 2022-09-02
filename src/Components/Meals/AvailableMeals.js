import Card from "../UI/Card";
import "./AvailableMeals.scss";
import "./MealItems/MealItem";
import "../Meals/MealItems/MealItem";
import MealItem from "./MealItems/MealItem";

const DUMMYMEALS = [
  {
    id: "m1",
    mname: "Pancake",
    description: "Pancake with honey and bean",
    price: 50.0,
  },
  {
    id: "m2",
    mname: "Noodle",
    description: "A fine spicy chinese noodles",
    price: 75.0,
  },
  {
    id: "m3",
    mname: "Chicken Roll",
    description: "Crispy spicy chicken roll",
    price: 50.0,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMYMEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      mname={meal.mname}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className="meals">
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
