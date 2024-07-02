import React from "react";
import { Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  FormField,
  RadioField,
  SectionHeader,
  DateField,
} from "../../../../../shared/components";

const EcrimePrivateEntityDetailsSection: React.FC = () => {
  return (
    <Stack gap="32px">
      <SectionHeader icon={AccountCircleIcon} title="Private Entity Details" />
      <FormField
        name="tradingLicenseNumber"
        label="Trading License Number"
        required
      />
      <FormField name="activityType" label="Activity Type" required />
      <DateField name="issueDate" label="Issue Date" required />
      <FormField name="companyName" label="Company Name" required />
      <FormField name="ownerName" label="Owner Name" required />
      <DateField name="expiryDate" label="Expiry Date" required />
      <RadioField
        required
        name="hasBranches"
        label="Branches"
        options={[
          { value: true, label: "Yes" },
          { value: false, label: "No" },
        ]}
      />
      <FormField
        name="contactNumber"
        label="Company Contact Number"
        placeholder="Ex: 9714xxxxxxx"
        required
      />
      <FormField name="fax" label="Fax" placeholder="Ex: 9714xxxxxxx" />
      <FormField name="entityAddress" label="Address" required />
    </Stack>
  );
};

export default EcrimePrivateEntityDetailsSection;
