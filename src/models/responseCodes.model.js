import knexConnection from "../provider/db";

const fetchAllResponseCodesData = async (q) => {
  const query = knexConnection("response_codes").where("is_deleted", 0);

  const { filter } = q;

  if (filter) {
    if (/^\dxx$/.test(filter)) {
      const rangeStart = parseInt(filter[0]) * 100;
      const rangeEnd = rangeStart + 99;
      query.whereBetween("response_code", [rangeStart, rangeEnd]);
    } else if (/^\d{2}x$/.test(filter)) {
      const rangeStart = parseInt(filter.slice(0, 2)) * 10;
      const rangeEnd = rangeStart + 9;
      query.whereBetween("response_code", [rangeStart, rangeEnd]);
    } else {
      query.where("response_code", filter);
    }
  }

  const data = await query
    .select(
      "response_code_id AS id",
      "response_code",
      "description",
      "image_url"
    )
    .orderBy("response_code_id", "asc");

  return {
    data,
  };
};

const responseCodesData = {
  fetchAllResponseCodesData,
};

export default responseCodesData;
