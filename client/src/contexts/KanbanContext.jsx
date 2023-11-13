import React, { createContext, useContext, useState } from "react";

const KanbanContext = createContext();

const KanbanContextProvider = ({ children }) => {
  const [kanbanData, setKanbanData] = useState([
    {
      title: "Lead",
      columnId: "1",
      total: "",
      cards: [
        {
          title: "Oportunidade 1",
          contato: "Matheus Gomes",
          value: "R$ 152.000",
          cardId: "1",
        },
        {
          title: "Oportunidade 2",
          contato: "Roberto Silva",
          value: "R$ 22.000",
          cardId: "2",
        },
        {
          title: "Oportunidade 3",
          contato: "AHUAUHA",
          value: "R$ 22.000",
          cardId: "3",
        },
        {
          title: "Oportunidade 4",
          contato: "asiofhsaif",
          value: "R$ 22.000",
          cardId: "4",
        },
        {
          title: "Oportunidade 5",
          contato: "12983129031",
          value: "R$ 22.000",
          cardId: "5",
        },
        {
          title: "Oportunidade 6",
          contato: "OOOOO",
          value: "R$ 22.000",
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
          title: "Oportunidade 3",
          contato: "João Santos",
          value: "R$ 42.000",
          cardId: "7",
        },
        {
          title: "Oportunidade 3",
          contato: "João Santos",
          value: "R$ 42.000",
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
    <KanbanContext.Provider value={{ kanbanData, setKanbanData }}>
      {children}
    </KanbanContext.Provider>
  );
};

const useKanbanContext = () => {
  return useContext(KanbanContext);
};

export { KanbanContextProvider, useKanbanContext };
