// const { AuthenticationError } = require('apollo-server-express');
const { User, Trip } = require("../models");
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
      if (context.user) {
        const trip = await Trip.create({
          tripName,
          description,
          location,
          startDate,
          endDate,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { Trips: trip._id } }
        );

        return trip;
      }
      // throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
