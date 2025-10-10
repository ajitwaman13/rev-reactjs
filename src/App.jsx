import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import { Profile } from "./components/Profile";
import WelcomeN from "./components/WelcomeN";
// import { Home } from "./components/Home";

const Error = () => {
  return (
    <>
      <p className="bg-red-50">error comes </p>
    </>
  );
};

const App = () => {
  return (
    <>
      <Router>
        {/* <Home /> */}
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/game" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singin" element={<Footer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<WelcomeN />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
