const { Schema, model } = require("mongoose");
// Package used to validate email address
const validator = require("validator");
const bcrypt = require("bcrypt")

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

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});


userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password)
}

const User = model("User", userSchema);

module.exports = User;
