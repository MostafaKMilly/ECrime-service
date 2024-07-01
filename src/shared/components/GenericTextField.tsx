import React from "react";
import {
  TextField,
  InputAdornment,
  Box,
  Typography,
  TextFieldProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInput-underline:before": {
    borderBottomColor: theme.palette.success.main,
  },
  "&:hover:not(.Mui-disabled):before": {
    borderBottomColor: theme.palette.success.light,
  },
  "&.Mui-focused:before": {
    borderBottomColor: theme.palette.success.dark,
  },
}));

interface GenericTextFieldProps extends TextFieldProps<"standard"> {
  label: string;
  placeholder?: string;
  required?: boolean;
  icon?: React.ElementType;
}

const GenericTextField: React.FC<GenericTextFieldProps> = ({
  label,
  placeholder,
  required = false,
  icon: IconComponent,
  ...props
}) => {
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
      <StyledTextField
        placeholder={placeholder}
        variant="standard"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {IconComponent && (
                <IconComponent sx={{ width: "18px", height: "18px" }} />
              )}
            </InputAdornment>
          ),
        }}
        {...props}
      />
    </Box>
  );
};

export default GenericTextField;
