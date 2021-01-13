const { foodService } = require("../services");

const { addFoodToMeal } = mealService;

const addFoodToMeal = async (req, res, next) => {
  const { user, food, meal } = req.body;
  try {
    await addFoodToMeal(user, food, meal);
    // other service call (or same service, different function can go here)
    // i.e. - await generateBlogpostPreview()
    res.sendStatus(201);
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(error);
  }
};

module.exports = {
  addFoodToMeal,
};
