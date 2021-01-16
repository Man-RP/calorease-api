var express = require("express");
var router = express.Router();

const { authentication } = require("../controllers");

//routes:

router.post("/auth/resgister", authentication.register);
// router.post("/auth/login", authentication.login);
// router.post("/auth/logout", authentication.register);

// router.post("/users", users.createUser);
// router.put("/users/:id", users.updateUser);
// router.delete("/users/:id", users.deleteUser);

// router.post("/meals", meals.addMeal); //add new meal endpoint - add meal modal
// router.get("/meals", meals.getMeals); //get meals collection endpoint - add meal modal
// router.get("/meals/today", meals.getTodaysMeals); //get meals collection endpoint - today screen

// router.post("/foods", foods.addFoodToMeal); //new record of food consumed - add food modal - add food modal
// router.get("/foods/today", foods.getTodaysFood); //get today's food consumed collection - today screen
// router.get("/foods", foods.getFood); //get food consumed collection - query params - day screen
// router.delete("/foods/:id", foods.deleteFood); //delete food consumed  - day screen

// router.post("/food-types", foodTypes.addFoodtype); //add food type related to user - add food modal
// router.get("/food-types", foodTypes.getFoodtypes); //get food types related to user - query params - add food modal

// router.get("/day-details/today", dayDetails.getTodayDetails); //get today's number-of-meals&calories endpoint - home
// router.get("/day-details", dayDetails.getDayDetails); //get collection of number-of-meals&calories endpoint - query params - calendar

module.exports = router;
