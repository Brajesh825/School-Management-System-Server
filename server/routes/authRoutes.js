import express from "express";
import { AuthController } from "../controllers/authController.js";
import { userVerification } from "../middleware/auth.js";

const authController = new AuthController();

const authRoute = express.Router();

// Checking the User
authRoute.post("/student/me", userVerification("student"));


// Login As Student

authRoute.post("/student/login", authController.loginAsStudent);

// Change Password

// Login As Authority
authRoute.post("/authority/login", authController.loginAsAuthority);

export { authRoute };
