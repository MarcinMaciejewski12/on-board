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
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

const NavigationBar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const location = useLocation();

  const isDashboardRoute = location.pathname.includes("/dashboard");
  return (
    // Refactor use map for destructure return statement
    <NavigationContainer>
      {user ? (
        <ul>
          <Navigation>
            <motion.li>
              <motion.p
                whileHover={{
                  scale: 1.2,
                }}
              >
                Znajomi
              </motion.p>
            </motion.li>
          </Navigation>
          <Navigation>
            <motion.li>
              <Link style={{ textDecoration: "none" }} to="/gamesList">
                <motion.p
                  whileHover={{
                    scale: 1.2,
                  }}
                >
                  Lista gier
                </motion.p>
              </Link>
            </motion.li>
          </Navigation>
          <Navigation>
            <motion.li>
              <Link style={{ textDecoration: "none" }} to="/calendar">
                <motion.p
                  whileHover={{
                    scale: 1.2,
                  }}
                >
                  Kalendarium
                </motion.p>
              </Link>
            </motion.li>
          </Navigation>
          {!isDashboardRoute && (
            <Navigation>
              <motion.li>
                <Link style={{ textDecoration: "none" }} to="/dashboard">
                  <motion.p
                    whileHover={{
                      scale: 1.2,
                    }}
                  >
                    Moja półka
                  </motion.p>
                </Link>
              </motion.li>
            </Navigation>
          )}
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
