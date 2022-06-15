const { AuthenticationError } = require("apollo-server-express");
const { User, Trip, Plan, Fact } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // Find all users
    users: async () => {
      return User.find().populate("trips");
    },
    // Find a user
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("trips");
    },
    // Find me
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in");
    },
    // Find all trips
    trips: async () => {
      return Trip.find().populate("plans");
    },
    facts: async () => {
      return Fact.find();
    },
    // Find one trip
    trip: async (parent, { tripId }) => {
      return Trip.findOne({ _id: tripId }).populate("plans").populate("facts");
    },
    // Find one plan
    plan: async (parent, { planId }) => {
      return Plan.findOne({ _id: planId });
    },
    // Find one fact
    fact: async (parent, { factId }) => {
      return Fact.findOne({ _id: factId });
    },
  },

  Mutation: {
    //   Add a new user
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // Login
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No user with this email address");
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Login unsuccessful");
      }

      const token = signToken(user);
      return { token, user };
    },
    // Add a new trip
    addTrip: async (
      parent,
      { userId, tripName, description, location, startDate, endDate },
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
      await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { trips: trip._id } }
      );

      return trip;

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

    // add a new fact
    addFact: async (parent, { tripId, description }, context) => {
      const fact = await Fact.create({
        description,
      });
      await Trip.findOneAndUpdate(
        { _id: tripId },
        { $addToSet: { facts: fact._id } }
      );
      return fact;
    },

    removePlan: async (parent, { tripId, planId }) => {
      return await Trip.findOneAndUpdate(
        { _id: tripId },
        { $pull: { plans: { $eq: planId } } },
        { new: true }
      );
    },
    removeFact: async (parent, { tripId, factId }) => {
      return await Trip.findOneAndUpdate(
        { _id: tripId },
        { $pull: { facts: { $eq: factId } } },
        { new: true }
      );
    },
    removeTrip: async (parent, { tripId }) => {
      return Trip.findOneAndDelete({ _id: tripId });
    },
    // Update an existing Trip
    updateTrip: async (
      parent,
      { tripId, tripName, description, location, startDate, endDate }
    ) => {
      // Find and update the matching trip using the destructured args
      return await Trip.findOneAndUpdate(
        { _id: tripId },
        {
          $set: {
            tripName,
            description,
            location,
            startDate,
            endDate,
          },
        },
        // Return the newly updated object instead of the original
        { new: true }
      );
    },
    // Update and existing fact
    updateFact: async (parent, { factId, description }) => {
      return await Fact.findByIdAndUpdate(
        { _id: factId },
        {
          $set: {
            description,
          },
        },
        { new: true }
      );
    },
    // Update an existing plan
    updatePlan: async (parent, { planId, category, name, location, notes, status }) => {
      // Find and update the matching plan using the destructured args
      return await Plan.findOneAndUpdate(
        { _id: planId },
        {
          $set: {
            category,
            name,
            location,
            notes,
            status,
          },
        },
        // Return the newly updated object instead of the original
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
