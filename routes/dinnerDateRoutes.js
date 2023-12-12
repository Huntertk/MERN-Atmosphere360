import { Router } from "express";
import { authAdmin } from "../middlewares/authMiddleware.js";
import { addBlockDates, deleteBlockedDate, getAllBlockDates } from "../controllers/dinnerDateController.js";

const router = Router()

router.post('/block-dates', authAdmin, addBlockDates)
router.get('/block-dates', getAllBlockDates)
router.delete('/block-dates/:id', authAdmin, deleteBlockedDate)

export default router