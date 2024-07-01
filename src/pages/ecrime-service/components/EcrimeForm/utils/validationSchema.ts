import * as Yup from "yup";

const supportedFormats = [
  "application/pdf",
  "image/gif",
  "image/jpeg",
  "image/png",
];

const personalSchema = Yup.object().shape({
  hasIdentity: Yup.boolean().default(true).required("Required"),
  emiratesId: Yup.string()
    .matches(/^\d{3}-\d{4}-\d{7}-\d$/, "Invalid Emirates ID")
    .when("hasIdentity", {
      is: true,
      then: (schema) => schema.required("Required"),
      otherwise: (schema) => schema.notRequired(),
    }),
  address: Yup.string().required("Required"),
  firstName: Yup.string().when("hasIdentity", {
    is: false,
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  middleName: Yup.string().notRequired(),
  surname: Yup.string().when("hasIdentity", {
    is: false,
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  gender: Yup.string().when("hasIdentity", {
    is: false,
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  nationality: Yup.string().when("hasIdentity", {
    is: false,
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  dateOfBirth: Yup.string().when("hasIdentity", {
    is: false,
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  passportNo: Yup.string().when("hasIdentity", {
    is: false,
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  mobileNumber: Yup.string()
    .matches(/^971\d{9}$/, "Invalid mobile number")
    .required("Required"),
  landlineNumber: Yup.string().notRequired(),
  workNumber: Yup.string().notRequired(),
  email: Yup.string().email("Invalid email address").required("Required"),
});

export const validationSchema = Yup.object().shape({
  complainantType: Yup.string().required("Required"),
  governmentEntityName: Yup.string().when("complainantType", {
    is: "Local Government Entity",
    then: (schema) => schema.required("Required"),
  }),
  governmentalContactNumber: Yup.string().when("complainantType", {
    is: "Local Government Entity",
    then: (schema) =>
      schema
        .matches(/^971\d{7,9}$/, "Invalid contact number")
        .required("Required"),
  }),
  fax: Yup.string().when("complainantType", {
    is: "Local Government Entity",
    then: (schema) =>
      schema.matches(/^971\d{7,9}$/, "Invalid fax number").notRequired(),
  }),
  governmentAddress: Yup.string().when("complainantType", {
    is: "Local Government Entity",
    then: (schema) => schema.required("Required"),
  }),
  federalEntityName: Yup.string().when("complainantType", {
    is: "Federal Entity",
    then: (schema) => schema.required("Required"),
  }),
  federalContactNumber: Yup.string().when("complainantType", {
    is: "Federal Entity",
    then: (schema) =>
      schema
        .matches(/^971\d{7,9}$/, "Invalid contact number")
        .required("Required"),
  }),
  tradingLicenseNumber: Yup.string().when("complainantType", {
    is: "Private Entity",
    then: (schema) => schema.required("Required"),
  }),
  activityType: Yup.string().when("complainantType", {
    is: "Private Entity",
    then: (schema) => schema.required("Required"),
  }),
  issueDate: Yup.string().when("complainantType", {
    is: "Private Entity",
    then: (schema) => schema.required("Required"),
  }),
  companyName: Yup.string().when("complainantType", {
    is: "Private Entity",
    then: (schema) => schema.required("Required"),
  }),
  ownerName: Yup.string().when("complainantType", {
    is: "Private Entity",
    then: (schema) => schema.required("Required"),
  }),
  expiryDate: Yup.string().when("complainantType", {
    is: "Private Entity",
    then: (schema) => schema.required("Required"),
  }),
  hasBranches: Yup.boolean().when("complainantType", {
    is: "Private Entity",
    then: (schema) => schema.required("Required"),
  }),
  companyContactNumber: Yup.string().when("complainantType", {
    is: "Private Entity",
    then: (schema) =>
      schema
        .matches(/^971\d{7,9}$/, "Invalid contact number")
        .required("Required"),
  }),
  complainantAddress: Yup.string().required("Required"),
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
  actualLosses: Yup.string().when("financialLosses", {
    is: true,
    then: (schema) => schema.required("Required"),
  }),
  approximateLosses: Yup.string().notRequired(),
  paymentMethod: Yup.array().when("financialLosses", {
    is: true,
    then: (schema) => schema.required("Required"),
  }),
  acceptTerms: Yup.boolean().oneOf([true], "Accept Terms is required"),
  captcha: Yup.string().required("Required"),
  personal: Yup.object().when("complainantType", {
    is: "Personal",
    then: () => personalSchema,
  }),
});
