import React from "react";
import NavigationBar from "../molecules/Navbar/Navbar.jsx";
import Kanban from "../organisms/Kanban/Kanban.jsx";
import onDragEnd from "../../handlers/handleOnDragEnd.jsx";
import { useLinkContext } from "../../contexts/LinkContext.jsx";
import { useTasksContext } from "../../contexts/TasksContext.jsx";
import { DragDropContext } from "react-beautiful-dnd";

export default function Tasks() {
  const { loggedInLinks } = useLinkContext();
  const { tasksData, setTasksData } = useTasksContext();

  const handleDragEnd = (result) => onDragEnd(result, tasksData, setTasksData);

  return (
    <div>
      <NavigationBar links={loggedInLinks} btnText={"Sair"} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Kanban kanbanData={tasksData} />
      </DragDropContext>
    </div>
  );
}
