import { createTheme, responsiveFontSizes } from "@mui/material";
import { palette } from "./palette";
import typography from "./typography";
import { componentOverrides } from "./overrides";

export const theme = responsiveFontSizes(
  createTheme({
    palette,
    typography,
    components: componentOverrides,
  })
);
