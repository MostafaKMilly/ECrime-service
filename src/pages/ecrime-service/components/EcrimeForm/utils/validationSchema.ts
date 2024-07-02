import * as Yup from "yup";

const supportedFormats = [
  "application/pdf",
  "image/gif",
  "image/jpeg",
  "image/png",
];

export const validationSchema = Yup.object().shape({
  complainantType: Yup.string().required("Required"),
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
    .matches(
      /^971\d{9}$/,
      "Invalid mobile number. Must start with '971' and followed by 9 digits."
    )
    .required("Required"),
  landlineNumber: Yup.string().notRequired(),
  workNumber: Yup.string().notRequired(),
  email: Yup.string().email("Invalid email address").required("Required"),
  entityName: Yup.string().when("complainantType", {
    is: (type: string) => type !== "Personal" && type !== "Private Entity",
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  entityAddress: Yup.string().when("complainantType", {
    is: (type: string) => type !== "Personal",
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  contactNumber: Yup.string()
    .matches(
      /^971\d{7,9}$/,
      "Invalid contact number. Must start with '971' and followed by 7 to 9 digits."
    )
    .when("complainantType", {
      is: (type: string) => type !== "Personal",
      then: (schema) => schema.required("Required"),
      otherwise: (schema) => schema.notRequired(),
    }),
  fax: Yup.string()
    .matches(
      /^971\d{7,9}$/,
      "Invalid fax number. Must start with '971' and followed by 7 to 9 digits."
    )
    .notRequired(),
  tradingLicenseNumber: Yup.string().when("complainantType", {
    is: "Private Entity",
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  activityType: Yup.string().when("complainantType", {
    is: "Private Entity",
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  issueDate: Yup.string().when("complainantType", {
    is: "Private Entity",
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  companyName: Yup.string().when("complainantType", {
    is: "Private Entity",
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  ownerName: Yup.string().when("complainantType", {
    is: "Private Entity",
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  expiryDate: Yup.string().when("complainantType", {
    is: "Private Entity",
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  hasBranches: Yup.boolean().when("complainantType", {
    is: "Private Entity",
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  details: Yup.string()
    .max(2000, "Maximum limit: 2000 characters")
    .required("Required"),
  relation: Yup.string().required("Required"),
  file: Yup.mixed()
    .nullable()
    .test("fileType", "Unsupported File Format", (value) => {
      return !value || supportedFormats.indexOf((value as File).type) !== -1;
    }),

  financialLosses: Yup.boolean().required("Required"),
  actualLosses: Yup.string().when("financialLosses", {
    is: true,
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  approximateLosses: Yup.string().notRequired(),
  paymentMethod: Yup.array().when("financialLosses", {
    is: true,
    then: (schema) =>
      schema
        .required("Required")
        .test("is-not-empty", "Required", (value) => value && value.length > 0),
    otherwise: (schema) => schema.notRequired(),
  }),
  acceptTerms: Yup.boolean().oneOf([true], "Accept Terms is required"),
  captcha: Yup.string()
    .oneOf(["chat"], "Please select proper icon")
    .required("Required"),
});
