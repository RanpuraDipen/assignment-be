import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware";
import listsController from "../controllers/listsController";

const listsRouter = Router();

listsRouter.use(authMiddleware.authenticate);
listsRouter.route("/").post(listsController.createList);
listsRouter.route("/").get(listsController.fetchAllLists);
listsRouter.route("/:id").get(listsController.fetchListById);
listsRouter.route("/delete/:id").delete(listsController.deleteList);
listsRouter.route("/edit/:id").put(listsController.editList);

export default listsRouter;
