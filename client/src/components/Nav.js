import React from "react";

export default function Nav() {
  const linkStyle = { border: "1px black", padding: "5px" };

  return (
    <nav className="main-header-menu">
      <div
        style={{
          display: "flex",
          fontFamily: "helvetica",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <div style={linkStyle}>
          <a href="/#">Get Started</a>
        </div>
        <div style={linkStyle}>
          <a href="/#">Home</a>
        </div>
    </div>

    </nav>
  );
}
