import React from "react";
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from "react-router-dom";

import LoginPage from "./Components/Login/LoginPage";
import AdminHeader from "./Components/Admin/JSX/AdminHeader";
import HomePage from "./Components/HomeBarLink/HomePage";
import LandingHeader from "./Components/Landing/JSX/LandingHeader";
import Navbar from "./Components/Furnish/JSX/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/landing" exact element={<LandingHeader />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/admin" exact element={<AdminHeader />} />
          <Route path="/furnish" exact element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
