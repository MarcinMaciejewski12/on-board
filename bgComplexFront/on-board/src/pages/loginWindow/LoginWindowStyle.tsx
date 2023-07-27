import { motion } from "framer-motion";
import styled from "styled-components";

export const LoginContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  overflow: hidden;
`;

export const LoginIntroductionContainer = styled(motion.div)`
  width: 50vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & h1 {
    color: white;
    font-size: 40px;
    font-weight: 600;
  }
`;

export const LoginModal = styled(motion.div)`
  width: 60vw;
  height: 100vh;
  flex-direction: column;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 0px 350px 0px 0px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;

export const LoginForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const GoBack = styled(motion.div)`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1em;
  font-size: 17px;
  span {
    text-decoration: none;
    cursor: pointer;
  }
`;

export const InputBlock = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  color: white;

  input {
    width: 30vw;
    font-size: 20px;
    height: 8vh;
    border: 1px solid white;
    border-radius: 5px;
    border: 0.1 solid grey;
    background: ${(props) => props.theme.colors.secondary};
    margin: 20px;
    border-color: white;
    color: white;
    padding: 0.5rem;
    ::placeholder {
      color: white;
      opacity: 0.4;
    }
  }
`;

export const ButtonContainer = styled(motion.div)`
  height: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;
