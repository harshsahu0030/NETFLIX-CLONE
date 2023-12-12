import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lander from "./pages/Lander";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { useSelector } from "react-redux";

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Lander />} />
        <Route
          path="/signin"
          element={isAuthenticated ? <Home /> : <SignIn />}
        />
        <Route
          path="/signup"
          element={isAuthenticated ? <Home /> : <SignUp />}
        />
      </Routes>
    </Router>
  );
};

export default App;
