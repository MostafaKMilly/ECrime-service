import { EcrimeFormValues } from "../types/EcrimeForm.type";

export const initialValues: EcrimeFormValues = {
  complainantType: "Personal",
  governmentEntityName: "",
  governmentalContactNumber: "",
  fax: "",
  governmentAddress: "",
  emiratesId: "",
  complainantAddress: "",
  mobileNumber: "",
  email: "",
  details: "",
  relation: "",
  file: null,
  financialLosses: false,
  acceptTerms: false,
  captcha: "",
  accusedList: [],
};
