import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/normalize.css";
import "./styles/main.css";
import Login from "./components/pages/Login";
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
