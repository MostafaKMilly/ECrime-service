import { useState } from "react";
import { Field, FieldProps, ErrorMessage } from "formik";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  FormField,
  FormSelect,
  SectionHeader,
} from "../../../../shared/components";

const EcrimeFormPersonal: React.FC = () => {
  const [hasIdentity, setHasIdentity] = useState<boolean | null>(null);

  return (
    <Stack gap="32px">
      <SectionHeader icon={AccountCircleIcon} title="Personal" />

      <FormControl
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          component="legend"
          sx={{ width: "25%" }}
        >
          Do you have Identity?
        </Typography>
        <Field name="hasIdentity">
          {({ field }: FieldProps<string>) => (
            <RadioGroup
              {...field}
              row
              onChange={(event) => {
                setHasIdentity(event.target.value === "true");
                field.onChange(event);
              }}
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          )}
        </Field>
      </FormControl>

      {hasIdentity === true && (
        <>
          <FormField
            name="emiratesId"
            label="Emirates ID"
            placeholder="XXX-XXXX-XXXXXXX-X"
            required
          />
          <FormField name="address" label="Address" required />
        </>
      )}

      {hasIdentity === false && (
        <>
          <FormField name="firstName" label="First Name" required />
          <FormField name="middleName" label="Middle Name" />
          <FormField name="surname" label="Surname" required />
          <FormSelect name="gender" label="Gender" required>
            <MenuItem value="">Choose</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </FormSelect>
          <ErrorMessage name="gender">
            {(msg) => <div style={{ color: "red" }}>{msg}</div>}
          </ErrorMessage>
          <FormSelect name="nationality" label="Nationality" required>
            <MenuItem value="">Choose</MenuItem>
            <MenuItem value="uae">UAE</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </FormSelect>
          <ErrorMessage name="nationality">
            {(msg) => <div style={{ color: "red" }}>{msg}</div>}
          </ErrorMessage>
          <FormField
            name="dateOfBirth"
            label="Date Of Birth"
            placeholder="Date Of Birth"
            required
            type="date"
          />
          <FormField name="passportNo" label="Passport No" required />
          <FormField name="address" label="Address" required />
        </>
      )}
    </Stack>
  );
};

export default EcrimeFormPersonal;
