import React from "react";
import { Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FormField, SectionHeader } from "../../../../../shared/components";

const EcrimeFederalEntityDetailsSection: React.FC = () => (
  <Stack gap="32px">
    <SectionHeader icon={AccountCircleIcon} title="Federal Entity Details" />
    <FormField name="entityName" label="Federal Entity Name" required />
    <FormField
      name="contactNumber"
      label="Federal Contact Number"
      placeholder="Ex: 9714xxxxxxx"
      required
    />
    <FormField name="fax" label="Fax" placeholder="Ex: 9714xxxxxxx" />
    <FormField name="entityAddress" label="Address" required />
  </Stack>
);

export default EcrimeFederalEntityDetailsSection;
