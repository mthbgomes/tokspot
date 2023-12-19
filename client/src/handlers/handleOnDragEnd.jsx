const onDragEnd = (result, kanbanColumns, setKanbanColumns) => {
  if (!result.destination) {
    return; // O item foi descartado fora de todas as colunas
  }

  const { source, destination } = result;

  if (
    source.droppableId === destination.droppableId &&
    source.index === destination.index
  ) {
    return; // O item foi colocado de volta no mesmo local
  }

  const updatedKanbanColumns = kanbanColumns.map((column) => ({
    ...column,
    cards: [...column.cards], // Criar uma cópia do array de cartões
  }));

  const sourceColumnIndex = updatedKanbanColumns.findIndex(
    (column) => column._id === source.droppableId
  );
  const destinationColumnIndex = updatedKanbanColumns.findIndex(
    (column) => column._id === destination.droppableId
  );

  if (sourceColumnIndex === -1 || destinationColumnIndex === -1) {
    console.error("Source or destination column not found.");
    return;
  }

  const movedCard = updatedKanbanColumns[sourceColumnIndex].cards[source.index];

  if (!movedCard) {
    console.error("Moved card not found.");
    return;
  }

  // Remover da coluna de origem
  updatedKanbanColumns[sourceColumnIndex].cards.splice(source.index, 1);

  // Inserir na coluna de destino na posição correta
  updatedKanbanColumns[destinationColumnIndex].cards.splice(
    destination.index,
    0,
    movedCard
  );

  setKanbanColumns(updatedKanbanColumns);
};

export default onDragEnd;
