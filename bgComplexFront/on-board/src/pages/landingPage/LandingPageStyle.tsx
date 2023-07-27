import { motion } from "framer-motion";
import styled from "styled-components";

export const LandingPageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.primary};
`;

export const MainDescriptionBackground = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  width: 80vw;
  height: 95vh;
  border-radius: 0px 0px 400px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
`;

export const LogoAndDescriptionContainer = styled.div`
  width: 80%;
  height: 55vh;
`;

export const LogoContainer = styled.div`
  height: 30%;
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  & h1 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 70px;
    font-weight: 900;
    font-size: 50px;
    color: white;
    & span {
      color: ${(props) => props.theme.colors.teriary};
    }
  }
`;

export const DescriptionContainer = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const DiceSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 5rem;
`;

export const MainDescription = styled.span`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  text-align: center;
  line-height: 1.3;
  cursor: default;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonDisplay = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const DiceContainer = styled.div`
  margin-left: 4rem;
`;

export const SecondDescriptionBackground = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  width: 80vw;
  height: 95vh;

  border-radius: 300px 0px 0px 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
`;

export const EncouragingLeaves = styled(motion.div)`
  width: 100%;
  height: 150vh;
  margin-top: 5rem;
  overflow: hidden;
`;

export const LeavesContainer = styled(motion.div)`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  margin-top: 7rem;
`;

export const RightLeavesContainer = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  margin-top: 7rem;
  justify-content: end;
`;

export const LeftLeaves = styled(motion.div)`
  width: 70%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  background-color: #fcf300;
  border-radius: 0px 30px 30px 0px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
`;

export const RightLeaves = styled(motion.div)`
  width: 70%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  background-color: #fcf300;
  border-radius: 30px 0px 0px 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
`;
