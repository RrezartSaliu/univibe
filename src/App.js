import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Categories from "./Pages/Categories";
import CategoryEvents from "./Pages/CategoryEvents";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Categories />} />
            <Route path="/categories/:categoryId" element={<CategoryEvents />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
