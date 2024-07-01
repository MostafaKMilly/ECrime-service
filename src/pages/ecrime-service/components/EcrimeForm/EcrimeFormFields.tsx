import React from "react";
import FormSelect from "../../../../shared/components/FormSelect";
import { Checkbox, FormControlLabel, MenuItem, Stack } from "@mui/material";
import { Field, ErrorMessage, useFormikContext } from "formik";
import { EcrimeFormValues } from "./types/EcrimeForm.type";
import {
  EcrimeContactSection,
  EcrimeDetailsOfAccusedSection,
  EcrimeFederalEntityDetailsSection,
  EcrimeFormAttachmentsSection,
  EcrimeFormComplainantDetailsSection,
  EcrimeFormComplaintDetailsSection,
  EcrimeFormFinancialLossesSection,
  EcrimeFormGovernmentEntityDetailsSection,
  EcrimeFormPersonalSection,
  EcrimePrivateEntityDetailsSection,
} from "./sections";

const EcrimeFormFields: React.FC = () => {
  const { values } = useFormikContext<EcrimeFormValues>();

  const renderComplainantDetails = () => {
    switch (values.complainantType) {
      case "Personal":
        return (
          <>
            <EcrimeFormPersonalSection />
            <EcrimeContactSection />
          </>
        );
      case "Federal Entity":
        return (
          <>
            <EcrimeFederalEntityDetailsSection />
            <EcrimeFormComplainantDetailsSection />
          </>
        );
      case "Private Entity":
        return (
          <>
            <EcrimePrivateEntityDetailsSection />
            <EcrimeFormComplainantDetailsSection />
          </>
        );
      case "Local Government Entity":
        return (
          <>
            <EcrimeFormGovernmentEntityDetailsSection />
            <EcrimeFormComplainantDetailsSection />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Stack gap="34px">
      <FormSelect name="complainantType" label="Complainant Type" required>
        <MenuItem value="Personal">Personal</MenuItem>
        <MenuItem value="Private Entity">Private Entity</MenuItem>
        <MenuItem value="Local Government Entity">
          Local Government Entity
        </MenuItem>
        <MenuItem value="Federal Entity">Federal Entity</MenuItem>
      </FormSelect>

      {renderComplainantDetails()}
      <EcrimeFormComplaintDetailsSection />
      <EcrimeFormAttachmentsSection />
      <EcrimeDetailsOfAccusedSection />
      <EcrimeFormFinancialLossesSection />

      <Stack gap="32px">
        <FormControlLabel
          control={<Field name="acceptTerms" type="checkbox" as={Checkbox} />}
          label="I accept the Terms and Conditions"
        />
        <ErrorMessage name="acceptTerms">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>
      </Stack>

      <Stack gap="32px">
        <FormSelect name="captcha" label="Select captcha image" required>
          <MenuItem value="captcha1">Captcha 1</MenuItem>
          <MenuItem value="captcha2">Captcha 2</MenuItem>
          <MenuItem value="captcha3">Captcha 3</MenuItem>
          <MenuItem value="captcha4">Captcha 4</MenuItem>
          <MenuItem value="captcha5">Captcha 5</MenuItem>
        </FormSelect>
        <ErrorMessage name="captcha">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>
      </Stack>
    </Stack>
  );
};

export default EcrimeFormFields;
