import { motion } from "framer-motion";
import styled from "styled-components";

export const RecommendationSection = styled.section`
  width: 100%;
  height: 90vh;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RecommendationContainer = styled.div`
  width: 75vw;
  height: 85vh;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 20px;
`;

export const Header = styled.div`
  width: 75vw;
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & h1 {
    font-size: 50px;
    color: white;
  }
`;

export const CarouselContainer = styled(motion.div)`
  width: 75vw;
  height: 55vh;
  background: blue;
  
`;
