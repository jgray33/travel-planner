const { Schema, model } = require("mongoose");
// Package used to validate email address
const validator = require("validator");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please use a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  trips: [
    {
      type: Schema.Types.ObjectId,
      ref: "Trip",
    },
  ],
});

const User = model("User", userSchema);

module.exports = User;
