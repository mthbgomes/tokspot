import React from "react";
import KanbanCard from "../KanbanCard/KanbanCard";
import { useKanbanContext } from "../../../contexts/KanbanContext";
import { Droppable } from "react-beautiful-dnd";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/global.css";
import "./KanbanList.css";

const KanbanList = ({ index }) => {
  const { kanbanData } = useKanbanContext();
  return (
    <div className="container-fluid pt-5 bg-secondary-color vh-100 overflow-x-auto custom-scrollbar">
      <div
        className="row flex-row flex-sm-nowrap mt-5 ps-3 pt-3"
        id="kanban-columns"
      >
        {kanbanData &&
          kanbanData.map((kanbanCol, columnIndex) => (
            <div
              className="col-sm-4 col-md-4 col-xl-2 kanban-col"
              style={{ minWidth: "300px" }}
              key={kanbanCol.columnId}
            >
              <h6 className="card-title fw-bold">{kanbanCol.title}</h6>
              <div className="card">
                <Droppable
                  droppableId={kanbanCol.columnId}
                  key={kanbanCol.columnId}
                  index={columnIndex}
                >
                  {(provided) => (
                    <div
                      className="card-body kanban-card-container overflow-auto custom-scrollbar pt-3 pb-0"
                      style={{ maxHeight: "70vh" }}
                      id={kanbanCol.columnId}
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {kanbanCol.cards.map((card, cardIndex) => (
                        <KanbanCard
                          card={card}
                          key={card.cardId}
                          index={cardIndex}
                        />
                      ))}
                      <p className="lh-1">{kanbanCol.total}</p>
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default KanbanList;
