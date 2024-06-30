import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  stepConnectorClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const steps = ["1", "2"];

const DashedConnector = styled(StepConnector)(({ theme }) => ({
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.secondary.main,
    borderTopStyle: "dashed",
    marginTop: "6px",
    opacity: 0.4,
    [theme.breakpoints.down("sm")]: {
      marginTop: "4px",
    },
  },
}));

const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
  "& .MuiStepLabel-labelContainer": {
    display: "none",
  },

  "& .MuiStepIcon-root": {
    width: "34px",
    height: "34px",
    color: theme.palette.secondary.main,
    "&.Mui-active": {
      color: theme.palette.primary.main,
    },
    "&.Mui-completed": {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down("sm")]: {
      width: "30px",
      height: "30px",
    },
  },
}));

const EcrimeFormStepper = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Stepper
        activeStep={0}
        alternativeLabel
        connector={<DashedConnector />}
        sx={{
          width: {
            xs: "120px",
            md: "180px",
          },
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <CustomStepLabel>{label}</CustomStepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default EcrimeFormStepper;
