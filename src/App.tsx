import { ThemeProvider } from "@mui/material";
import MainLayout from "./layouts/MainLayout";
import { theme } from "./theme";
import { EcrimeService } from "./pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <EcrimeService />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
