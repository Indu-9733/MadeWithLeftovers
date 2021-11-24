import React from "react";
import Meal from "./meal";
import MealListIng from "./mealListIng";

export default function MealDataIng({ mealDataIng }) {

  return (
    <main>
            <section className="meals">
        {mealDataIng.map((meal) => {
          return <MealListIng key={meal.id} mealDataIng={meal} />;
        })}
      </section>
    </main>
  );
}
