const mongoose = require("mongoose");
const { COLLECTIONS } = require("../../constants");

const emailSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "Please add Id"],
  },
  result: {
    type: String,
    required: [true, "Please add Classification"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = {
  schema: mongoose.model(COLLECTIONS.EMAIL, emailSchema),
};
