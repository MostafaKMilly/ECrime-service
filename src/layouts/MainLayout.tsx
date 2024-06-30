import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Header } from "./components";
import React, { PropsWithChildren } from "react";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box height={"100%"}>
      <CssBaseline />
      <Header />
      <Box component="main" height={"100%"}>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
