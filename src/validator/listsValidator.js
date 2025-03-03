import * as yup from "yup";

const createListYup = yup.object().shape({
  name: yup.string("Please enter name!").required("Name is required"),
  response_codes: yup.array(),
});

const listsValidator = {
  createListYup,
};

export default listsValidator;
