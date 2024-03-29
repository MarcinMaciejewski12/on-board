import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme/MainTheme";
// import GamesList from "./components/gamesList/GamesList";
import { AuthContextProvider } from "./auth/AuthContext";
import NavigationBar from "./components/navigation/NavigationBar";
import CalendarComp from "./pages/calendar/CalendarComp";
import Dashboard from "./pages/dashboard/Dashboard";
import AddPlayedGames from "./pages/dashboard/addPlayedGames/AddPlayedGames";
import GamesListWindow from "./pages/gamesListWindow/GamesListWindow";
import LandingPage from "./pages/landingPage/LandingPage";
import LoginWindow from "./pages/loginWindow/LoginWindow";
function App() {
  const queryClient = new QueryClient();

  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={Theme}>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginWindow />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/:gameName" element={<AddPlayedGames />} />
            <Route path="/gamesList" element={<GamesListWindow />} />
            <Route path="/calendar" element={<CalendarComp />} />
          </Routes>
        </ThemeProvider>
      </QueryClientProvider>
    </AuthContextProvider>
  );
}

export default App;
