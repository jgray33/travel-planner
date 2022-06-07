// const { AuthenticationError } = require('apollo-server-express');
const { User, Trip, Plan } = require("../models");
// const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // Find all users
    users: async () => {
      return User.find();
    },
    // Find all trips
    trips: async () => {
      return Trip.find();
    },
    // Find one trip
    trip: async (parent, { tripId }) => {
      return Trip.findOne({ _id: tripId });
    },
  },

  Mutation: {
    //   Add a new user
    addUser: async (parent, { username, email, password }) => {
      return User.create({ username, email, password });
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
    removePlan: async (parent, { tripId, planId }) => {
      return Trip.findOneAndUpdate(
        { _id: tripId},
        {$pull: {plans: {_id: planId}}},
        { new: true}
      )
    },

   removeTrip: async (parent, { tripId }) => {
      return Trip.findOneAndDelete({_id:tripId})
    },
  },
};

module.exports = resolvers;

//
