import React from "react";
import { Box, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Field, FieldProps, getIn } from "formik";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { format, parse } from "date-fns";

interface DateFieldProps {
  name: string;
  label: string;
  required?: boolean;
}

const DateField: React.FC<DateFieldProps> = ({ name, label, required }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Field name={name}>
        {({ form, field }: FieldProps<string>) => {
          const error = getIn(form.errors, name);
          const touch = getIn(form.touched, name);
          const fieldValue = getIn(form.values, name);
          const selectedDate = fieldValue
            ? parse(fieldValue, "dd/MM/yyyy", new Date())
            : null;

          return (
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
                {label}
                {required && <span style={{ color: "red" }}>*</span>}
              </Typography>
              <DatePicker
                {...field}
                value={selectedDate}
                onChange={(newValue) => {
                  form.setFieldValue(
                    name,
                    newValue ? format(newValue, "dd/MM/yyyy") : ""
                  );
                }}
                slotProps={{
                  textField: {
                    error: Boolean(error && touch),
                    helperText: error && touch ? (error as string) : "",
                    variant: "standard",
                    fullWidth: true,
                  },
                }}
              />
            </Box>
          );
        }}
      </Field>
    </LocalizationProvider>
  );
};

export default DateField;
