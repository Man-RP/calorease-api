const { addFoodToMealDB } = require("../db");

const addFoodToMeal = async (user, food, mealId) => {
  try {
    return await addFoodToMealDB(food, mealId);
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  addFoodToMeal,
};
