import { Link, useNavigate } from "react-router-dom";
import LoginButton from "../theme/buttons/LoginButton";
import {
  LineOne,
  LineThree,
  LineTwo,
  LoginButtonSection,
  NavigationContainer,
  NavigationGrid,
} from "./NavigationBarStyle";
import { useState } from "react";

const NavigationBar = ({ toggle }: any) => {
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
