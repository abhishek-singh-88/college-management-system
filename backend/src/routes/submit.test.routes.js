import express from 'express'
import { getSubmitTest, addSubmitTest, deleteSubmitTest, updateSubmitTest } from '../controllers/submit.test.controller.js';
const router = express.Router();
router.get("/test-submit/get", getSubmitTest);
router.post("/test-submit/add", addSubmitTest);
router.delete("/test-submit/delete/:_id", deleteSubmitTest);
router.patch("/test-submit/update/:_id", updateSubmitTest);

export default router;
