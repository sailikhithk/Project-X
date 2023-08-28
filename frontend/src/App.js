import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
};

export default App;
