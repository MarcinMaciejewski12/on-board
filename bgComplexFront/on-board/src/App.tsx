import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom"
import Dashboard from "./components/dashboard/dashboard";
import LoginWindow from "./components/loginWindow/LoginWindow";
import HomeWindow from "./components/home/HomeWindow";
import { ThemeColors } from "./components/themeStyle/MainTheme";
function App() {

  const isLogged = false;

 


  return (
    <ThemeProvider theme={ThemeColors}>
      <Routes>
        <Route path="/" element={ <HomeWindow />} />
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/login" element={ <LoginWindow /> } />
      </Routes>
  </ThemeProvider>
 
  )
}

export default App;
