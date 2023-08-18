import { Link, useLocation } from "react-router-dom";
import LoginButton from "../buttons/LoginButton";
import {
  EmptyNavigationBar,
  LoginButtonSection,
  Navigation,
  NavigationContainer,
} from "./NavigationBarStyle";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Cookie from "js-cookie";

const NavigationBar = () => {
  const [hasAccessToken, setHasAccessToken] = useState(false);

  return (
    <NavigationContainer>
      {hasAccessToken ? (
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
        <EmptyNavigationBar />
      )}
      <LoginButtonSection>
        {hasAccessToken ? (
          <>
            <EmptyNavigationBar />
            <Link to={"/login"}>
              <LoginButton>Zaloguj się</LoginButton>
            </Link>
          </>
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
