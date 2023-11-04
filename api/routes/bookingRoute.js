import { Router } from "express";
import { createBooking, getAllBooking } from "../controllers/bookingController.js";
import { authAdmin } from "../middlewares/authMiddleware.js";


const router = Router();

router.post("/", createBooking)
router.get("/", authAdmin, getAllBooking)
 
export default router