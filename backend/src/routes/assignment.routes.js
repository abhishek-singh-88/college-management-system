import express from "express";
import {
  addAss,
  deleteAss,
  getAss,
  updateAss,
} from "../controllers/assignment.controller.js";

const router = express.Router();
router.get("/assignment/get", getAss);
router.post("/assignment/add", addAss);
router.delete("/assignment/delete/:_id", deleteAss);
router.patch("/assignment/update/:_id", updateAss);

export default router;
