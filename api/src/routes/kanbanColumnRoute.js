import kanbanColumnController from "../controllers/kanbanColumnController.js";
import express from "express";

const router = express.Router();

router.post("/create", kanbanColumnController.createKanbanColumn);
router.get("/list", kanbanColumnController.getAllKanbanColumn);

export default router;
