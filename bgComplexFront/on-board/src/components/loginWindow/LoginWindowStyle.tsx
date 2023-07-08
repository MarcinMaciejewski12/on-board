import { motion } from "framer-motion";
import styled from "styled-components";

export const LoginContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginModal = styled(motion.div)`
  width: 50vw;
  height: 60vh;
  flex-direction: column;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const LoginForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const LoginFormChildren = styled.div`
  width: 100%;
  flex: 1;
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

export const InputBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    width: 30vw;
    font-size: 20px;
    height: 8vh;
    border-radius: 5px;
    border: 0.1 solid grey;
    margin: 20px;
  }
`;

export const ButtonContainer = styled(motion.div)`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
