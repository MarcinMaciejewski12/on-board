import { Link } from "react-router-dom";
import LoginButton from "../theme/buttons/LoginButton";
import { LoginButtonSection, NavigationContainer } from "./NavigationBarStyle";

const NavigationBar = () => {
  return (
    <NavigationContainer>
      <LoginButtonSection>
        <Link to={"/login"}>
          <LoginButton>Zaloguj się</LoginButton>
        </Link>
      </LoginButtonSection>
    </NavigationContainer>
  );
};

export default NavigationBar;
