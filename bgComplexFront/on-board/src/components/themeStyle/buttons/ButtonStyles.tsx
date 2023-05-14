import styled from "styled-components";
import { motion } from "framer-motion";

export const LoginButtons = styled(motion.button)`
width: 130px;
height:30px;
cursor: pointer;
border: none;
font-size: 15px;
border-radius: 15px;
background: ${props => props.theme.colors.first};
`



export const SingUpButton = styled(motion.button)`
width: 200px;
height:30px;
cursor: pointer;
border: none;
font-size: 15px;
border-radius: 15px;
margin-top: 20px;
color: ${props => props.theme.colors.first};
background: ${props => props.theme.colors.third};
`