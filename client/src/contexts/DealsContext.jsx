import React, { createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";

const DealsContext = createContext();

const DealsContextProvider = ({ children }) => {
  const [dealsData, setDealsData] = useFetch(
    "http://localhost:3001/api/deal/list"
  );

  const [kanbanColumns, setKanbanColumns] = useFetch(
    "http://localhost:3001/api/kanbancolumn/list"
  );

  const contextValue = {
    dealsData,
    setDealsData,
    kanbanColumns,
    setKanbanColumns,
  };

  return (
    <DealsContext.Provider value={contextValue}>
      {children}
    </DealsContext.Provider>
  );
};

const useDealsContext = () => {
  return useContext(DealsContext);
};

export { DealsContextProvider, useDealsContext };
