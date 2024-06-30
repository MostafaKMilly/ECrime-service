import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Header } from "./components";
import React, { PropsWithChildren } from "react";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <CssBaseline />
      <Header />
      <Box component="main" sx={{ pt: "32px" }}>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
