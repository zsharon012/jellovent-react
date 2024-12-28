import React from 'react';
import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./components/Main/Main.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Hi there! Welcome :D</h1>
            </>
          }
        />
        <Route
          path="/main"
          element={<Main />}
        />
      </Routes>
    </Router>
  );
}

export default App;
