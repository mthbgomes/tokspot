import config from "../config";
import axios from "axios";

const onDragEnd = async (result, dealsData) => {
  // Verifica se houve uma queda em uma área de destino válida
  if (!result.destination || result.combine) {
    return;
  }

  // Encontra o card de origem
  const sourceDealIndex = dealsData.findIndex(
    (deal) => deal._id === result.draggableId
  );

  if (sourceDealIndex === -1) {
    // Card de origem não encontrado, tratamento de erro ou retorno
    return;
  }

  // Remove o card de origem da lista
  const draggedDeal = dealsData.splice(sourceDealIndex, 1)[0];

  // Realiza a operação PUT no banco de dados para atualizar o selectedStage do card movido
  await axios.put(
    `${config.apiUrl}/deal/update/${draggedDeal._id}`,
    {
      selectedStage: result.destination.droppableId,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  window.location.reload();
};

export default onDragEnd;
