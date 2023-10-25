import express from "express";
const router = express.Router();
import userController from "../controllers/userController.js";

// router.post("/new", userController.createUser);
router.post("/new", userController.createUser);
export default router;
