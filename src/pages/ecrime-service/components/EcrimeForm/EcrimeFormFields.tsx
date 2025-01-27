import React, { useState } from "react";
import FormSelect from "../../../../shared/components/FormSelect";
import {
  Checkbox,
  FormControlLabel,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { Field, ErrorMessage, useFormikContext } from "formik";
import { EcrimeFormValues } from "./types/EcrimeForm.type";
import {
  EcrimeContactSection,
  EcrimeDetailsOfAccusedSection,
  EcrimeFederalEntityDetailsSection,
  EcrimeFormComplainantDetailsSection,
  EcrimeFormComplaintDetailsSection,
  EcrimeFormFinancialLossesSection,
  EcrimeFormGovernmentEntityDetailsSection,
  EcrimeFormPersonalSection,
  EcrimePrivateEntityDetailsSection,
} from "./sections";
import { Attachments } from "../Attachments";
import TermsAndConditionsDialog from "../../../../shared/components/TermsAndConditionsDialog";
import { Captcha } from "../Captcha";

const EcrimeFormFields: React.FC = () => {
  const { values } = useFormikContext<EcrimeFormValues>();
  const [termsDialogOpen, setTermsDialogOpen] = useState(false);

  const renderComplainantDetails = () => {
    switch (values.complainantType) {
      case "Personal":
        return (
          <>
            <EcrimeFormPersonalSection />
            <EcrimeContactSection />
          </>
        );
      case "Private Entity":
        return (
          <>
            <EcrimePrivateEntityDetailsSection />
            <EcrimeFormComplainantDetailsSection />
          </>
        );
      case "Federal Entity":
        return (
          <>
            <EcrimeFederalEntityDetailsSection />
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
      <FormSelect name="complainantType" label="Complainant Type">
        <MenuItem value="Personal">Personal</MenuItem>
        <MenuItem value="Private Entity">Private Entity</MenuItem>
        <MenuItem value="Local Government Entity">
          Local Government Entity
        </MenuItem>
        <MenuItem value="Federal Entity">Federal Entity</MenuItem>
      </FormSelect>

      {renderComplainantDetails()}
      <EcrimeFormComplaintDetailsSection />
      <Attachments />
      <EcrimeDetailsOfAccusedSection />
      <EcrimeFormFinancialLossesSection />

      <Stack gap="8px">
        <FormControlLabel
          control={<Field name="acceptTerms" type="checkbox" as={Checkbox} />}
          label={
            <>
              I accept the{" "}
              <Typography
                component="span"
                sx={{ fontWeight: 600, cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  setTermsDialogOpen(true);
                }}
              >
                Terms and Conditions
              </Typography>
            </>
          }
        />
        <ErrorMessage name="acceptTerms">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>
      </Stack>
      <Captcha />

      <TermsAndConditionsDialog
        open={termsDialogOpen}
        onClose={() => setTermsDialogOpen(false)}
      />
    </Stack>
  );
};

export default EcrimeFormFields;
