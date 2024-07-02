import React, { useState } from "react";
import { Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FormField, SectionHeader } from "../../../../../shared/components";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const EcrimeFormComplaintDetailsSection: React.FC = () => {
  const [detailsCharCount, setDetailsCharCount] = useState(2000);

  const handleDetailsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputLength = event.target.value.length;
    setDetailsCharCount(2000 - inputLength);
  };

  return (
    <Stack gap="32px">
      <SectionHeader
        icon={AccountCircleIcon}
        title="Details of the Complaint"
      />
      <FormField
        name="details"
        label="Details"
        placeholder="(Maximum limit: 2000 characters)"
        required
        helperText={`${detailsCharCount} characters remaining`}
        onChange={handleDetailsChange}
        icon={ImportContactsOutlinedIcon}
      />
      <FormField
        name="relation"
        label="Relation between you and the Accused?"
        required
        icon={PersonOutlinedIcon}
      />
    </Stack>
  );
};

export default EcrimeFormComplaintDetailsSection;
