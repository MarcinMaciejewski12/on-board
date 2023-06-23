import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
    width: 20vw;
    height: 45vh;
    background-color: white;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

export const CarouselContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    background: orange;
`

export const Header = styled.div`
    width: 20vw;
    height: 12vh;

    display: flex;
    align-items: center;
    justify-content: center;

`