import styled from "styled-components";
import { motion } from "framer-motion";

export const HomePage = styled.div`
width: 100%;
height: 100vh;
background: ${(props) => props.theme.colors.second};
`

export const LogoContainer = styled(motion.div)`
position: relative;
display: inline-block;
padding: 1rem;
& div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
    padding: 10px;
    width: 30em;
    height: 150px;
}

   & span {
    position: absolute;
    min-width: 70vw;
    font-size: 70px;
    color: ${(props)=> props.theme.colors.second};
    display: flex;
    align-items: center;
 & h1 {
   margin-left: 20px;
    font-size: 70px;
    color: ${(props)=> props.theme.colors.third};
    font-weight: 900;
 }
   }

`

export const IntroContainer = styled(motion.div)`
width: 100%;

position:relative;
top: -300px;
padding-right: 4rem;
display: flex;
justify-content: end;
`

export const IntroBlobContainer = styled(motion.div)`
   position: relative;
   display: inline-block;

   & div{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    width: 30em;
    height: 150px;
    text-align: center;
   & span {
    font-size: 20px;
    cursor: default;
    & span{ 
      font-weight: 700;
      cursor: pointer;
      color: ${props => props.theme.colors.third}
    }
   }
   }
`