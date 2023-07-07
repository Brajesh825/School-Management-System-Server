import express from "express";

import { OrderController } from "../controllers/orderController.js";

const orderController = new OrderController();

const orderRoute = express.Router();

// Add Order
orderRoute.post("/order", orderController.addOrder);

// Get All Order
orderRoute.get("/order", orderController.getOrders);

export { orderRoute };
