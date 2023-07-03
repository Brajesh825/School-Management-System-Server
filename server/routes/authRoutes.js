import express from "express";

const router = express.Router();

// Login As Student
router.post("/api/v1/login/student");

// Change Password

// Login As Authority
router.post("/api/v1/login/authority");

// Register As Authority
router.post("/api/v1/register/authority");
