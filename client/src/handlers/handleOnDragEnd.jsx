const onDragEnd = (result, kanbanData, setKanbanData) => {
  // Verifica se houve uma queda em uma área de destino válida
  if (!result.destination) {
    return;
  }
  if (result.combine) {
    return;
  }
  // Cria uma cópia do estado atual
  const updatedKanbanData = [...kanbanData];

  // Encontra a coluna de origem
  const sourceColumn = updatedKanbanData.find(
    (column) => column.columnId === result.source.droppableId
  );
  console.log(result.destination.droppableId);

  // Remove o cartão da coluna de origem
  const draggedCard = sourceColumn.cards.splice(result.source.index, 1)[0];

  // Encontra a coluna de destino
  const destinationColumn = updatedKanbanData.find(
    (column) => column.columnId === result.destination.droppableId
  );

  // Insere o cartão na coluna de destino na posição correta
  destinationColumn.cards.splice(result.destination.index, 0, draggedCard);

  // Atualiza o estado com as mudanças
  setKanbanData(updatedKanbanData);
};

export default onDragEnd;
