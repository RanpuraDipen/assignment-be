import { Router } from "express";
import authRouter from "./auth.route";
import listsRouter from "./lists.route";
import responseCodesRouter from "./responseCodes.route";

const router = Router();

router.use("/response-codes", responseCodesRouter);
router.use("/auth", authRouter);
router.use("/lists", listsRouter);

export default router;
