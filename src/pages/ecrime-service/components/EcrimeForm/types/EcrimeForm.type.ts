export interface EcrimeFormValues {
  complainantType:
    | "Personal"
    | "Private Entity"
    | "Local Government Entity"
    | "Federal Entity";
  governmentEntityName: string;
  governmentalContactNumber: string;
  fax: string;
  governmentAddress: string;
  emiratesId: string;
  complainantAddress: string;
  mobileNumber: string;
  email: string;
  details: string;
  relation: string;
  file: File | null;
  financialLosses: boolean;
  acceptTerms: boolean;
  captcha: string;
}
