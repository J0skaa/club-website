import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import PalyazatokPage from "./pages/PalyazatokPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/main" element={<>
          <HomePage />
        </>} />
        <Route path="/kapcsolatok" element={<>
          <Navbar />
          <ContactPage />
        </>} />
        <Route path="/palyazatok" element={<>
          <PalyazatokPage />
        </>} />
      </Routes>
    </Router>
  );
};

export default App;
