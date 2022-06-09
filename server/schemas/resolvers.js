const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Trip, Plan } = require("../models");

const resolvers = {
  Query: {
    // Find all users
    users: async () => {
      return User.find().populate("trips")
    },
    // Find a user
    user: async (parent, {username}) => {
      return User.findOne({username}).populate("trips")
    },
    // Find me
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({_id: context.user._id})
      }
      throw new AuthenticationError("You need to be logged in")
    },
    // Find all trips
    trips: async () => {
      return Trip.find().populate("plans")
    },
    // Find one trip
    trip: async (parent, { tripId }) => {
      return Trip.findOne({ _id: tripId }).populate("plans");
    },
  },

  Mutation: {
    //   Add a new user
    addUser: async (parent, { username, email, password }) => {
          const user = await User.create({ username, email, password });
          const token = signToken(user)
          return { token, user}
    },
    // Login
    login: async (parent, { email, password}) => {
      const user = await User.findOne({email})
      if (!user) {
        throw new AuthenticationError("No user with this email address")
      }
      const correctPw = await user.isCorrectPassword(password)

      if(!correctPw) {
        throw new AuthenticationError("Login unsuccessful")
      }
      const token = signToken(user)

      return {token, user}
    },
        // Add a new trip
    addTrip: async (
      parent,
      { tripName, description, location, startDate, endDate },
      context
    ) => {
      // if (context.user) {
      const trip = await Trip.create({
        tripName,
        description,
        location,
        startDate,
        endDate,
      });

      // await User.findOneAndUpdate(
      //   { _id: context.user._id },
      //   { $addToSet: { Trips: trip._id } }
      // );

      return trip;
      // }
      // throw new AuthenticationError('You need to be logged in!');
    },
    // Add a new plan
    addPlan: async (
      parent,
      { tripId, category, name, location, notes, status },
      context
    ) => {
      // if (context.user) {
      const plan = await Plan.create({
        category,
        name,
        location,
        notes,
        status,
      });

      await Trip.findOneAndUpdate(
        { _id: tripId },
        { $addToSet: { plans: plan._id } }
      );

      return plan;
      // }
      // throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;

//
