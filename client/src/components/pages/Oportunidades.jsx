import React, { useEffect } from "react";
import NavigationBar from "../molecules/Navbar/Navbar";
import { useLinkContext } from "../../contexts/LinkContext";
import KanbanList from "../molecules/KanbanList/KanbanList";
import { useKanbanContext } from "../../contexts/KanbanContext";
import { DragDropContext } from "react-beautiful-dnd";
import onDragEnd from "../../handlers/handleOnDragEnd.jsx";

export default function Oportunidades() {
  const { dashboardLinks } = useLinkContext();

  const { kanbanData, setKanbanData } = useKanbanContext();

  //REMOVER QUANDO ADICIONAR O BACKEND
  useEffect(() => {
    // Verifica se há dados no localStorage
    const storedKanbanData = localStorage.getItem("kanbanData");

    // Se houver dados, atualize o estado
    if (storedKanbanData) {
      setKanbanData(JSON.parse(storedKanbanData));
    }
  }, [setKanbanData]);

  // Use a função de retorno de chamada onDragEnd
  const handleDragEnd = (result) =>
    onDragEnd(result, kanbanData, setKanbanData);

  // Adicione a lógica de armazenamento local no final da função
  useEffect(() => {
    // Atualiza o localStorage sempre que o estado do kanban for alterado
    localStorage.setItem("kanbanData", JSON.stringify(kanbanData));
  }, [kanbanData]);
  //IREI REMOVER ATÉ AQUI

  return (
    <div>
      <NavigationBar links={dashboardLinks} btnText={"Sair"} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <KanbanList kanbanData={kanbanData} />
      </DragDropContext>
    </div>
  );
}
