// src/App.js

import React from "react";
import FamilyTree from "./components/FamilyTree";
import CurvedLine from "./components/CurvedLine";
import BarChart from "./components/BarChart";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Visualization Component</h1>
      <BarChart />
    </div>
  );
};

export default App;
