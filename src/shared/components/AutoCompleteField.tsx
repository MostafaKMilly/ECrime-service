import { Field, FieldProps, getIn } from "formik";
import {
  Autocomplete,
  TextField,
  Box,
  Typography,
  Chip,
  AutocompleteProps,
} from "@mui/material";

interface AutoCompleteFieldProps
  extends Omit<
    AutocompleteProps<string, true, false, false>,
    "renderInput" | "options"
  > {
  name: string;
  label: string;
  options: string[];
  required?: boolean;
}

const AutoCompleteField: React.FC<AutoCompleteFieldProps> = ({
  name,
  label,
  options,
  required = false,
  ...props
}) => {
  return (
    <Field name={name}>
      {({ form }: FieldProps<string[]>) => {
        const error = getIn(form.errors, name);
        const touch = getIn(form.touched, name);

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
            <Autocomplete
              {...props}
              multiple
              options={options}
              onChange={(_, value) => {
                form.setFieldValue(name, value);
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
                  placeholder={`Select ${label}`}
                  error={Boolean(error && touch)}
                  helperText={error && touch ? (error as string) : ""}
                />
              )}
            />
          </Box>
        );
      }}
    </Field>
  );
};

export default AutoCompleteField;
