import HomeWindow from "./components/home/HomeWindow";
import NavBar from "./components/navigation/NavBar";
import LoginWindow from "./components/loginWindow/LoginWindow";
import Dashboard from "./components/dashboard/dashboard";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom"
import { ThemeColors } from "./components/themeStyle/MainTheme";
function App() {
  return (
    <>
    <ThemeProvider theme={ThemeColors}>
      <NavBar />
      <Routes>
        <Route path="/" element={ <HomeWindow />} />
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/login" element={ <LoginWindow /> } />
      </Routes>
  </ThemeProvider>  
    </>
  
 
  )
}

export default App;
