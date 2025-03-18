import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SolutionUploader from "./components/SolutionUploader";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload-solution" element={<SolutionUploader />} />
      </Routes>
    </Router>
  );
}

export default App;
