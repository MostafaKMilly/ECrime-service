import { Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FormField, SectionHeader } from "../../../../shared/components";

const EcrimeFormComplaintDetails: React.FC = () => (
  <Stack gap="32px">
    <SectionHeader icon={AccountCircleIcon} title="Details of the Complaint" />
    <FormField
      name="details"
      label="Details"
      placeholder="(Maximum limit: 2000 characters)"
      required
    />
    <FormField
      name="relation"
      label="Relation between you and the Accused?"
      required
    />
  </Stack>
);

export default EcrimeFormComplaintDetails;
