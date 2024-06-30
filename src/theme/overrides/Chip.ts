import { Components, Theme } from "@mui/material";

export const ChipStylesOverrides: Components<
  Omit<Theme, "components">
>["MuiChip"] = {
  defaultProps : {
    
  },
  styleOverrides: {
    root: {
      color: "#000",
      background: "rgba(0, 0, 0, 0.04)",
      padding: "0px 10px !important",
      borderRadius: "40px",
      position: "relative",
      fontSize: "14px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      transition: "all 300ms ease-in",
      minWidth: "40px",
      "& .MuiChip-label": {
        padding: "0px",
      },
      "& .MuiChip-icon": {
        marginRight: "6px",
        color: "#000",
      },
    },
  },
};
