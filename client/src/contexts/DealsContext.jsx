import React, { createContext, useContext, useState } from "react";

const DealsContext = createContext();

const DealsContextProvider = ({ children }) => {
  const [dealsData, setDealsData] = useState([
    {
      title: "Lead",
      columnId: "1",
      total: "R$ 262.000,00",
      cards: [
        {
          dealTitle: "Oportunidade 1",
          contact: "Matheus Gomes",
          owner: "Próprio Usuário",
          dealValue: "R$ 152.000",
          cardId: "1",
        },
        {
          dealTitle: "Oportunidade 2",
          contact: "Roberto Silva",
          dealValue: "R$ 22.000",
          description:
            "Senhor Roberto Silva veio à procura de uma moto zero KM, apresentei a XPTO pra ele e se interessou.",
          cardId: "2",
        },
        {
          dealTitle: "Oportunidade 3",
          contact: "AHUAUHA",
          dealValue: "R$ 22.000",
          cardId: "3",
        },
        {
          dealTitle: "Oportunidade 4",
          contact: "asiofhsaif",
          dealValue: "R$ 22.000",
          cardId: "4",
        },
        {
          dealTitle: "Oportunidade 5",
          contact: "12983129031",
          dealValue: "R$ 22.000",
          cardId: "5",
        },
        {
          dealTitle: "Oportunidade 6",
          contact: "OOOOO",
          dealValue: "R$ 22.000",
          cardId: "6",
        },
      ],
    },

    {
      title: "Reunião Agendada",
      columnId: "2",
      total: "",
      cards: [
        {
          dealTitle: "Oportunidade 3",
          contact: "João Santos",
          dealValue: "R$ 42.000",
          cardId: "7",
        },
        {
          dealTitle: "Oportunidade 3",
          contact: "João Santos",
          dealValue: "R$ 42.000",
          cardId: "8",
        },
      ],
    },
    {
      title: "Proposta Enviada",
      columnId: "3",
      total: "",
      cards: [],
    },
    {
      title: "Follow Up",
      columnId: "4",
      total: "",
      cards: [],
    },
    {
      title: "Em Negociação",
      columnId: "5",
      total: "",
      cards: [],
    },
    {
      title: "Fechamento",
      columnId: "6",
      total: "",
      cards: [],
    },
  ]);
  return (
    <DealsContext.Provider value={{ dealsData, setDealsData }}>
      {children}
    </DealsContext.Provider>
  );
};

const useDealsContext = () => {
  return useContext(DealsContext);
};

export { DealsContextProvider, useDealsContext };
