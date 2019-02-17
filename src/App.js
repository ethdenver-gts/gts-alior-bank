import React, { Component } from "react";
import "./App.css";

import AssignComponent from "./components/AssignComponent";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <AssignComponent />
      </div>
    );
  }
}

export default App;
