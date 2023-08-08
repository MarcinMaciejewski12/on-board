import { Link, useLocation } from "react-router-dom";
import LoginButton from "../buttons/LoginButton";
import {
  LoginButtonSection,
  Navigation,
  NavigationContainer,
} from "./NavigationBarStyle";

const NavigationBar = () => {
  const location = useLocation();
  return (
    <NavigationContainer>
      {location.pathname !== "/" ? (
        <ul>
          <Navigation>
            <li style={{ cursor: "pointer" }}>Znajomi</li>
          </Navigation>
          <Navigation>
            <li style={{ cursor: "pointer" }}>Lista gier</li>
          </Navigation>
          <Navigation>
            <li style={{ cursor: "pointer" }}>Kalendarium</li>
          </Navigation>
          <Navigation>
            <li style={{ cursor: "pointer" }}>Ranking</li>
          </Navigation>
        </ul>
      ) : (
        <ul style={{ display: "none" }}></ul>
      )}
      <LoginButtonSection>
        {location.pathname === "/" || location.pathname === "/login" ? (
          <Link to={"/login"}>
            <LoginButton>Zaloguj się</LoginButton>
          </Link>
        ) : (
          <Link to={"/"}>
            <LoginButton>Wyloguj się</LoginButton>
          </Link>
        )}
      </LoginButtonSection>
    </NavigationContainer>
  );
};

export default NavigationBar;
