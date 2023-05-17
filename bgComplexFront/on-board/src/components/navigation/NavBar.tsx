import LoginButton from "../themeStyle/buttons/LoginButton";
import {NavigationContainer} from "./NavBarStyle";
import { LineOne, LineTwo, LineThree } from "./NavBarStyle";
import { Link, useLocation } from "react-router-dom";
const NavBar = () => {
const location = useLocation();

    return <NavigationContainer>
        <div style={{cursor: 'pointer', width: '20px'}}>
        <LineOne/>
        <LineTwo/>
        <LineThree/>
        </div>
        <Link to="login">
       {
       location.pathname !== '/login' && 
        <LoginButton>Zaloguj się</LoginButton>
       }
        </Link>
    </NavigationContainer>


}

export default NavBar;