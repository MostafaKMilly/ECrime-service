import { Components, Theme } from "@mui/material";

export const CssBaselineOverrides: Components<Theme>["MuiCssBaseline"] = {
  styleOverrides: {
    "html , body": {
      margin: 0,
      padding: 0,
      height: "100%",
    },
  },
};
