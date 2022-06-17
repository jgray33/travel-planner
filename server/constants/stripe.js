require("dotenv").config();

const stripeKey = process.env.STRIPE_SECRET_KEY;

const configureStripe = require("stripe");

const STRIPE_SECRET_KEY =
  process.env.NODE_ENV === "production" ? stripeKey : stripeKey;

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
