import { TypographyOptions } from "@mui/material/styles/createTypography";

const PRIMARY_FONT = "DubaiRegular, Open Sans, sans-serif";
const SECONDRY_FONT = "Bukrabolditalic, Open Sans, sans-serif";
const THIRD_FONT = "Bukrabold, Open Sans, sans-serif";

const typography: TypographyOptions = {
  fontFamily: PRIMARY_FONT,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  allVariants: {
    letterSpacing: 0,
    fontWeight: 400,
  },
  h1: {
    fontFamily: SECONDRY_FONT,
    fontWeight: "bold",
    fontSize: 38,
  },
  h2: {
    fontFamily: SECONDRY_FONT,
    fontWeight: "bold",
    fontSize: 24,
  },
  h3: {
    fontFamily: PRIMARY_FONT,
    fontWeight: 600,
    fontSize: 16,
  },
  h4: {
    fontFamily: PRIMARY_FONT,
    fontWeight: "bold",
    fontSize: 12,
  },
  body1: {
    fontFamily: PRIMARY_FONT,
    fontWeight: 400,
    fontSize: 16,
  },
  body2: {
    fontFamily: PRIMARY_FONT,
    fontWeight: 400,
    fontSize: 14,
  },
  subtitle1: {
    fontFamily: THIRD_FONT,
    fontSize: 12,
    fontWeight: 400,
  },
  button: {
    fontFamily: PRIMARY_FONT,
    fontWeight: "bold",
    fontSize: 12,
  },
};

export default typography;
