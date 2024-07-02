import * as Yup from "yup";

export const websiteDetailsValidationSchema = Yup.object().shape({
  type: Yup.string().required("Type is required"),
  name: Yup.string().required("Name is required"),
  url: Yup.string().url("Invalid URL").required("URL is required"),
  note: Yup.string()
    .required("Note is required")
    .max(100, "Note cannot be more than 100 characters"),
});
