import { Stack } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FormField, SectionHeader } from "../../../../shared/components";

const EcrimeFormComplainantDetails: React.FC = () => (
  <Stack gap="32px">
    <SectionHeader
      icon={AccountCircleIcon}
      title="Details of the Complainant"
    />
    <FormField
      name="emiratesId"
      label="Emirates ID"
      placeholder="XXX-XXXX-XXXXXXX-X"
      required
    />
    <FormField name="complainantAddress" label="Complainant Address" required />
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
    />
  </Stack>
);

export default EcrimeFormComplainantDetails;
