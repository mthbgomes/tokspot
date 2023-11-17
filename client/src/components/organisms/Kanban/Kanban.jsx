import React from "react";
import KanbanCol from "../../molecules/KanbanCol/KanbanCol.jsx";
import KanbanCard from "../../molecules/KanbanCard/KanbanCard.jsx";
import "./Kanban.css";
import ScrollContainer from "react-indiana-drag-scroll";
import { Button } from "react-bootstrap";

const Kanban = ({ kanbanData }) => {
  return (
    <div className="container-fluid pt-5 vh-100 overflow-x-auto">
      <ScrollContainer
        ignoreElements=".kanban-card"
        hideScrollbars="false"
        className="custom-scrollbar"
      >
        <div
          className="row flex-row flex-sm-nowrap mt-5 ps-3 pt-3"
          id="kanban-columns"
        >
          {kanbanData &&
            kanbanData.map((kanbanCol, columnIndex) => (
              <KanbanCol kanbanCol={kanbanCol} key={kanbanCol.columnId}>
                {kanbanCol.cards.map((card, cardIndex) => (
                  <KanbanCard card={card} key={card.cardId} index={cardIndex} />
                ))}
              </KanbanCol>
            ))}
        </div>
      </ScrollContainer>
      <Button className="kanban-btn">+</Button>
    </div>
  );
};

export default Kanban;
