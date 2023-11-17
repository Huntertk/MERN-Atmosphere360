import { Router } from "express";
import { createBooking, getAllBooking, getCancelledBooking, getCompletedBooking, getConfirmedBooking, getPendingBooking, successBooking, updateBooking } from "../controllers/bookingController.js";
import { authAdmin } from "../middlewares/authMiddleware.js";


const router = Router();

router.post("/", createBooking)
router.post("/successbooking", successBooking)
router.get("/", authAdmin, getAllBooking)
router.get("/confirmed", authAdmin, getConfirmedBooking)
router.get("/pending", authAdmin, getPendingBooking)
router.get("/completed", authAdmin, getCompletedBooking)
router.get("/cancelled", authAdmin, getCancelledBooking)
router.patch("/:id", authAdmin, updateBooking)

export default router