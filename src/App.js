// src/App.js

import React from "react";
import FamilyTree from "./components/FamilyTree";
import "./App.css";

const App = () => {
  // Dummy family tree data
  const familyData = {
    name: "John Doe",
    gender: "male",
    children: [
      {
        name: "Jane Doe",
        gender: "female",
        children: [
          {
            name: "Alice Doe",
            gender: "female",
            children: [],
          },
          {
            name: "Bob Doe",
            gender: "male",
            children: [],
          },
        ],
      },
      {
        name: "Mark Doe",
        gender: "male",
        children: [
          {
            name: "Sara Doe",
            gender: "female",
            children: [],
          },
        ],
      },
    ],
  };

  return (
    <div className="App">
      <h1>Family Tree Visualization</h1>
      <FamilyTree data={familyData} />
    </div>
  );
};

export default App;
