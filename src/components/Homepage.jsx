import Button from "react-bootstrap/Button";
import Header from "./Header";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Homepage() {
  return (
    <section>
      <Header text="Welcome to Sajjadul Mohammed's Portfolio" />
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Link to="/main">
          <Button variant="outline-light">Enter!</Button>
        </Link>
      </div>
    </section>
  );
}
export default Homepage;
