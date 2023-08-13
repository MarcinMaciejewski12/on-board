import { Link, useLocation } from "react-router-dom";
import LoginButton from "../buttons/LoginButton";
import {
  LoginButtonSection,
  Navigation,
  NavigationContainer,
} from "./NavigationBarStyle";
import { motion } from "framer-motion";

const NavigationBar = () => {
  const location = useLocation();
  return (
    <NavigationContainer>
      {location.pathname !== "/" ? (
        <ul>
          <Navigation>
            <motion.li
              whileHover={{
                scale: 1.2,
              }}
            >
              Znajomi
            </motion.li>
          </Navigation>
          <Navigation>
            <motion.li
              whileHover={{
                scale: 1.2,
              }}
            >
              Lista gier
            </motion.li>
          </Navigation>
          <Navigation>
            <motion.li
              whileHover={{
                scale: 1.2,
              }}
            >
              Kalendarium
            </motion.li>
          </Navigation>
          <Navigation>
            <motion.li
              whileHover={{
                scale: 1.2,
              }}
            >
              Ranking
            </motion.li>
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
