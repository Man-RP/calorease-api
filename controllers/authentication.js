const usersService = require("../services/usersService");

const register = async (req, res, next) => {
  try {
    await usersService.addNewUser({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      minDayCalories: req.body.minDayCalories,
      maxDayCalories: req.body.maxDayCalories,
    });
    res.sendStatus(201);
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(error);
  }
};

module.exports = {
  register,
};
