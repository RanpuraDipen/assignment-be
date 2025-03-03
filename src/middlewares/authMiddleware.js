import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import authData from "../models/auth.model";

const authenticate = async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.replace("Bearer ", "");

    const verifyToken = jwt.verify(accessToken, process.env.SECRET_KEY);

    const user = await authData.getUserByEmail(verifyToken.email);
    req.user = user;
    next();
  } catch (err) {
    res.status(StatusCodes.UNAUTHORIZED).send({
      success: false,
      message: "Unauthorized",
    });
  }
};

const authMiddleware = {
  authenticate,
};

export default authMiddleware;
