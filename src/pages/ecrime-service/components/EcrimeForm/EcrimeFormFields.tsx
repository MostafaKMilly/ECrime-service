import React from "react";
import { Checkbox, FormControlLabel, MenuItem, Stack } from "@mui/material";
import { Field, ErrorMessage, useFormikContext } from "formik";
import EcrimeFormGovernmentEntityDetails from "./EcrimeFormGovernmentEntityDetails";
import EcrimeFormComplainantDetails from "./EcrimeFormComplainantDetails";
import EcrimeFormComplaintDetails from "./EcrimeFormComplaintDetails";
import EcrimeFormFinancialLosses from "./EcrimeFormFinancialLosses";
import EcrimeFormAttachments from "./EcrimeFormAttachments";
import FormSelect from "../../../../shared/components/FormSelect";
import EcrimeFormPersonal from "./EcrimeFormPersonal";
import EcrimeContactSection from "./EcrimeContactSection";
import EcrimeFederalEntityDetails from "./EcrimeFederalEntityDetails";
import EcrimePrivateEntityDetails from "./EcrimePrivateEntityDetails";
import { EcrimeFormValues } from "./types/EcrimeForm.type";
import EcrimeDetailsOfAccusedSection from "./EcrimeDetailsOfAccusedSection";

const EcrimeFormFields: React.FC = () => {
  const { values } = useFormikContext<EcrimeFormValues>();

  const renderComplainantDetails = () => {
    switch (values.complainantType) {
      case "Personal":
        return (
          <>
            <EcrimeFormPersonal />
            <EcrimeContactSection />
          </>
        );
      case "Federal Entity":
        return (
          <>
            <EcrimeFederalEntityDetails />
            <EcrimeFormComplainantDetails />
          </>
        );
      case "Private Entity":
        return (
          <>
            <EcrimePrivateEntityDetails />
            <EcrimeFormComplainantDetails />
          </>
        );
      case "Local Government Entity":
        return (
          <>
            <EcrimeFormGovernmentEntityDetails />
            <EcrimeFormComplainantDetails />
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
      <EcrimeFormComplaintDetails />
      <EcrimeFormAttachments />
      <EcrimeDetailsOfAccusedSection />
      <EcrimeFormFinancialLosses />

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
