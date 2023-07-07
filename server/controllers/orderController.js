import { OrderService } from "../services/orderService.js";
const orderService = new OrderService();

class OrderController {
  constructor() {}

  getOrders = async () => {};

  getMyOrder = async () => {};

  addOrder = async (req, res) => {
    let [status, data] = await orderService.addOrder(req.body);

    if (!status) {
      return res.status(400).json({
        success: "false",
        message: data,
      });
    }
    res.status(200).json({
      success: "true",
      message: "Transaction Successfully Completed",
      order: data,
    });
  };
}

export { OrderController };
