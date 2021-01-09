const { mealService } = require("../services");

const { createMeal } = mealService;

const addMeal = async (req, res, next) => {
  const { user, meal } = req.body;
  try {
    await createMeal(user, meal);
    res.sendStatus(201);
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(error);
  }
};

module.exports = {
  addMeal,
};
