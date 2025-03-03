import bcrypt from "bcryptjs";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import authData from "../models/auth.model";

const loginService = async (email, password) => {
  const user = await authData.getUserByEmail(email);
  if (!user) {
    return {
      status: StatusCodes.NOT_FOUND,
      success: false,
      message: "User does not exists",
    };
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return {
      status: StatusCodes.UNAUTHORIZED,
      success: false,
      message: "invalid credentials",
    };
  }

  const token = jwt.sign(
    { id: user.user_id, email: user.email },
    process.env.SECRET_KEY,
    {
      expiresIn: "1h",
      algorithm: "HS256",
    }
  );

  const result = {
    userId: user.user_id,
    email: user.email,
    accessToken: token,
  };

  return {
    success: true,
    message: "User login successfully",
    result,
  };
};

const signupService = async (userFormData) => {
  const user = await authData.getUserByEmail(userFormData.email);
  if (user) {
    return {
      status: StatusCodes.CONFLICT,
      success: false,
      message: "Opps! User with this email already exist!",
    };
  }

  const hashedPassword = await bcrypt.hash(userFormData.password, 12);

  const result = await authData.postUserData(userFormData, hashedPassword);

  if (!result) {
    return {
      status: StatusCodes.BAD_REQUEST,
      success: false,
      message: "User insertion failed.",
    };
  }
  return {
    success: true,
    message: "User Added successfully!",
  };
};

const authServices = {
  loginService,
  signupService,
};

export default authServices;
