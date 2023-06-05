import HomeWindow from "./components/home/HomeWindow";
import NavBar from "./components/navigation/NavBar";
import LoginWindow from "./components/loginWindow/LoginWindow";

import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom"
import { ThemeColors } from "./components/theme/MainTheme";
import { QueryClient, QueryClientProvider } from "react-query";
import Dashboard from "./components/dashboard/Dashboard";
import GamesList from "./components/gamesList/GamesList";
function App() {

const queryClient = new QueryClient()

  return (
    <>
    <QueryClientProvider client={queryClient} >
    <ThemeProvider theme={ThemeColors}>
      <NavBar />
      <Routes>
        <Route path="/" element={ <HomeWindow />} />
        <Route path="/login" element={ <LoginWindow /> } />
        <Route path="/gamesList" element={<GamesList />} />
        <Route path="/dashboard" element={ <Dashboard /> } />
      </Routes>
  </ThemeProvider>  
    </QueryClientProvider>
    </>
  
 
  )
}

export default App;
