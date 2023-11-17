import React, { createContext, useContext, useState } from "react";

const TasksContext = createContext();

const TasksContextProvider = ({ children }) => {
  const [tasksData, setTasksData] = useState([
    {
      title: "Hoje",
      columnId: "1",
      cards: [
        {
          title: "Oportunidade 1",
          cardId: "1",
          type: "Mensagem",
          dueDate: "17/11/2023",
        },
        {
          title: "Oportunidade 2",
          cardId: "2",
          type: "Ligação",
          dueDate: "17/11/2023",
        },
        {
          title: "Oportunidade 3",
          cardId: "3",
          type: "Reunião",
          dueDate: "17/11/2023",
        },
      ],
    },
    {
      title: "Em 3 dias",
      columnId: "2",
      cards: [
        {
          title: "Oportunidade 4",
          cardId: "4",
          type: "Reunião",
          dueDate: "17/11/2023",
        },
      ],
    },
    { title: "Depois", columnId: "3", cards: [] },
  ]);

  return (
    <TasksContext.Provider value={{ tasksData, setTasksData }}>
      {children}
    </TasksContext.Provider>
  );
};

const useTasksContext = () => {
  return useContext(TasksContext);
};

export { TasksContextProvider, useTasksContext };
