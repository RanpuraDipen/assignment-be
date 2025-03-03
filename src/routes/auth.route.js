import { Router } from "express";
import authController from "../controllers/authController";

const authRouter = Router();

authRouter.route("/login").post(authController.loginUser);
authRouter.route("/signup").post(authController.signupUser);

export default authRouter;
