import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { serialize } from "cookie";

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Authentication failed." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Authentication failed." });
    }
    const token = jwt.sign(
      { userId: user._id, email },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    res.setHeader(
      "Set-Cookie",
      serialize("token", token, {
        httpOnly: true,
        sameSite: "strict",
      })
      //TODO: voltar com o secure: true quando der deploy (para garantir HTTPS) secure: true,
    );
    return res.status(200).json("Authentication succeeded.");
  } catch (error) {
    console.error("Erro no login:", error);
    return res.status(500).json({ error: "Authentication failed." });
  }
};

export default {
  loginUser,
};
