import express from "express";
import { AuthController } from "../controllers/authController.js";
import { AuthorityController } from "../controllers/authorityController.js";
import { userVerification } from "../middleware/auth.js";

const authController = new AuthController();
const authorityController = new AuthorityController();

const authRoute = express.Router();

// Fetching the User
authRoute.post("/student/me", userVerification("student"));

// Login As Student

authRoute.post("/student/login", authController.loginAsStudent);

// Create an Authority
authRoute.post("/authority/", authorityController.addAuthority);

// Login As Authority
authRoute.post("/authority/login", authController.loginAsAuthority);

export { authRoute };
