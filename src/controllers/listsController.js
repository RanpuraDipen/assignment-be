import { StatusCodes } from "http-status-codes";
import * as Yup from "yup";
import listsServices from "../services/lists.services";
import listsValidator from "../validator/listsValidator";

const createList = async (req, res) => {
  try {
    await listsValidator.createListYup.validate(req.body);
    const response = await listsServices.createListService(req.body, req.user.user_id);
    res.status(response.status ?? StatusCodes.OK).send({
      success: response.success,
      message: response.message,
      result: response?.result,
    });
  } catch (err) {
    res.status(err instanceof Yup.ValidationError ? StatusCodes.UNPROCESSABLE_ENTITY : StatusCodes.INTERNAL_SERVER_ERROR).send({
      success: false,
      message: err.message ?? "Something went wrong!",
    });
  }
};

const fetchAllLists = async (req, res) => {
  try {
    const response = await listsServices.fetchAllListsService(req.user.user_id);
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

const fetchListById = async (req, res) => {
  try {
    const response = await listsServices.fetchListById(req.params.id);
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

const deleteList = async (req, res) => {
  try {
    const response = await listsServices.deleteListService(req.params.id);
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

const editList = async (req, res) => {
  try {
    await listsValidator.createListYup.validate(req.body);
    const response = await listsServices.editListByIdService(req.params.id, req.body);
    res.status(response.status ?? StatusCodes.OK).send({
      success: response.success,
      message: response.message,
      result: response?.result,
    });
  } catch (err) {
    res.status(err instanceof Yup.ValidationError ? StatusCodes.UNPROCESSABLE_ENTITY : StatusCodes.INTERNAL_SERVER_ERROR).send({
      success: false,
      message: err.message ?? "Something went wrong!",
    });
  }
};

const listsController = {
  createList,
  fetchAllLists,
  fetchListById,
  deleteList,
  editList,
};

export default listsController;
