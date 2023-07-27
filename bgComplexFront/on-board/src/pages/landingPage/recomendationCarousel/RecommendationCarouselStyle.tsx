import { motion } from "framer-motion";
import styled from "styled-components";

export const RecommendationSection = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
`;

export const RecommendationContainer = styled.div`
  width: 75vw;
  height: 85vh;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
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

export const BackArrowContainer = styled(motion.div)`
  height: 100%;
  width: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ForwardArrowContainer = styled(motion.div)`
  height: 100%;
  width: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowContainer = styled.div`
  cursor: pointer;
`;

export const CarouselContainer = styled(motion.div)`
  width: 75vw;
  height: 55vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    cursor: pointer;
  }
`;
