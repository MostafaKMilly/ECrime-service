import { Accused } from "../../EcrimeAccusedDetails/types/Accused.type";

export interface EcrimeFormValues {
  complainantType:
    | "Personal"
    | "Private Entity"
    | "Local Government Entity"
    | "Federal Entity";
  hasIdentity: boolean;
  emiratesId: string;
  address: string;
  firstName: string;
  middleName?: string;
  surname: string;
  gender: string;
  nationality: string;
  dateOfBirth: string;
  passportNo: string;
  mobileNumber: string;
  landlineNumber?: string;
  workNumber?: string;
  email: string;
  entityName: string;
  contactNumber: string;
  fax?: string;
  details: string;
  relation: string;
  file?: File | null;
  financialLosses: boolean;
  actualLosses: string;
  approximateLosses?: string;
  paymentMethod: string[];
  acceptTerms: boolean;
  captcha: string;
  accusedList: Accused[];
  tradingLicenseNumber: string;
  activityType: string;
  issueDate: string;
  companyName: string;
  entityAddress: string;
  ownerName: string;
  expiryDate: string;
  hasBranches: boolean | null;
  hasFinancialLosses?: boolean;
}
