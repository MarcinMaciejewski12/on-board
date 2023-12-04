// import { motion } from "framer-motion";
import styled from "styled-components";

export const NavigationContainer = styled.nav`
  height: 8vh;
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  background: transparent;
  & ul {
    display: flex;
    width: 60vw;
    justify-content: flex-start;
  }
`;

export const Navigation = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-left: 2rem;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16px;
    width: 10vw;
    a {
      cursor: pointer;
      text-decoration: none;
      color: white;
    }
  }
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
  margin-right: 50px;
`;

export const EmptyNavigationBar = styled.div`
  width: 85vw;
  height: 8vh;
`;
