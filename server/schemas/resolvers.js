const { User } = require("../models");

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
      { tripName, description, location, startDate, endDate }
    ) => {
      return Trip.create({ tripName, description, location, startDate, endDate });
    },
  },
};

module.exports = resolvers;
