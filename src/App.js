import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalState } from "./GlobalState";
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Teacher from "./pages/Teacher/Teacher";
import Home from "./pages/Home/Home"

function App() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;
  console.log("state >>>", state);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={isLogged !== true && <Register />} />
          <Route path="/" element={isAdmin ? <Teacher /> : <Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
