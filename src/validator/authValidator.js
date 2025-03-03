import * as yup from "yup";

const loginYup = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email!")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const signupYup = yup.object().shape({
  username: yup
    .string()
    .strict()
    .typeError("Name must be a string")
    .required("Name is required."),
  email: yup
    .string()
    .typeError("Email must be a string")
    .email("Please enter valid email")
    .required("Email is required"),
  password: yup
    .string()
    .strict()
    .typeError("Password must be a string")
    .required("Password is required"),
});

const authValidator = {
  loginYup,
  signupYup,
};

export default authValidator;
