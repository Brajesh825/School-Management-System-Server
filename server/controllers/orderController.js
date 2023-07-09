import { OrderService } from "../services/orderService.js";
const orderService = new OrderService();

class OrderController {
  constructor() {}

  getOrders = async (req, res) => {
    try {
      let orders = await orderService
        .getAllOrders()
      console.log(orders);
      res.status(200).json(orders);
    } catch (error) {
      console.log(error);
      res.status(200).json([]);
    }
  };

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
