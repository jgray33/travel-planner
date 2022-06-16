const { Schema, model } = require("mongoose");
// Import dayjs for date-time formatting
const dayjs = require("dayjs");

const tripSchema = new Schema({
  tripName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  startDate: {
    type: Date,
    default: Date.now,
    get: (createdAt) => dayjs(createdAt).format("YYYY-MM-DD"),
  },
  endDate: {
    type: Date,
    default: Date.now,
    get: (createdAt) => dayjs(createdAt).format("YYYY-MM-DD"),
  },
  plans: [
    {
      type: Schema.Types.ObjectId,
      ref: "Plan",
    },
  ],
  facts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Fact",
    },
  ],
});

const Trip = model("Trip", tripSchema);

module.exports = Trip;
