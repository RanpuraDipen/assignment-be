import { StatusCodes } from "http-status-codes";
import responseCodesServices from "../services/responseCodes.services";

const getAllResponseCodes = async (req, res) => {
  try {
    const response = await responseCodesServices.fetchAllResponseCodesService(
      req.query
    );
    res.status(response.status ?? StatusCodes.OK).send({
      success: response.success,
      message: response.message,
      result: response?.result,
    });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      success: false,
      message: err.message ?? "Something went wrong!",
    });
  }
};

const responseCodesController = {
  getAllResponseCodes,
};

export default responseCodesController;
