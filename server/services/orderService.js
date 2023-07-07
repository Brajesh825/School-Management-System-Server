import { Order } from "../model/order.js";

class OrderService {
  constructor() {}

  addOrder = async (data) => {
    try {
      let {
        studentID,
        classId,
        year,
        month,
        phone,
        email,
        amount,
        trnsactionType,
      } = data;

      // check if already paid
      let activeOrder = await Order.findOne({
        classId, year,month
      })

      if(activeOrder){
        return [false , "Transaction already exist"]
      }
      // check if amount is correct



      // handling transaction type cash

      // handling transaction type online


    } catch (error) {
      console.log(error);
      return false;
    }
  };

  getAllOrders = async () => {};

  getOneOrder = async (orderID) => {};
}

export { OrderService };
