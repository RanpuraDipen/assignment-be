import { StatusCodes } from "http-status-codes";
import * as Yup from "yup";
import authServices from "../services/auth.services";
import authValidator from "../validator/authValidator";

const loginUser = async (req, res) => {
  try {
    await authValidator.loginYup.validate(req.body);
    const { email, password } = req.body;

    const response = await authServices.loginService(email, password);

    res.status(response.status ?? StatusCodes.OK).send({
      success: response.success,
      message: response.message,
      result: response?.result,
    });
  } catch (err) {
    res
      .status(
        err instanceof Yup.ValidationError
          ? StatusCodes.UNPROCESSABLE_ENTITY
          : StatusCodes.INTERNAL_SERVER_ERROR
      )
      .send({
        success: false,
        message: err.message ?? "Something went wrong!",
      });
  }
};

const signupUser = async (req, res) => {
  try {
    await authValidator.signupYup.validate(req.body);

    const response = await authServices.signupService(req.body);

    res.status(response.status ?? StatusCodes.OK).send({
      success: response.success,
      message: response.message,
      result: response?.result,
    });
  } catch (err) {
    res
      .status(
        err instanceof Yup.ValidationError
          ? StatusCodes.UNPROCESSABLE_ENTITY
          : StatusCodes.INTERNAL_SERVER_ERROR
      )
      .send({
        success: false,
        message: err.message ?? "Something went wrong!",
      });
  }
};

const authController = {
  loginUser,
  signupUser,
};

export default authController;
