import { Components, Theme } from "@mui/material";

export const DialogStylesOverrides: Components<Theme>["MuiDialog"] = {
  defaultProps: {
    maxWidth: "sm",
    fullWidth: true,
  },
  styleOverrides: {
    root: {
      "& .MuiBackdrop-root": {
        background: "rgba(33,33,33,0.5) !important",
        backdropFilter: "blur(4px)",
      },
    },
    paper: ({ theme }) => ({
      minWidth: "auto !important",
      padding: "40px",
      boxShadow: theme.shadows[2],
      borderRadius: "22px !important",
      "& .MuiDialogTitle-root": {
        padding: 0,
        height: 60,
        color: "#000",
        ...theme.typography.h2,
        "& .MuiButtonBase-root": {
          color: "#000",
          top: "30px",
          right: "27px",
        },
      },
      "& .MuiDialogContent-root": {
        maxHeight: "520px",
        padding: "0px",
        paddingRight: "8px",
      },
      "& .MuiDialogActions-root": {
        padding: "0px",
      },
    }),
    paperWidthMd: {
      maxWidth: 847,
      height: 617,
    },
  },
};
