import React, { useState } from "react";
import KanbanCol from "../../molecules/KanbanCol/KanbanCol.jsx";
import KanbanCard from "../../molecules/KanbanCard/KanbanCard.jsx";
import "./Kanban.css";
import { Button } from "react-bootstrap";
import ScrollContainer from "react-indiana-drag-scroll";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { CenteredModal } from "../../atoms/Modal.jsx";
import DealForm from "../../molecules/Forms/DealForm/DealForm.jsx";

const Kanban = ({ kanbanData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dealTitle, setDealTitle] = useState("");
  const [contact, setContact] = useState("");
  const [value, setValue] = useState("");
  const [stages, setStages] = useState([]);

  const handleShowModal = () => {
    setIsOpen(!isOpen);
  };

  const resetForm = () => {
    setDealTitle("");
    setContact("");
    setValue("");
    setStages([]); // Zera o array de stages se for utilizado
  };

  return (
    <div className="container-fluid pt-5 vh-100 overflow-x-auto">
      <ScrollContainer
        ignoreElements=".kanban-card"
        hideScrollbars="false"
        className="custom-scrollbar h-100"
      >
        <div
          className="row flex-row flex-sm-nowrap mt-5 ps-3 pt-3"
          id="kanban-columns"
        >
          {kanbanData &&
            kanbanData.map((kanbanCol, columnIndex) => (
              <KanbanCol kanbanCol={kanbanCol} key={kanbanCol.columnId}>
                {kanbanCol.cards.map((kanbanCard, cardIndex) => (
                  <KanbanCard
                    kanbanCard={kanbanCard}
                    key={kanbanCard.cardId}
                    index={cardIndex}
                  />
                ))}
              </KanbanCol>
            ))}
        </div>
      </ScrollContainer>
      <DropdownButton drop="up" id="addButton" title="+">
        <Dropdown.Item>
          <Button onClick={handleShowModal}>Nova Oportunidade</Button>
        </Dropdown.Item>
      </DropdownButton>
      <div>
        <CenteredModal
          isOpen={isOpen}
          handleShowModal={() => {
            handleShowModal();
            resetForm();
          }}
          modalTitle={"Nova Oportunidade"}
        >
          <DealForm
            stages={kanbanData.map((kanbanCol, columnIndex) => kanbanCol.title)}
            dealTitle={dealTitle}
            setDealTitle={setDealTitle}
            contact={contact}
            setContact={setContact}
            value={value}
            setValue={setValue}
          />
        </CenteredModal>
      </div>
    </div>
  );
};

export default Kanban;
