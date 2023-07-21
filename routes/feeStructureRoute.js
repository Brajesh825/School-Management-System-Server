import express from "express";

import { FeeStructureController } from "../controllers/feeStructureController.js";

const feeStructureController = new FeeStructureController();

const feeStructureRoutes = express.Router();

// Add Class
feeStructureRoutes.post(
  "/feeStructure",
  feeStructureController.addFeeStructure
);

// Get All Class
feeStructureRoutes.get(
  "/feeStructure",
  feeStructureController.getAllFeeStructures
);

export { feeStructureRoutes };
