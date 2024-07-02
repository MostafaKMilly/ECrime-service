import { Stack } from "@mui/material";

import { FormField, SectionHeader } from "../../../../../shared/components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

const EcrimeContactSection: React.FC = () => (
  <Stack gap="32px">
    <SectionHeader icon={AccountCircleIcon} title="How can we reach you?" />

    <FormField
      name="mobileNumber"
      label="Mobile Number"
      placeholder="971XXXXXXXXX"
      required
      icon={PhoneIphoneOutlinedIcon}
    />
    <FormField
      name="landlineNumber"
      label="Landline Number"
      placeholder="Ex: 9714xxxxxxx"
      icon={CallOutlinedIcon}
    />
    <FormField
      name="workNumber"
      label="Work Number"
      placeholder="Ex: 9714xxxxxxx"
      icon={CallOutlinedIcon}
    />
    <FormField
      name="email"
      label="Email"
      placeholder="Ex: xyz@xyz.com"
      required
      icon={MailOutlinedIcon}
    />
  </Stack>
);

export default EcrimeContactSection;
