import { Router } from "express";
import responseCodesController from "../controllers/responseCodesController";

const responseCodesRouter = Router();

responseCodesRouter
  .route("/list")
  .get(responseCodesController.getAllResponseCodes);

export default responseCodesRouter;
