import express from "express";
import dealController from "../controllers/dealController.js";
const router = express.Router();

router.post("/create", dealController.createDeal);
router.get("/list", dealController.getAllDeal);

export default router;
