import kanbanColumn from "../models/kanbanColumnSchema.js";

const createKanbanColumn = async (req, res) => {
  try {
    const newKanbanColumn = new kanbanColumn(req.body);
    const savedKanbanColumn = await newKanbanColumn.save();

    res.status(200).json({
      message: "Coluna kanban criada com sucesso.",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getAllKanbanColumn = async (req, res) => {
  try {
    const kanbanColumns = await kanbanColumn.find();
    res.status(200).json(kanbanColumns);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export default {
  createKanbanColumn,
  getAllKanbanColumn,
};
