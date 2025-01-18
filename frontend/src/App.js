import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ApplicationsPage from "./pages/ApplicationsPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/home"
          element={
            <>
              <HomePage />
            </>
          }
        />
        <Route
          path="/kapcsolatok"
          element={
            <>
              <Navbar />
              <ContactPage />
            </>
          }
        />
        <Route
          path="/palyazatok"
          element={
            <>
              <ApplicationsPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
