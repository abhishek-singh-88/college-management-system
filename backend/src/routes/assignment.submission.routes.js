import express from 'express'
import { addAssSub, deleteAssSub, getAssSub, updateAssSub } from '../controllers/assignment.submission.controller';

const router = express.Router();
router.get("/assignment-submission/get", getAssSub);
router.post("/assignment-submission/add", addAssSub);
router.delete("/assignment-submission/delete/:_id", deleteAssSub);
router.patch("/assignment-submission/update/:_id", updateAssSub);

export default router;
