import { Stack, Typography } from "@mui/material";
import { EcrimeForm, EcrimeServiceBreadcrumbs, EcrimeServiceContainer } from "./components";

function EcrimeService() {
  return (
    <EcrimeServiceContainer>
      <Stack gap={"8px"} alignItems={"center"}>
        <EcrimeServiceBreadcrumbs />
        <Typography variant="h1">ECrime</Typography>
      </Stack>
      <EcrimeForm />
    </EcrimeServiceContainer>
  );
}

export default EcrimeService;
