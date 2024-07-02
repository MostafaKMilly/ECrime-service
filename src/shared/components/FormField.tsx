import React from "react";
import { Field, FieldProps, getIn } from "formik";
import { TextFieldProps } from "@mui/material";
import GenericTextField from "./GenericTextField";

interface FormFieldProps extends TextFieldProps<"standard"> {
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
  helperText,
  onChange,
  onBlur,
  ...props
}) => (
  <Field name={name}>
    {({ field, form }: FieldProps<string>) => {
      const error = getIn(form.errors, name);
      const touch = getIn(form.touched, name);

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        field.onChange(event);
        if (onChange) {
          onChange(event);
        }
      };

      const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        field.onBlur(event);
        if (onBlur) {
          onBlur(event);
        }
      };

      return (
        <GenericTextField
          {...field}
          {...props}
          label={label}
          placeholder={placeholder}
          required={required}
          icon={icon}
          type={type}
          fullWidth
          error={Boolean(error && touch)}
          helperText={error && touch ? (error as string) : helperText}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      );
    }}
  </Field>
);

export default FormField;
