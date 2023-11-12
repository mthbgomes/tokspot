import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LinkProvider } from "../src/contexts/LinkProvider.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/pages/Login";
import Home from "./components/pages/Home.jsx";

function App() {
  return (
    <div className="App">
      <LinkProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </LinkProvider>
    </div>
  );
}

export default App;
