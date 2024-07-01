import { Stack } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FormField, SectionHeader } from "../../../../shared/components";

const EcrimeFormGovernmentEntityDetails: React.FC = () => (
  <Stack gap="32px">
    <SectionHeader icon={AccountCircleIcon} title="Government Entity Details" />
    <FormField
      name="governmentEntityName"
      label="Government Entity Name"
      required
    />
    <FormField
      name="governmentalContactNumber"
      label="Governmental Contact Number"
      placeholder="Ex: 9714xxxxxxx"
      required
      icon={PhoneIcon}
    />
    <FormField
      name="fax"
      label="Fax"
      placeholder="Ex: 9714xxxxxxx"
      icon={PhoneIcon}
    />
    <FormField name="governmentAddress" label="Government Address" required />
  </Stack>
);

export default EcrimeFormGovernmentEntityDetails;
