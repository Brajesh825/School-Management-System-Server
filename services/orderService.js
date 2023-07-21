import { Order } from "../model/order.js";
import { ObjectId } from "mongoose";
import { Student } from "../model/student.js";
import { FeeStructureService } from "./FeeStructureService.js";
const feeStructureService = new FeeStructureService();

import orderid from "order-id";
const { generate } = orderid("testing");
class OrderService {
  constructor() {}

  addOrder = async (data) => {
    try {
      let {
        studentID,
        class: classId,
        year,
        month,
        phone,
        email,
        amount,
        transactionType,
      } = data;

      // check if already paid
      let activeOrder = await Order.findOne({
        classId,
        year,
        month,
        studentID,
      });

      if (activeOrder) {
        return [false, "Transaction already exist"];
      }
      // check if amount is correct
      let [isAmountValid, feeStructureData] =
        await feeStructureService.isAmountValid(classId, year, month, amount);

      if (!isAmountValid) {
        return [false, feeStructureData];
      }

      // does user have to do this transaction
      const [haveTo, haveToMessage] =
        await feeStructureService.haveToDoTransaction(
          year,
          month,
          studentID,
          classId
        );
      if (!haveTo) {
        return [false, haveToMessage];
      }

      const studentObjectId = await Student.findOne({ studentID });

      // handling transaction type cash
      if (transactionType == "cash") {
        console.log(data);
        let myOrder = new Order({
          classId,
          month,
          year,
          studentID: studentObjectId._id,
          transactionID: "NA",
          status: "Completed",
          orderNumber: generate(),
          hostelFee: 0,
          transportFee: 0,
          libraryFee: 0,
          tutionFee: amount,
          totalAmount: amount,
          modeOfTransaction: "cash",
          contactsDetails: {
            phone,
            email,
          },
        });
        await myOrder.save();
        console.log(myOrder);
        return [true, myOrder];
      }

      // handling transaction type online
    } catch (error) {
      console.log(error);
      return [false, "Something went wrong"];
    }
  };

  getAllOrders = async () => {
    let orders = await Order.find({}).populate("classId").populate("studentID");
    for (const order of orders) {
      order.studentID.password = "";
    }

    return orders;
  };

  getOneUserAllOrder = async (studentID) => {
    let orders = await Order.find({ studentID })
      .populate("classId")
      .populate("studentID");
    for (const order of orders) {
      order.studentID.password = "";
    }

    return orders;
  };

  getOneOrder = async (orderID) => {};
}

export { OrderService };
