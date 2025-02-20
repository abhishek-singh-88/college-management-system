import express from 'express'
import { addTest, deleteTest, getTest, updateTest } from '../controllers/test.controller';
const router = express.Router();
router.get("/test/get", getTest);
router.post("/test/add", addTest);
router.delete("/test/delete/:_id", deleteTest);
router.patch("/test/update/:_id", updateTest);

export default router;
