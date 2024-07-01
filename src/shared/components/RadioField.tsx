import { Field, FieldProps } from "formik";
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
  options: { value: string; label: string }[];
  row?: boolean;
  onChange?: (value: string) => void;
};

const RadioField: React.FC<RadioFieldProps> = ({
  name,
  label,
  options,
  row = true,
  onChange,
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
    </Typography>
    <Field name={name}>
      {({ field, form }: FieldProps<string>) => (
        <RadioGroup
          {...field}
          {...props}
          row={row}
          onChange={(event) => {
            form.setFieldValue(name, event.target.value);
            if (onChange) onChange(event.target.value);
          }}
        >
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      )}
    </Field>
  </Box>
);

export default RadioField;
