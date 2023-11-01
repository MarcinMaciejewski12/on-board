import { motion } from "framer-motion";
import styled from "styled-components";

export const MainContainer = styled(motion.div)`
  width: 20vw;
  height: 45vh;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SecondContainer = styled(motion.div)`
  width: 20vw;
  height: 35vh;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;

  height: 8vh;
  display: flex;
  align-items: center;
  padding: 0.3rem;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 1rem;
  justify-content: space-between;
`;

export const Description = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
  & p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
  }
`;

export const StarContainer = styled.div`
  height: 6vh;
  width: 16vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.teriary};
`;

export const Card = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`;
