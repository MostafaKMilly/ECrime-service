import { Components, Theme } from "@mui/material";

export const ButtonStylesOverrides: Components<
  Omit<Theme, "components">
>["MuiButton"] = {
  defaultProps: {
    disableRipple: true,
    disableElevation: true,
  },
  styleOverrides: {
    fullWidth: {
      paddingTop: "16px",
      paddingBottom: "16px",
    },
    root: {
      textTransform: "initial",
    },
  },
  variants: [
    {
      props: {
        variant: "outlined",
        color: "secondary",
      },
      style: {
        height: "48px",
        width: "fit-content",
        minWidth: "119px",
        lineHeight: "46px",
        borderRadius: "56px",
        border: "solid 1px #000 !important",
        padding: "0 24px",
        fontSize: "14px",
        color: "#000 !important",
        background: "none !important",
        textTransform: "none",
        fontFamily: '"Bukrabold"',
        boxShadow: "none !important",
        transition: "all 300ms linear",
        letterSpacing: "0",
        "&:hover": {
          backgroundColor: "#f5f5f5 !important",
        },
        "& .MuiButton-startIcon , .MuiButton-endIcon": {
          padding: 4,
          "& svg": {
            fontSize: "medium",
          },
        },
      },
    },
    {
      props: {
        variant: "contained",
        color: "secondary",
      },
      style: {
        padding: "0 20px !important",
        lineHeight: "46px !important",
        height: "46px",
        fontSize: "14px",
        minWidth: "119px",
        borderRadius: "6px",
        textTransform: "none",
        fontFamily: '"29ltbukrabold"',
        boxShadow: "none !important",
        transition: "all 300ms linear",
        letterSpacing: "0",
        "& .MuiButton-startIcon , .MuiButton-endIcon": {
          padding: 4,
          "& svg": {
            fontSize: "medium",
          },
        },
      },
    },
    {
      props: {
        variant: "contained",
      },
      style: {
        padding: "0 20px !important",
        lineHeight: "46px !important",
        height: "46px",
        fontSize: "14px",
        minWidth: "119px",
        borderRadius: "56px !important",
        textTransform: "none",
        fontFamily: '"Bukrabold"',
        boxShadow: "none !important",
        transition: "all 300ms linear",
        letterSpacing: "0",
        color: "#fff",
        cursor: "pointer",
        textAlign: "center",
        border: "0",
        position: "relative",
        animationDuration: "500ms",
        animationDelay: "400ms",

        "& .MuiButton-startIcon , .MuiButton-endIcon": {
          padding: 4,
          "& svg": {
            fontSize: "medium",
          },
        },
      },
    },
    {
      props: {
        size: "small",
      },
      style: {
        maxHeight: "36px",
      },
    },
  ],
};
