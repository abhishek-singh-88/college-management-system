import express from 'express'

const router = express.Router();
router.get("/information/get", getInformation);
router.post("/information/add", addInformation);
router.delete("/information/delete/:_id", deleteInformation);
router.patch("/information/update/:_id", updateInformation);

export default router;
