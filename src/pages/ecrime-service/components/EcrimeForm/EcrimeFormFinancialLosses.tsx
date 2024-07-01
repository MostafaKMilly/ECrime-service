import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  Chip,
  Autocomplete,
  TextField,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Field, FieldProps, ErrorMessage } from "formik";
import { FormField, SectionHeader } from "../../../../shared/components";

const paymentMethods = [
  "Credit Card",
  "Debit Card",
  "PayPal",
  "Bank Transfer",
  "Cash",
];

const EcrimeFormFinancialLosses: React.FC = () => {
  const [hasFinancialLosses, setHasFinancialLosses] = useState<boolean | null>(
    null
  );

  return (
    <Stack gap="32px">
      <SectionHeader icon={AccountCircleIcon} title="Financial Losses" />
      <Box>
        <Field name="financialLosses">
          {({ field }: FieldProps<boolean>) => (
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
                style={{ marginRight: "16px" }}
              >
                Are there any financial losses?
              </Typography>
              <RadioGroup
                {...field}
                row
                onChange={(event) => {
                  setHasFinancialLosses(event.target.value === "true");
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
            </FormControl>
          )}
        </Field>
        <ErrorMessage name="financialLosses">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>
      </Box>

      {hasFinancialLosses === true && (
        <>
          <FormField
            name="actualLosses"
            label="Actual losses"
            placeholder="Actual losses"
            required
          />
          <FormField
            name="approximateLosses"
            label="Approximate (Possible) losses"
            placeholder="Approximate (Possible) losses"
          />
          <Box>
            <Field name="paymentMethod">
              {({ field, form }: FieldProps<string[]>) => (
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
                    Payment Method
                    <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <Autocomplete
                    {...field}
                    multiple
                    options={paymentMethods}
                    onChange={(_, value) => {
                      form.setFieldValue("paymentMethod", value);
                    }}
                    renderTags={(value: string[], getTagProps) =>
                      value.map((option, index) => (
                        <Chip
                          label={option}
                          {...getTagProps({ index })}
                          color="primary"
                          size="small"
                          sx={{
                            backgroundColor: "#0DA06E",
                            color: "white",
                            height: "24px",
                          }}
                        />
                      ))
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        fullWidth
                        placeholder="Select Payment Methods"
                        error={Boolean(form.errors.paymentMethod)}
                        helperText={form.errors.paymentMethod as string}
                      />
                    )}
                  />
                </Box>
              )}
            </Field>
            <ErrorMessage name="paymentMethod">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>
          </Box>
        </>
      )}
    </Stack>
  );
};

export default EcrimeFormFinancialLosses;
