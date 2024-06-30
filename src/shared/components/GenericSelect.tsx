import {
  Box,
  Typography,
  Select,
  InputAdornment,
  SelectProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledSelect = styled(Select)(({ theme }) => ({
  "& .MuiSelect-select": {
    borderColor: theme.palette.success.main,
    "&:focus": {
      borderColor: theme.palette.success.dark,
    },
  },
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

type GenericSelectProps = SelectProps & {
  label: string;
  required?: boolean;
  icon?: React.ElementType;
};

const GenericSelect: React.FC<GenericSelectProps> = ({
  label,
  required = false,
  icon: IconComponent,
  children,
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

      <StyledSelect
        {...props}
        variant="standard"
        MenuProps={{
          disableScrollLock: true,
        }}
        endAdornment={
          IconComponent && (
            <InputAdornment position="end">
              <IconComponent />
            </InputAdornment>
          )
        }
      >
        {children}
      </StyledSelect>
    </Box>
  );
};

export default GenericSelect;