import { ThemeProvider } from "styled-components";
import Dashboard from "./components/dashboard/dashboard";
import LoginWindow from "./components/loginWindow/LoginWindow";
import { ThemeColors } from "./components/themeStyle/MainTheme";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const isLogged = false;

  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={ThemeColors}>
      <QueryClientProvider client={queryClient}>
        {isLogged ? <Dashboard /> : <LoginWindow />}
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
