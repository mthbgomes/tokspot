import React, { createContext, useContext, useState } from "react";

const LinkContext = createContext();

const LinkContextProvider = ({ children }) => {
  const [homeLinks, setHomeLinks] = useState([
    { to: "/", label: "Home" },
    { to: "#quems-somos", label: "Quem somos" },
    { to: "#funcionalidades", label: "Funcionalidades" },
    { to: "#planos", label: "Planos" },
  ]);

  const [loggedInLinks, setloggedInLinks] = useState([
    { to: "/dashboard", label: "Dashboard" },
    { to: "/oportunidades", label: "Oportunidades" },
    { to: "/contatos", label: "Contatos" },
    { to: "/tarefas", label: "Tarefas" },
    { to: "/admin", label: "Configurações" },
  ]);

  return (
    <LinkContext.Provider
      value={{ homeLinks, setHomeLinks, loggedInLinks, setloggedInLinks }}
    >
      {children}
    </LinkContext.Provider>
  );
};
const useLinkContext = () => {
  return useContext(LinkContext);
};

export { LinkContextProvider, useLinkContext };
