import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LinkContextProvider } from "../src/contexts/LinkContext.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/pages/Login";
import Home from "./components/pages/Home.jsx";
import Oportunidades from "./components/pages/Oportunidades.jsx";
import Tasks from "./components/pages/Tasks.jsx";
import { DealsContextProvider } from "./contexts/DealsContext.jsx";
import { TasksContextProvider } from "./contexts/TasksContext.jsx";

function App() {
  return (
    <div className="App">
      <LinkContextProvider>
        <DealsContextProvider>
          <TasksContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/oportunidades" element={<Oportunidades />} />
                <Route path="/tarefas" element={<Tasks />} />
              </Routes>
            </BrowserRouter>
          </TasksContextProvider>
        </DealsContextProvider>
      </LinkContextProvider>
    </div>
  );
}

export default App;
