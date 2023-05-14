import LoginButton from "../themeStyle/buttons/LoginButton";
import {NavigationContainer} from "./NavBarStyle";
import { LineOne, LineTwo, LineThree } from "./NavBarStyle";
import { Link } from "react-router-dom";
const NavBar = () => {
    return <NavigationContainer>
        <div style={{cursor: 'pointer', width: '20px'}}>
        <LineOne/>
        <LineTwo/>
        <LineThree/>
        </div>
        <Link to="login">
        <LoginButton />
        </Link>
    </NavigationContainer>


}

export default NavBar;