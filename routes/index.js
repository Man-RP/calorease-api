var express = require('express');

var router = express.Router();

const { food } = require('../controllers')
const { meal } = require('../controllers')


//routes:

//meal
router.post('/meal', meal.addMeal);


//food
router.post('/food', food.addFoodToMeal);



module.exports = router;