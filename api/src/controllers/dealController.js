import Deal from "../models/dealSchema.js";

const createDeal = async (req, res) => {
  try {
    const newDeal = new Deal(req.body);
    const savedDeal = await newDeal.save();

    res.status(200).json({
      message: "Negócio criado com sucesso.",
    });
  } catch (err) {
    res.status(500).json({
      message: "Está aqui" + err.message,
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

export default {
  createDeal,
  getAllDeal,
};
