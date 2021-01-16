// const { addFoodToMealDB } = require("../db");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const usersDB = require("../DAL/usersDB");

const addNewUser = async (user) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 8); //hashing
    user[password] = hashedPassword;
    await usersDB.addNewUserDB(user);
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  addNewUser,
};
