import express from "express";

import { ClassController } from "../controllers/classController.js";

const classController = new ClassController();

const classRoutes = express.Router();

// Add Class
classRoutes.post("/class", classController.addClass);

// Get All Class
classRoutes.get("/class", classController.getAllClass);

export { classRoutes };
