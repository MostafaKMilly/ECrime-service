import { Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FormField, SectionHeader } from "../../../../shared/components";

const EcrimeFederalEntityDetails: React.FC = () => (
  <Stack gap="32px">
    <SectionHeader icon={AccountCircleIcon} title="Federal Entity Details" />
    <FormField name="federalEntityName" label="Federal Entity Name" required />
    <FormField
      name="federalContactNumber"
      label="Federal Contact Number"
      placeholder="Ex: 9714xxxxxxx"
      required
    />
    <FormField name="fax" label="Fax" placeholder="Ex: 9714xxxxxxx" />
    <FormField name="address" label="Address" required />
  </Stack>
);

export default EcrimeFederalEntityDetails;
