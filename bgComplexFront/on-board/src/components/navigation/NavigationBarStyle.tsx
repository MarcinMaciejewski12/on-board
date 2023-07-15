import { motion } from "framer-motion";
import styled from "styled-components";

export const NavigationContainer = styled.nav`
  height: 8vh;
  position: fixed;
  display: flex;
  justify-content: end;
  width: 98vw;
  background: transparent;
  z-index: 10;
`;

export const NavigationGrid = styled.div`
  height: 8vh;
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
`;

export const LoginButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LineOne = styled(motion.div)`
  width: 20px;
  margin-bottom: 4px;
  height: 3px;
  border-radius: 10px;
  /* TODO change color */
  background: ${(props) => props.theme.colors.primary};
`;
export const LineTwo = styled(motion.div)`
  width: 10px;
  height: 3px;
  margin-bottom: 4px;
  border-radius: 10px;
  /* TODO change color */
  background: ${(props) => props.theme.colors.primary};
`;
export const LineThree = styled(motion.div)`
  width: 20px;
  height: 3px;
  border-radius: 10px;
  /* TODO change color */
  background: ${(props) => props.theme.colors.primary};
`;
