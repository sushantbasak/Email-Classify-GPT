const mongoose = require("mongoose");
const appSettings = require("../config");

const dbConnect = async () => {
  const dbUri = appSettings.mongoDb;
  try {
    await mongoose.connect(dbUri);
    console.log("DB connected");
  } catch (error) {
    console.log("Could not connect to db");
    console.log(error);
    process.exit(1);
  }
};

module.exports = {
  dbConnect,
};
