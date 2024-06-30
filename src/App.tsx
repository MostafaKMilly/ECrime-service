import { ThemeProvider } from "@mui/material";
import MainLayout from "./layouts/MainLayout";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout></MainLayout>
    </ThemeProvider>
  );
}

export default App;
