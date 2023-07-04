import express from "express";

import { StudentController } from "../controllers/studentController.js";

const studentController = new StudentController();

const studentRoutes = express.Router();

// Add Class
studentRoutes.post("/student", studentController.addStudent);

// Get All Class
studentRoutes.get("/student", studentController.getAllStudent);

export { studentRoutes };
