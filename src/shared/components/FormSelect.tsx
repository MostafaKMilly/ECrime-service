import React from "react";
import { Field, FieldProps, getIn } from "formik";
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
      {({ field, form }: FieldProps<string>) => {
        const error = getIn(form.errors, name);
        const touch = getIn(form.touched, name);
        return (
          <GenericSelect
            {...field}
            label={label}
            required={required}
            fullWidth
            error={Boolean(error && touch)}
            helperText={error && touch ? (error as string) : ""}
          >
            {children}
          </GenericSelect>
        );
      }}
    </Field>
  </Box>
);

export default FormSelect;
