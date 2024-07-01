import React from "react";
import { useFormikContext } from "formik";
import { MenuItem, Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  FormField,
  FormSelect,
  RadioField,
  SectionHeader,
  InputMaskField,
} from "../../../../../shared/components";
import { EcrimeFormValues } from "../types/EcrimeForm.type";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const EcrimeFormPersonalSection: React.FC = () => {
  const { values } = useFormikContext<EcrimeFormValues>();

  return (
    <Stack gap="32px">
      <SectionHeader icon={AccountCircleIcon} title="Personal" />

      <RadioField
        name="personal.hasIdentity"
        label="Do you have Identity?"
        options={[
          { value: true, label: "Yes" },
          { value: false, label: "No" },
        ]}
        required
      />

      {values.personal?.hasIdentity && (
        <>
          <InputMaskField
            name="personal.emiratesId"
            label="Emirates ID"
            placeholder="XXX-XXXX-XXXXXXX-X"
            required
            icon={CreditCardOutlinedIcon}
            mask="999-9999-9999999-9"
          />
          <FormField
            name="personal.address"
            label="Address"
            required
            icon={ImportContactsOutlinedIcon}
          />
        </>
      )}

      {!values.personal?.hasIdentity && (
        <>
          <FormField
            name="personal.firstName"
            label="First Name"
            required
            icon={PersonOutlineOutlinedIcon}
          />
          <FormField
            name="personal.middleName"
            label="Middle Name"
            icon={PersonOutlineOutlinedIcon}
          />
          <FormField
            name="personal.surname"
            label="Surname"
            required
            icon={PersonOutlineOutlinedIcon}
          />
          <FormSelect name="personal.gender" label="Gender" required>
            <MenuItem value="">Choose</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </FormSelect>

          <FormSelect name="personal.nationality" label="Nationality" required>
            <MenuItem value="">Choose</MenuItem>
            <MenuItem value="uae">UAE</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </FormSelect>

          <FormField
            name="personal.dateOfBirth"
            label="Date Of Birth"
            placeholder="Date Of Birth"
            required
            type="date"
          />
          <FormField
            name="personal.passportNo"
            label="Passport No"
            required
            icon={ImportContactsOutlinedIcon}
          />
          <FormField
            name="personal.address"
            label="Address"
            required
            icon={ImportContactsOutlinedIcon}
          />
        </>
      )}
    </Stack>
  );
};

export default EcrimeFormPersonalSection;
