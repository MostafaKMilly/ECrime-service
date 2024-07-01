import { ErrorMessage, Field, FieldProps } from "formik";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Box,
  RadioGroupProps,
} from "@mui/material";

type RadioFieldProps = RadioGroupProps & {
  name: string;
  label: string;
  options: { value: boolean; label: string }[];
  row?: boolean;
  required?: boolean;
};

const RadioField: React.FC<RadioFieldProps> = ({
  name,
  label,
  options,
  row = true,
  required = false,
  ...props
}) => (
  <Box
    display="flex"
    alignItems={{
      xs: "start",
      md: "center",
    }}
    flexDirection={{ xs: "column", md: "row" }}
  >
    <Typography
      variant="subtitle1"
      component="legend"
      sx={{
        width: {
          xs: "100%",
          md: "25%",
        },
      }}
    >
      {label}
      {required && <span style={{ color: "red" }}>*</span>}
    </Typography>
    <Field name={name}>
      {({ field, form }: FieldProps<boolean>) => (
        <RadioGroup
          {...field}
          {...props}
          row={row}
          onChange={(event) => {
            const value = event.target.value === "true";
            form.setFieldValue(name, value);
          }}
        >
          {options.map((option) => (
            <FormControlLabel
              key={option.value.toString()}
              value={option.value.toString()}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      )}
    </Field>
    <ErrorMessage name={name}>
      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
    </ErrorMessage>
  </Box>
);

export default RadioField;
