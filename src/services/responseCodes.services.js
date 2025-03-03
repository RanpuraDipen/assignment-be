import responseCodesData from "../models/responseCodes.model";

const fetchAllResponseCodesService = async (q) => {
  const queryResponse = await responseCodesData.fetchAllResponseCodesData(q);
  return {
    success: true,
    message: "Successfully fetch all response codes",
    result: queryResponse.data,
  };
};

const responseCodesServices = {
  fetchAllResponseCodesService,
};

export default responseCodesServices;
