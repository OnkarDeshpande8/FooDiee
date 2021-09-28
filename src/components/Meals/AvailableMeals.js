import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Puran Poli",
    description: "Maharashtrian sweet dish",
    price: 25,
  },
  {
    id: "m2",
    name: "Shrikhand",
    description: "Indian dessert!",
    price: 20,
  },
  {
    id: "m3",
    name: "Misal Pav",
    description: "famous Marathi traditional food",
    price: 35,
  },
  {
    id: "m4",
    name: "Sabudana Khichdi",
    description: "it is a breakfast thing and is permissible to be eaten on holy-fasting",
    price: 15,
  },
];

function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id} // this is new!
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <ul>
        <Card>{mealsList}</Card>
      </ul>
    </section>
  );
}
export default AvailableMeals;
