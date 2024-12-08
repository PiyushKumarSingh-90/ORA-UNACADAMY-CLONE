import React from "react";
import "./App.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {app} from "./firebase";
import {getAuth} from "firebase/auth";

import SplashScreen from "./components/SplashScreen";
import Login from "./components/login";
import Goals from "./components/Goals";


const auth= getAuth(app); // its a instense of firebase app


function App() 
{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Goals" element={<Goals />} />
      </Routes>
    </Router>
  );
}

export default App;
