import HomeWindow from "./components/home/HomeWindow";
import NavBar from "./components/navigation/NavBar";
import LoginWindow from "./components/loginWindow/LoginWindow";

import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom"
import { ThemeColors } from "./components/themeStyle/MainTheme";
import { QueryClient, QueryClientProvider } from "react-query";
import Dashboard from "./components/dashboard/Dashboard";
function App() {

const queryClient = new QueryClient()

  return (
    <>
    <QueryClientProvider client={queryClient} >
    <ThemeProvider theme={ThemeColors}>
      <NavBar />
      <Routes>
        <Route path="/" element={ <HomeWindow />} />
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/login" element={ <LoginWindow /> } />
      </Routes>
  </ThemeProvider>  
    </QueryClientProvider>
    </>
  
 
  )
}

export default App;
