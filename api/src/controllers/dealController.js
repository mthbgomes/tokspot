import Deal from "../models/dealSchema.js";
import KanbanColumn from "../models/kanbanColumnSchema.js";

const createDeal = async (req, res) => {
  const { dealTitle, contact, dealValue, dealDescription, selectedStage } =
    req.body;
  try {
    const kanbanColumn = await KanbanColumn.findOne({
      columnTitle: selectedStage,
    });

    if (kanbanColumn) {
      const newDeal = new Deal({
        dealTitle,
        contact,
        dealValue,
        dealDescription,
        selectedStage: kanbanColumn._id,
      });

      const savedDeal = await newDeal.save();

      return res.status(200).json({
        message: "Negócio criado com sucesso.",
        deal: savedDeal,
      });
    } else {
      return res.status(404).json({
        message: "A coluna kanban especificada não foi encontrada.",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getAllDeal = async (req, res) => {
  try {
    const deals = await Deal.find();
    res.status(200).json(deals);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const deleteDeal = async (req, res) => {
  const dealId = req.params.dealId;

  try {
    const deal = await Deal.findById(dealId);
    if (!deal) {
      return res.status(404).json({
        message: "Negócio não encontrado.",
      });
    }
    await Deal.deleteOne({ _id: dealId });
    return res.status(200).json({
      message: "Negócio excluído com sucesso.",
    });
  } catch (err) {
    res.status(500).json({
      message: "Erro ao excluir o negócio: " + err.message,
    });
  }
};

export default {
  createDeal,
  getAllDeal,
  deleteDeal, // Adicione a função deleteDeal ao export
};
