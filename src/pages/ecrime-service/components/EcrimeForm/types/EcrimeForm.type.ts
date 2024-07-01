import { Accused } from "./Accused.type";

export interface EcrimeFormValues {
  complainantType:
    | "Personal"
    | "Private Entity"
    | "Local Government Entity"
    | "Federal Entity";
  governmentEntityName?: string;
  governmentalContactNumber?: string;
  fax?: string;
  governmentAddress?: string;
  complainantAddress: string;
  mobileNumber: string;
  email: string;
  details: string;
  relation: string;
  file: File | null;
  financialLosses: boolean;
  actualLosses?: string;
  approximateLosses?: string;
  paymentMethod?: string[];
  acceptTerms: boolean;
  captcha: string;
  accusedList: Accused[];
  personal?: {
    hasIdentity: boolean;
    emiratesId?: string;
    address?: string;
    firstName?: string;
    middleName?: string;
    surname?: string;
    gender?: string;
    nationality?: string;
    dateOfBirth?: string;
    passportNo?: string;
    mobileNumber: string;
    landlineNumber?: string;
    workNumber?: string;
    email: string;
  };
  federalEntityName?: string;
  federalContactNumber?: string;
  tradingLicenseNumber?: string;
  activityType?: string;
  issueDate?: string;
  companyName?: string;
  ownerName?: string;
  expiryDate?: string;
  hasBranches?: boolean;
  companyContactNumber?: string;
}
