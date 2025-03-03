import knexConnection from "../provider/db";

const getUserByEmail = (email) =>
  knexConnection("users").where({ email }).first();

const postUserData = (userFormData, hashedPassword) =>
  knexConnection("users").insert({
    name: userFormData.username,
    email: userFormData.email,
    password: hashedPassword,
  });

const authData = {
  getUserByEmail,
  postUserData,
};

export default authData;
