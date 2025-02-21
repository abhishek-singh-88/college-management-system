import express from 'express'


const router = express.Router();
router.get("/gallery/get", getGallery);
router.post("/gallery/add", addGallery);
router.delete("/gallery/delete/:_id", deleteGallery);
router.patch("/gallery/update/:_id", updateGallery);

export default router;
