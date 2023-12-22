import express from "express";
const router = express.Router();
import userController from "../controllers/userController.js";
import authToken from "../middleware/authToken.js";

router.post("/create", userController.createUser);
router.get("/protected", authToken, (req, res) => {
  res.status(200).send("Olá!");
});
export default router;
