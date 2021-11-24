import React from "react";
import Meal from "./meal";

export default function MealList({ mealData }) {
  const results = mealData.results;

  return (
    <main>
      <section className="nutrients">
        <h1>Macros</h1>
        <ul>
          <li>
            Showing: {mealData.number.toFixed(0)} of{" "}
            {mealData.totalResults.toFixed(0)}
          </li>
        </ul>
      </section>

      <section className="meals">
        {results.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}
