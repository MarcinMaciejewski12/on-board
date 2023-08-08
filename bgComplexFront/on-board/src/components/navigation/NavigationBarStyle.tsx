import { motion } from "framer-motion";
import styled from "styled-components";

export const NavigationContainer = styled.nav`
  height: 8vh;
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  background: transparent;
  z-index: 10;

  & ul {
    display: flex;
    width: 60vw;
    justify-content: flex-start;
  }
`;

export const Navigation = styled.div`
  display: none;
  width: 60vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 8vh;

  & li {
    width: 15vw;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16px;
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
