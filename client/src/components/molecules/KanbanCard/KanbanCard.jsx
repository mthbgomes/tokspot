import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/global.css";
import "./KanbanCard.css";
import { Draggable } from "react-beautiful-dnd";
import { Trash } from "react-bootstrap-icons";
import config from "../../../config";
const KanbanCard = ({ deal, dealIndex }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`${config.apiUrl}/deal/delete/${deal._id}`)
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log("Erro!", error.response);
      });
  };

  return (
    <Draggable draggableId={dealIndex.toString()} index={dealIndex}>
      {(provided) => (
        <div
          className="card mb-2 kanban-card"
          cardid={deal._id}
          key={dealIndex}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="card-body p-2">
            <button className="btn-card d-block" onClick={handleDelete}>
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
