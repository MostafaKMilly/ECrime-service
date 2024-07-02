import React from "react";
import { Field, FieldProps, getIn } from "formik";
import { Box, SelectProps, SelectChangeEvent } from "@mui/material";
import GenericSelect from "./GenericSelect";

type FormSelectProps = SelectProps & {
  name: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
  helperText?: string;
};

const FormSelect: React.FC<FormSelectProps> = ({
  name,
  label,
  required,
  children,
  helperText,
  onChange,
  onBlur,
  ...props
}) => (
  <Box>
    <Field name={name}>
      {({ field, form }: FieldProps<string>) => {
        const error = getIn(form.errors, name);
        const touch = getIn(form.touched, name);

        const handleChange = (
          event: SelectChangeEvent<unknown>,
          child: React.ReactNode
        ) => {
          field.onChange(event);
          if (onChange) {
            onChange(event, child);
          }
        };

        const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
          field.onBlur(event);
          if (onBlur) {
            onBlur(event);
          }
        };

        return (
          <GenericSelect
            {...field}
            {...props}
            label={label}
            required={required}
            fullWidth
            error={Boolean(error && touch)}
            helperText={error && touch ? (error as string) : helperText}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            {children}
          </GenericSelect>
        );
      }}
    </Field>
  </Box>
);

export default FormSelect;
