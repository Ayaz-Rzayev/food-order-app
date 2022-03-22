import React, { useEffect, useState } from "react";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchedMeals = async () => {
      const response = await fetch(
        "https://react-http-bb129-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await response.json();
      const mealsFromDb = [];
      for (const key in data) {
        mealsFromDb.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(mealsFromDb);
      setIsLoading(false);
    };
    fetchedMeals();
  }, []);

  if (isLoading) {
    return (
      <section className={styles.loading}>
        <h3>Loading...</h3>
      </section>
    );
  }

  const mealList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
