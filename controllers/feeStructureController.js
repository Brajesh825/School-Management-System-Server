import { FeeStructureService } from "../services/FeeStructureService.js";

const feeStructureService = new FeeStructureService();

class FeeStructureController {
  constructor() {}

  addFeeStructure = async (req, res) => {
    let [status, data] = await feeStructureService.addFeeStructure(req.body);
    if (!status) {
      return res.status(400).json({
        success: "false",
        message: data,
      });
    }
    res.status(200).json({
      success: "true",
      message: "Fee Structure Successfully Added",
      feeStructure: data,
    });
  };

  getAllFeeStructures = async (req, res) => {
    let feeStructures = await feeStructureService.getAllFeeStructure();
    res.status(200).json(feeStructures);
  };
}

export { FeeStructureController };
