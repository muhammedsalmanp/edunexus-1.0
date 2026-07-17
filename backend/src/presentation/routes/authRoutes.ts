import express from "express";
import { Login, register, refresh, logout, sendOtp, verifyOtp, resendOtp } from "../controllers/authController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/register", register);
router.post("/login",Login);
router.post("/logout",logout)
router.post("/refresh", refresh);


router.post("/send-otp", authMiddleware, sendOtp);
router.post("/verify-otp", authMiddleware, verifyOtp);
router.post("/resend-otp", authMiddleware, resendOtp);

export default router;