import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { Theme } from "./components/theme/MainTheme";
import { QueryClient, QueryClientProvider } from "react-query";
// import GamesList from "./components/gamesList/GamesList";
import LandingPage from "./pages/landingPage/LandingPage";
import NavigationBar from "./components/navigation/NavigationBar";
import LoginWindow from "./pages/loginWindow/LoginWindow";
import Dashboard from "./pages/dashboard/Dashboard";
import GamesListWindow from "./components/gamesList/GamesListWindow";
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginWindow />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gamesList" element={<GamesListWindow />} />
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
