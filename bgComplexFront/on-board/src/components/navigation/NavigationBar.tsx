//Hooks
//Styles
import {
  EmptyNavigationBar,
  LoginButtonSection,
  Navigation,
  NavigationContainer,
} from "./NavigationBarStyle";
//Components
import LoginButton from "../buttons/LoginButton";
// Library
import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

const NavigationBar = () => {
  const { user, dispatch } = useContext(AuthContext);
  return (
    // Refactor use map for destructure return statement
    <NavigationContainer>
      {user ? (
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
              <Link style={{ textDecoration: "none" }} to="/gamesList">
                Lista gier
              </Link>
            </motion.li>
          </Navigation>
          <Navigation>
            <motion.li
              whileHover={{
                scale: 1.2,
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/calendar">
                Kalendarium
              </Link>
            </motion.li>
          </Navigation>
        </ul>
      ) : (
        <EmptyNavigationBar />
      )}
      <LoginButtonSection>
        <Link to={user ? "/" : "/login"}>
          <LoginButton onClick={() => dispatch({ type: "LOGOUT" })}>
            {user ? "Wyloguj się" : "Zaloguj się"}
          </LoginButton>
        </Link>
      </LoginButtonSection>
    </NavigationContainer>
  );
};

export default NavigationBar;
