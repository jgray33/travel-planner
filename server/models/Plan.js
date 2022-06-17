const { Schema, model } = require("mongoose");

const planSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  status: {
    type: Boolean,
  },
});

const Plan = model("Plan", planSchema);

module.exports = Plan;
