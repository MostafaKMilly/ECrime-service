import * as Yup from "yup";

export const accusedFormValidationSchema = Yup.object({
  fullName: Yup.string().required("Required"),
  nationality: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  presentInUAE: Yup.string().required("Required"),
  address: Yup.string().when("presentInUAE", {
    is: (val: string) => val === "yes",
    then: (schema) => schema.required("Required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  contactNo: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  websiteDetails: Yup.string().required("Required"),
});
