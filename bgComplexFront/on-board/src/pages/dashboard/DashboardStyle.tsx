import styled from "styled-components";
import { motion } from "framer-motion";

export const DashboardContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
`;

export const DashboardModal = styled(motion.div)`
  width: 60vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 0px 0px 300px 0px;
`;
