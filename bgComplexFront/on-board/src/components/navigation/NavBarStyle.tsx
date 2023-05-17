import styled from "styled-components";
import { motion } from "framer-motion";

export const NavigationContainer = styled.div`
  width: 100%;
  height: 8vh;
  background-color: ${(props)=> props.theme.colors.second};
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const LineOne = styled(motion.div)`
    background: black;
    width: 20px;
    height: 3px;
    border-radius: 3px;
    margin-bottom: 2px;
`;
export const LineTwo = styled(motion.div)`
    background: black;
    width: 15px;
    height: 3px;
    border-radius: 3px;
    margin-bottom: 2px;
`;
export const LineThree = styled(motion.div)`
    background: black;
    width: 10px;
    height: 3px;
    border-radius: 3px;

`;
