import React, { Component } from "react";
import NavBar from "./navBar";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <h1>Hello</h1>
      </div>
    );
  }
}

export default Home;
