import React from "react";
import { Field, FieldProps } from "formik";
import { Box } from "@mui/material";
import GenericTextField from "./GenericTextField";

interface FormFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  icon?: React.ElementType;
  type?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  placeholder,
  required,
  icon,
  type,
}) => (
  <Box>
    <Field name={name}>
      {({ field, form }: FieldProps<string>) => (
        <GenericTextField
          {...field}
          label={label}
          placeholder={placeholder}
          required={required}
          icon={icon}
          type={type}
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
        />
      )}
    </Field>
  </Box>
);

export default FormField;
