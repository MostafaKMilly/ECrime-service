import { Stack, Typography } from "@mui/material";
import EcrimeServiceBreadcrumbs from "./components/EcrimeServiceBreadcrumbs";

function EcrimeService() {
  return (
    <Stack
      alignItems={"center"}
      sx={{
        width: "100%",
        height: "100vh",
        pt: "32px",
        background: 'url("/images/graphics-bg.jpg") center/cover no-repeat',
      }}
    >
      <Stack gap={"8px"} alignItems={"center"}>
        <EcrimeServiceBreadcrumbs />
        <Typography variant="h1">ECrime</Typography>
      </Stack>
    </Stack>
  );
}

export default EcrimeService;
