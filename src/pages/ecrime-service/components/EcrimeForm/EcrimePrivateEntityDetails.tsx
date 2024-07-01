import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Field, FieldProps, ErrorMessage } from "formik";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FormField, SectionHeader } from "../../../../shared/components";

const EcrimePrivateEntityDetails: React.FC = () => {
  const [issueDate, setIssueDate] = useState<Date | null>(null);
  const [expiryDate, setExpiryDate] = useState<Date | null>(null);

  return (
    <Stack gap="32px">
      <SectionHeader icon={AccountCircleIcon} title="Private Entity Details" />
      <FormField
        name="tradingLicenseNumber"
        label="Trading License Number"
        required
      />
      <FormField name="activityType" label="Activity Type" required />

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Field name="issueDate">
          {({ form }: FieldProps<string>) => (
            <Box
              display="flex"
              alignItems={{
                xs: "start",
                md: "center",
              }}
              flexDirection={{ xs: "column", md: "row" }}
              sx={{ columnGap: "24px" }}
            >
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{
                  width: {
                    xs: "100%",
                    md: "30%",
                  },
                }}
              >
                Issue Date
                <span style={{ color: "red" }}>*</span>
              </Typography>
              <DatePicker
                value={issueDate}
                onChange={(newValue) => {
                  setIssueDate(newValue);
                  form.setFieldValue("issueDate", newValue);
                }}
                slots={{
                  textField: (params) => (
                    <TextField
                      {...params}
                      error={Boolean(
                        form.errors.issueDate && form.touched.issueDate
                      )}
                      helperText={form.errors.issueDate as string}
                      variant="standard"
                      fullWidth
                    />
                  ),
                }}
              />
            </Box>
          )}
        </Field>
      </LocalizationProvider>
      <FormField name="companyName" label="Company Name" required />
      <FormField name="ownerName" label="Owner Name" required />

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Field name="expiryDate">
          {({ form }: FieldProps<string>) => (
            <Box
              display="flex"
              alignItems={{
                xs: "start",
                md: "center",
              }}
              flexDirection={{ xs: "column", md: "row" }}
              sx={{ columnGap: "24px" }}
            >
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{
                  width: {
                    xs: "100%",
                    md: "30%",
                  },
                }}
              >
                Expiry Date
                <span style={{ color: "red" }}>*</span>
              </Typography>
              <DatePicker
                value={expiryDate}
                onChange={(newValue) => {
                  setExpiryDate(newValue);
                  form.setFieldValue("expiryDate", newValue);
                }}
                slots={{
                  textField: (params) => (
                    <TextField
                      {...params}
                      error={Boolean(
                        form.errors.expiryDate && form.touched.expiryDate
                      )}
                      helperText={form.errors.expiryDate as string}
                      variant="standard"
                      fullWidth
                    />
                  ),
                }}
              />
            </Box>
          )}
        </Field>
      </LocalizationProvider>

      <Box>
        <FormControl
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Typography
            variant="subtitle1"
            component="legend"
            sx={{ width: "25%" }}
          >
            Branches
            <span style={{ color: "red" }}>*</span>
          </Typography>
          <Field name="hasBranches">
            {({ field }: FieldProps<string>) => (
              <RadioGroup
                {...field}
                row
                onChange={(event) => {
                  field.onChange(event);
                }}
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Yes"
                  style={{ marginRight: "16px" }}
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            )}
          </Field>
        </FormControl>
        <ErrorMessage name="hasBranches">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>
      </Box>

      <FormField
        name="companyContactNumber"
        label="Company Contact Number"
        placeholder="Ex: 9714xxxxxxx"
        required
      />
      <FormField name="fax" label="Fax" placeholder="Ex: 9714xxxxxxx" />
      <FormField name="address" label="Address" required />
    </Stack>
  );
};

export default EcrimePrivateEntityDetails;
