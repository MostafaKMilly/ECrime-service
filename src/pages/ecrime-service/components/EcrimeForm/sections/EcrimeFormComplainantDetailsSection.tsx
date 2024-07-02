import React from "react";
import { useFormikContext } from "formik";
import { Stack, MenuItem } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import {
  FormField,
  FormSelect,
  InputMaskField,
  SectionHeader,
} from "../../../../../shared/components";
import { EcrimeFormValues } from "../types/EcrimeForm.type";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

const EcrimeFormComplainantDetailsSection: React.FC = () => {
  const { values } = useFormikContext<EcrimeFormValues>();

  return (
    <Stack gap="32px">
      <SectionHeader
        icon={AccountCircleIcon}
        title="Details of the Complainant"
      />

      {values.hasIdentity ? (
        <>
          <InputMaskField
            name="emiratesId"
            label="Emirates ID"
            placeholder="XXX-XXXX-XXXXXXX-X"
            required
            icon={CreditCardOutlinedIcon}
            mask="999-9999-9999999-9"
          />
        </>
      ) : (
        <>
          <FormField name="firstName" label="First Name" required />
          <FormField name="middleName" label="Middle Name" />
          <FormField name="surname" label="Surname" required />
          <FormSelect name="gender" label="Gender" required>
            <MenuItem value="">Choose</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </FormSelect>
          <FormSelect name="nationality" label="Nationality" required>
            <MenuItem value="">Choose</MenuItem>
            <MenuItem value="uae">UAE</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </FormSelect>
          <FormField
            name="dateOfBirth"
            label="Date Of Birth"
            placeholder="Date Of Birth"
            required
            type="date"
          />
          <FormField name="passportNo" label="Passport No" required />
        </>
      )}
      <FormField name="address" label="Address" required />
      <FormField
        name="mobileNumber"
        label="Mobile Number"
        placeholder="971XXXXXXXXX"
        required
        icon={PhoneIcon}
      />
      <FormField
        name="email"
        label="Email"
        placeholder="Ex: xyz@xyz.com"
        required
        icon={MailOutlinedIcon}
      />
    </Stack>
  );
};

export default EcrimeFormComplainantDetailsSection;
