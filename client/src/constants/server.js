const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "https://travel-planner-procedural.herokuapp.com/"
    : "http://localhost:3001";

export default PAYMENT_SERVER_URL;
