import express from 'express'
import { addProject, deleteProject, getProject, updateProject } from '../controllers/project.controller.js';

const router = express.Router();
router.get("/project/get", getProject);
router.post("/project/add", addProject);
router.delete("/project/delete/:_id", deleteProject);
router.patch("/project/update/:_id", updateProject);

export default router;
