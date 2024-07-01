import { Stack } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FormField, SectionHeader } from "../../../../shared/components";

const EcrimeContactSection: React.FC = () => (
  <Stack gap="32px">
    <SectionHeader icon={AccountCircleIcon} title="How can we reach you?" />

    <FormField
      name="mobileNumber"
      label="Mobile Number"
      placeholder="971XXXXXXXXX"
      required
      icon={PhoneIcon}
    />
    <FormField
      name="landlineNumber"
      label="Landline Number"
      placeholder="Ex: 9714xxxxxxx"
      icon={PhoneIcon}
    />
    <FormField
      name="workNumber"
      label="Work Number"
      placeholder="Ex: 9714xxxxxxx"
      icon={PhoneIcon}
    />
    <FormField
      name="email"
      label="Email"
      placeholder="Ex: xyz@xyz.com"
      required
      icon={EmailIcon}
    />
  </Stack>
);

export default EcrimeContactSection;
