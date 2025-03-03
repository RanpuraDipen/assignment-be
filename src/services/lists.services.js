import { StatusCodes } from "http-status-codes";
import currentKnexDate from "../utils/currentDateFormatter";
import listsData from "../models/lists.model";

const createListService = async (formData, userId) => {
  return listsData.createListService(formData, userId);
};

const fetchAllListsService = async (userId) => {
  return listsData.fetchAllListsData(userId);
};

const fetchListById = async (id) => {
  return listsData.fetchListByIdData(id);
};

const editListByIdService = async (id, formData) => {
  const list = await listsData.fetchListByIdData(id);
  if (!list) {
    return {
      status: StatusCodes.CONFLICT,
      success: false,
      message: "Opps! List with this id not found!",
    };
  }

  return listsData.editListByIdData(id, formData);
};

const deleteListService = async (id) => {
  const deletedAt = currentKnexDate();
  return listsData.deleteListById(id, deletedAt);
};

const listsServices = {
  createListService,
  fetchAllListsService,
  fetchListById,
  editListByIdService,
  deleteListService,
};

export default listsServices;
