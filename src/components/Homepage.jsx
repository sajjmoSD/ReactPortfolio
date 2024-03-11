import Button from "react-bootstrap/Button";
import Header from "./Header";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Homepage() {
  return (
    <section style={{ textAlign: "center" }}>
      <div
        style={{
          margin: "auto",
          width: "640px",
          padding: "80px",
          maxWidth: "90%",
        }}
      >
        <Header text="Welcome to Sajjadul Mohammed's Portfolio" />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/main">
            <Button variant="outline-light">Enter!</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Homepage;
