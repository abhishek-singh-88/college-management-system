import express from 'express'
import { addnotes, deletenotes, getnotes, updatenotes } from '../controllers/notes.controller.js';

const router = express.Router();
router.get("/notes/get", getnotes);
router.post("/notes/add", addnotes);
router.delete("/notes/delete/:_id", deletenotes);
router.patch("/notes/update/:_id", updatenotes);

export default router;
