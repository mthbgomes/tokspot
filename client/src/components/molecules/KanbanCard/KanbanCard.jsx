import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/global.css";
import "./KanbanCard.css";
import { Draggable } from "react-beautiful-dnd";

const KanbanCard = ({ kanbanCard, index }) => {
  return (
    <Draggable draggableId={kanbanCard.cardId} index={index}>
      {(provided) => (
        <div
          className="card mb-2 kanban-card"
          cardid={kanbanCard.cardId}
          key={kanbanCard.cardId}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="card-body p-2">
            <div className="card-title lh-1">
              <p className="fst-italic">{kanbanCard.dealTitle}</p>
            </div>
            <p className="lh-1">Contato: {kanbanCard.contact}</p>
            <p className="lh-1 mb-0">
              Valor:
              <span> {kanbanCard.dealValue}</span>
            </p>
          </div>
        </div>
      )}
    </Draggable>
  );
};

////TODO: CORPO DO CARD: SE FOR TASK = TIPO DA TASK, SE FOR OPORTUNIDADE = CONTATO ASSOCIADO
export default KanbanCard;
