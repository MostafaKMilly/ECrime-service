import * as Yup from "yup";

const supportedFormats = [
  "application/pdf",
  "image/gif",
  "image/jpeg",
  "image/png",
];

export const validationSchema = Yup.object({
  complainantType: Yup.string().required("Required"),
  governmentEntityName: Yup.string().when("complainantType", {
    is: (value: string) => value !== "Personal",
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  governmentalContactNumber: Yup.string().when("complainantType", {
    is: (value: string) => value !== "Personal",
    then: (schema) =>
      schema
        .matches(/^971\d{7,9}$/, "Invalid contact number")
        .required("Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  fax: Yup.string().when("complainantType", {
    is: (value: string) => value !== "Personal",
    then: (schema) =>
      schema.matches(/^971\d{7,9}$/, "Invalid fax number").notRequired(),
    otherwise: (schema) => schema.notRequired(),
  }),
  governmentAddress: Yup.string().when("complainantType", {
    is: (value: string) => value !== "Personal",
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  emiratesId: Yup.string()
    .matches(/^\d{3}-\d{4}-\d{7}-\d$/, "Invalid Emirates ID")
    .required("Required"),
  complainantAddress: Yup.string().required("Required"),
  mobileNumber: Yup.string()
    .matches(/^971\d{9}$/, "Invalid mobile number")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  details: Yup.string()
    .max(2000, "Maximum limit: 2000 characters")
    .required("Required"),
  relation: Yup.string().required("Required"),
  file: Yup.mixed()
    .required("File is required")
    .test("fileType", "Unsupported File Format", (value) => {
      return value && supportedFormats.indexOf((value as File).type) !== -1;
    }),
  financialLosses: Yup.boolean().required("Required"),
  acceptTerms: Yup.boolean().oneOf([true], "Accept Terms is required"),
  captcha: Yup.string().required("Required"),
});
