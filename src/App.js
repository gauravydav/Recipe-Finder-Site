import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Recipe from "./components/RecipePage/Recipe";
import './App.css'
import HomePage from "./components/HomePage/HomePage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/dashboard" element={<Recipe/>} />
      </Routes>
    </Router>
  );
}

export default App;
