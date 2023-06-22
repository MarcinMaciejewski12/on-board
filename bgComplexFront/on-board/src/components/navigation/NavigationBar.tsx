import LoginButton from "../theme/buttons/LoginButton";
import { LineOne, LineThree, LineTwo, LoginButtonSection, NavigationContainer, NavigationGrid } from "./NavigationBarStyle";

const NavigationBar = () => {
    return <NavigationContainer>
        <NavigationGrid>
            <div style={{cursor: 'pointer'}}>
                <LineOne></LineOne>
                <LineTwo></LineTwo>
                <LineThree></LineThree>
            </div>
        </NavigationGrid>
        <LoginButtonSection>
        <LoginButton>Zaloguj się</LoginButton>
        </LoginButtonSection>
    </NavigationContainer>
}


export default NavigationBar;