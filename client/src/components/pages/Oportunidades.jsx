import React from "react";
import NavigationBar from "../molecules/Navbar/Navbar";
import Kanban from "../organisms/Kanban/Kanban.jsx";
import onDragEnd from "../../handlers/handleOnDragEnd.jsx";
import { useLinkContext } from "../../contexts/LinkContext";
import { useDealsContext } from "../../contexts/DealsContext";
import { DragDropContext } from "react-beautiful-dnd";

export default function Oportunidades() {
  const { loggedInLinks } = useLinkContext();
  const { dealsData, kanbanColumns, setKanbanColumns } = useDealsContext();

  const handleDragEnd = (result) =>
    onDragEnd(result, kanbanColumns, setKanbanColumns);

  return (
    <div>
      <NavigationBar links={loggedInLinks} btnText={"Sair"} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Kanban dealsData={dealsData} kanbanColumns={kanbanColumns} />
      </DragDropContext>
    </div>
  );
}
