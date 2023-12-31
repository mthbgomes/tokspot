import express from "express";
import dealController from "../controllers/dealController.js";
const router = express.Router();

router.post("/create", dealController.createDeal);
router.get("/list", dealController.getAllDeal);
router.delete("/delete/:dealId", dealController.deleteDeal);
router.put("/update/:dealId", dealController.updateDealSelectedStage);

export default router;
