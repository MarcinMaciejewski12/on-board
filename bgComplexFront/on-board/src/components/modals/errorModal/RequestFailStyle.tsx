import { motion } from "framer-motion";
import styled from "styled-components";

export const FailReqContainer = styled(motion.div)`
  position: absolute;
  width: 20vw;
  height: 10vh;
  top: -30px;
  border: 1px black solid;
  border-radius: 5px;
  transform: translate(0%, 50%);
  z-index: 9;
  background-color: #e54a4a;
  opacity: 0;
  transform: translateY(-20px);
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: white;
  }
`;
