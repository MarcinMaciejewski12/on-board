import { ThemeProvider } from "styled-components";
import Dashboard from "./components/dashboard/dashboard";
import LoginWindow from "./components/loginWindow/LoginWindow";
import { ThemeColors } from "./components/themeStyle/MainTheme";
function App() {

  const isLogged = false;

 


  return (
    <ThemeProvider theme={ThemeColors}>
  {isLogged
  ? <Dashboard /> 
  : <LoginWindow />
  }</ThemeProvider>
 
  )
}

export default App;
