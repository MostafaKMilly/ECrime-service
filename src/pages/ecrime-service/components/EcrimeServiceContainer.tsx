import React from "react";
import { Box, Stack, StackProps } from "@mui/material";

const EcrimeServiceContainer: React.FC<StackProps> = ({
  children,
  ...props
}) => {
  return (
    <Stack
      alignItems={"center"}
      {...props}
      sx={{
        width: "100%",
        height: "100%",
        pt: "32px",
        gap: {
          xs: "24px",
          md: "50px",
        },
        ...props.sx,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          background:
            'url("/images/graphics-bg.jpg") no-repeat center center fixed',
          backgroundSize: "cover",
          zIndex: -1,
        }}
      />
      {children}
    </Stack>
  );
};

export default EcrimeServiceContainer;
