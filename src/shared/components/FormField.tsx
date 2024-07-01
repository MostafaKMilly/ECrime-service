import React from "react";
import { Field, FieldProps, getIn } from "formik";
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
      {({ field, form }: FieldProps<string>) => {
        const error = getIn(form.errors, name);
        const touch = getIn(form.touched, name);
        return (
          <GenericTextField
            {...field}
            label={label}
            placeholder={placeholder}
            required={required}
            icon={icon}
            type={type}
            fullWidth
            error={Boolean(error && touch)}
            helperText={error && touch ? (error as string) : ""}
          />
        );
      }}
    </Field>
  </Box>
);

export default FormField;
