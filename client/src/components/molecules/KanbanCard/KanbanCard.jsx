import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/global.css";
import { Draggable } from "react-beautiful-dnd";

const KanbanCard = ({ card, index }) => {
  return (
    <Draggable draggableId={card.cardId} index={index}>
      {(provided) => (
        <div
          className="card shadow-sm mb-2 kanban-card"
          cardid={card.cardId}
          key={card.cardId}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="card-body p-2">
            <div className="card-title lh-1">
              <p className="fst-italic">{card.title}</p>
            </div>
            <p className="lh-1">Contato: {card.contato}</p>
            <p className="lh-1 mb-0">
              Valor:
              <span> {card.value}</span>
            </p>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default KanbanCard;
