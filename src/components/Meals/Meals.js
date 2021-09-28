import MealsSummery from "./MealsSummery";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react";

function Meals() {
  return (
    <Fragment>
      <MealsSummery />
      <AvailableMeals />
    </Fragment>
  );
}
export default Meals;
