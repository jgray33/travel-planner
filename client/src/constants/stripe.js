const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === "production"
    ? "pk_test_51LAZQTDfdJmsnTdjAgUjygsk7MiHR87RcjuPfkR5DnPU2pWLtRo9rtO4CuyqjWG37h60FGnpaVhKqW0bWpOYz3Tf00PrDjzjim"
    : "pk_test_51LAZQTDfdJmsnTdjAgUjygsk7MiHR87RcjuPfkR5DnPU2pWLtRo9rtO4CuyqjWG37h60FGnpaVhKqW0bWpOYz3Tf00PrDjzjim";

export default STRIPE_PUBLISHABLE;
