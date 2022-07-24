import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"

import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exerciselist.component";
import CreateExercise from "./components/createexercise.component";
import CreateUser from "./components/createuser.component";


function App() {
  return (
    <div className="App">
      <div className='container'>
        <Router>
          <Navbar />
          <br />
          <Routes>
            <Route path="/" element={<ExerciseList />} />
            <Route path="/create" element={<CreateExercise />} />
            <Route path="/user" element={<CreateUser />} />
          </Routes>
        </Router>

      </div>
    </div>
  );
}

export default App;
