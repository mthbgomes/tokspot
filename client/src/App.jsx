import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LinkContextProvider } from "../src/contexts/LinkContext.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/pages/Login";
import Home from "./components/pages/Home.jsx";
import Dashboard from "./components/pages/Dashboard.jsx";
import { KanbanContextProvider } from "./contexts/KanbanContext.jsx";

function App() {
  return (
    <div className="App">
      <LinkContextProvider>
        <KanbanContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </KanbanContextProvider>
      </LinkContextProvider>
    </div>
  );
}

export default App;
