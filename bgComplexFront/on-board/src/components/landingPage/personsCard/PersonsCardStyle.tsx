import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
    width: 20vw;
    height: 45vh;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

export const Header = styled.div`
    width: 20vw;
    height: 8vh;
    display: flex;
    align-items: center;
    font-size: 25px;
    font-weight: 600;
    justify-content: center;
    padding: 3rem;
    margin-bottom: 5rem;
`

export const Description = styled.div`
    height: 10vh;
    width: 100%;
    display: flex;
    padding: 3rem;
    align-items: center;
    justify-content: center;
    & p {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        text-align: center;
    }
`

export const Card = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
`