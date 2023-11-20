import { Router } from "express";
import { addBookingPlan, getAllBookingPlan } from "../controllers/bookingPlanController.js";

const router = Router()

// router.post('/createbookingplan', addBookingPlan)
router.get('/getallbookingplan', getAllBookingPlan)

export default router