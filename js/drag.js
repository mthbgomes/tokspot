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

kanbanCards.on("sortable:stop", (event) => {

  if (
    event.data.dragEvent.originalSource &&
    event.data.dragEvent.originalSource.id &&
    event.newContainer
  ) {
    console.log("Dentro do if!")
    const cardId = event.data.originalSource.id;
    const targetColumn = event.newContainer.closest(".kanban-col");

    if (targetColumn) {
      targetColumn
        .querySelector(".kanban-card-container")
        .appendChild(document.getElementById(cardId));
    }
  }
});
