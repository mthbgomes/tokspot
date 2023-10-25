import User from "../models/userSchema.js";
// import axios from "axios";

const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();

    res.status(200).json({
      message: "Usuário criado com sucesso.",
      savedUser,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export default {
  createUser,
};
