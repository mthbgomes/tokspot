import React, { createContext, useContext, useState } from "react";

const LinkContext = createContext();

const LinkProvider = ({ children }) => {
  const [homeLinks, setHomeLinks] = useState([
    { to: "/", label: "Home" },
    { to: "#quems-somos", label: "Quem somos" },
    { to: "#funcionalidades", label: "Funcionalidades" },
    { to: "#planos", label: "Planos" },
  ]);

  const [dashboardLinks, setDashboardLinks] = useState([
    { to: "/dashboard", label: "Dashboard" },
    { to: "/oportunidades", label: "Oportunidades" },
    { to: "/contatos", label: "Contatos" },
    { to: "/tarefas", label: "Tarefas" },
  ]);

  return (
    <LinkContext.Provider
      value={{ homeLinks, setHomeLinks, dashboardLinks, setDashboardLinks }}
    >
      {children}
    </LinkContext.Provider>
  );
};
const useLinkContext = () => {
  return useContext(LinkContext);
};

export { LinkProvider, useLinkContext };
