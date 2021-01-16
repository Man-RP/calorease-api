const DB = require("./DB");

const addNewUserDB = async (
  username,
  email,
  name,
  password,
  maxDayCalories,
  minDayCalories
) => {
  try {
    const query = `INSERT INTO public.users (
            full_name, username, email, password, min_day_cal, max_day_cal, is_deleted)
            VALUES
            (${name}, ${username}, ${email}, ${password}, ${minDayCalories}, ${maxDayCalories}, FALSE)
            `;
    let dataFromDB = await DB.query(query);
    return { data: dataFromDB.data.rows, status: dataFromDB.status };
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  addNewUserDB,
};
