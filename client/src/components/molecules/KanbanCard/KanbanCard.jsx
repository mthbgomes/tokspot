import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/global.css";
import "./KanbanCard.css";
import { Draggable } from "react-beautiful-dnd";
import { Trash } from "react-bootstrap-icons";
import handleDelete from "../../../handlers/handleDelete";

const KanbanCard = ({ deal, dealIndex }) => {
  return (
    <Draggable draggableId={deal._id} index={dealIndex}>
      {(provided) => (
        <div
          className="card mb-2 kanban-card"
          cardid={deal._id}
          key={deal._id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="card-body p-2">
            <button
              className="btn-card d-block"
              onClick={(e) => {
                e.preventDefault();
                handleDelete(deal._id);
              }}
            >
              <Trash className="trash" />
            </button>
            <div className="card-title lh-1">
              <p className="fst-italic">{deal.dealTitle}</p>
            </div>
            <p className="lh-1">Contato: {deal.contact}</p>
            <p className="lh-1 mb-0">
              Valor: R$
              <span>{deal.dealValue}</span>
            </p>
          </div>
        </div>
      )}
    </Draggable>
  );
};

////TODO: CORPO DO CARD: SE FOR TASK = TIPO DA TASK, SE FOR OPORTUNIDADE = CONTATO ASSOCIADO
export default KanbanCard;
