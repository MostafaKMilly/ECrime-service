import React from "react";
import { Field, FieldProps } from "formik";
import { Box } from "@mui/material";
import GenericSelect from "./GenericSelect";

interface FormSelectProps {
  name: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

const FormSelect: React.FC<FormSelectProps> = ({
  name,
  label,
  required,
  children,
}) => (
  <Box>
    <Field name={name}>
      {({ field, form }: FieldProps<string>) => (
        <GenericSelect
          {...field}
          label={label}
          required={required}
          fullWidth
          error={
            form.errors[name] && form.touched[name]
              ? !!form.errors[name]
              : false
          }
          helperText={
            form.errors[name] && form.touched[name]
              ? (form.errors[name] as string)
              : ""
          }
        >
          {children}
        </GenericSelect>
      )}
    </Field>
  </Box>
);

export default FormSelect;
