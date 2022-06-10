import React from "react";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import tripDashboard from "./components/tripDashboard";

function App() {
  return (
    <div className="App">
      <Nav />
      <LandingPage />
      <tripDashboard />
    </div>
  );
}

export default App;
