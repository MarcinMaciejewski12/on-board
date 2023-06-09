import { ThemeProvider } from "styled-components";
import { Routes, Route, useNavigate } from "react-router-dom"
import { Theme } from "./components/theme/MainTheme";
import { QueryClient, QueryClientProvider } from "react-query";
import GamesList from "./components/gamesList/GamesList";
import LandingPage from "./components/landingPage/LandingPage";
import NavigationBar from "./components/navigation/NavigationBar";
import LoginWindow from "./components/loginWindow/LoginWindow";
function App() {

const queryClient = new QueryClient()


return (
    
    <QueryClientProvider client={queryClient} >
    <ThemeProvider theme={Theme}>
        <NavigationBar />
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/login" element={ <LoginWindow /> } />
        <Route path="/gamesList" element={<GamesList /> } />
      </Routes>
  </ThemeProvider>
    </QueryClientProvider>
    
  )
}

export default App;
