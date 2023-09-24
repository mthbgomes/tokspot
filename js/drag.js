// Initialize Draggable.js for the cards within the columns
const kanbanCards = new Draggable.Sortable(
  document.querySelectorAll(".kanban-card-container"),
  {
    draggable: ".kanban-card",
    mirror: {
      appendTo: "body",
      constrainDimensions: true,
    },
  }
);

// Add an event listener to handle when a card is dropped
kanbanCards.on("sortable:stop", (event) => {
  // Check if the card has an 'id' property and the 'newContainer' is defined
  if (
    event.data.originalSource &&
    event.data.originalSource.id &&
    event.newContainer
  ) {
    const cardId = event.data.originalSource.id;
    const targetColumn = event.newContainer.closest(".kanban-col");

    if (targetColumn) {
      // Check if the card was dropped into a valid column (Lead or Primeiro Contato)
      targetColumn
        .querySelector(".kanban-card-container")
        .appendChild(document.getElementById(cardId));
    }
  }
});
