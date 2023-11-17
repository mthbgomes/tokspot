import React from "react";
import { Droppable } from "react-beautiful-dnd";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/global.css";
import "./KanbanCol.css";

const KanbanCol = ({ kanbanCol, columnIndex, children }) => {
  return (
    <div
      className="col-sm-4 col-md-4 col-xl-2 kanban-col ms-2 p-0"
      style={{ minWidth: "350px" }}
      key={kanbanCol.columnId}
    >
      <div className="card kanban-wrapper">
        <h6 className="card-title fw-bold bg-secondary-color column-title">
          {kanbanCol.title}
        </h6>
        <Droppable
          droppableId={kanbanCol.columnId}
          key={kanbanCol.columnId}
          index={columnIndex}
        >
          {(provided) => (
            //OVERFLOW AUTO ESTÁ QUEBRANDO A SOMBRA
            <div
              className="card-body kanban-card-container overflow-y-scroll custom-scrollbar bg-secondary-color m-0 pb-0 pt-0"
              id={kanbanCol.columnId}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {children}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <p className="column-title bg-secondary-color">
          Total: {kanbanCol.total}
        </p>
      </div>
    </div>
  );
};

export default KanbanCol;
