import express from "express";
import multer from "multer";
import { AuthController } from "../controllers/authController.js";
import { AuthorityController } from "../controllers/authorityController.js";
import { userVerification } from "../middleware/auth.js";
import { Authenticate } from "../middleware/authMiddleWare.js";

const authController = new AuthController();
const authorityController = new AuthorityController();

const authRoute = express.Router();

const upload = multer({ dest: "uploads/" });

// Fetching the User
authRoute.post("/student/me", userVerification("student"));

// Login As Student

authRoute.post("/student/login", authController.loginAsStudent);

// Create an Authority
authRoute.post(
  "/authority/",
  Authenticate("authority"),
  authorityController.addAuthority
);

// Update the authority profile
authRoute.patch(
  "/authority/",
  upload.single("file"),
  Authenticate("authority"),
  authorityController.updateProfile
);

// Login As Authority
authRoute.post("/authority/login", authController.loginAsAuthority);

// Fetching the authority
authRoute.post("/authority/me", userVerification("authority"));

authRoute.patch(
  "/authority/changePassword",
  Authenticate("authority"),
  authorityController.changePassword
);

export { authRoute };
