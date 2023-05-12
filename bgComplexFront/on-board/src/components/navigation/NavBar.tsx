import LoginButton from "../themeStyle/buttons/LoginButton";
import {NavigationContainer} from "./NavBarStyle";
import { LineOne, LineTwo, LineThree } from "./NavBarStyle";
const NavBar = () => {
    return <NavigationContainer>
        <div style={{cursor: 'pointer', width: '20px'}}>
        <LineOne/>
        <LineTwo/>
        <LineThree/>
        </div>
        <LoginButton/>
    </NavigationContainer>


}

export default NavBar;