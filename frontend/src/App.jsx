import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import SignUp from "./pages/signUp.jsx";
import SignIn from "./pages/SignIn.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default App;
