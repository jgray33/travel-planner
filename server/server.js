const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
require("dotenv").config();

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

// Stripe Setup
const SERVER_CONFIGS = require("./constants/server");
const configureServer = require("./server-config");
const configureRoutes = require("./stripe-routes");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

configureServer(app);
configureRoutes(app);

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  // Fix Heroku react routing
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  db.once("open", () => {
    app.listen(SERVER_CONFIGS.PORT, () => {
      console.log(`API server running on port ${SERVER_CONFIGS.PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer(typeDefs, resolvers);
