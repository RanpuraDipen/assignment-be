import knexConnection from "../provider/db";

const createListService = async (formData, userId) => {
  try {
    await knexConnection.transaction(async (trx) => {
      const [listId] = await trx("lists").insert({
        user_id: userId,
        name: formData.name,
      });

      if (formData.response_codes && formData.response_codes.length > 0) {
        const promises = formData.response_codes.map(async (code) => {
          const listItemsData = {
            list_id: listId,
            response_code_id: code,
          };
          await trx("list_items").insert(listItemsData);
        });
        await Promise.all(promises);
      }
    });

    return { success: true, message: "List created successfully" };
  } catch (error) {
    return { success: false, message: "List creation failed" };
  }
};

const fetchAllListsData = async (userId) => {
  try {
    const lists = await knexConnection("lists").select("list_id", "name").where({ user_id: userId, is_deleted: 0 });
    return { success: true, result: lists };
  } catch (error) {
    return { success: false, message: "Failed to fetch lists" };
  }
};

const fetchListByIdData = async (id) => {
  try {
    const listItems = await knexConnection("list_items as li")
      .select("li.list_item_id", "li.response_code_id", "rc.response_code", "rc.description", "rc.image_url")
      .leftJoin("response_codes as rc", "li.response_code_id", "rc.response_code_id")
      .where("li.list_id", id)
      .andWhere("li.is_deleted", 0);
    return { success: true, result: listItems };
  } catch (error) {
    return { success: false, message: "Failed to fetch list items" };
  }
};

const deleteListById = async (id, deletedAt) => {
  try {
    await knexConnection.transaction(async (trx) => {
      await trx("lists").where({ list_id: id }).update({
        is_deleted: 1,
        deleted_at: deletedAt,
      });

      await trx("list_items")
        .where({
          list_id: id,
        })
        .update({
          is_deleted: 1,
          deleted_at: deletedAt,
        });
    });

    return {
      success: true,
      message: "List Deleted Successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to delete List",
    };
  }
};

const editListByIdData = async (id, formData) => {
  try {
    await knexConnection.transaction(async (trx) => {
      await trx("lists").where({ list_id: id, is_deleted: 0 }).update({ name: formData.name });
      await trx("list_items")
        .where({ list_id: id, is_deleted: 0 })
        .update({
          is_deleted: 1,
          deleted_at: trx.raw("CURRENT_TIMESTAMP"),
        });

      if (formData.response_codes && formData.response_codes.length > 0) {
        const newItems = formData.response_codes.map((code) => ({
          list_id: id,
          response_code_id: code,
        }));
        await trx("list_items").insert(newItems);
      }
    });
    return { success: true, message: "List updated successfully" };
  } catch (error) {
    return { success: false, message: "List update failed" };
  }
};

const listsData = {
  createListService,
  fetchAllListsData,
  fetchListByIdData,
  deleteListById,
  editListByIdData,
};

export default listsData;
