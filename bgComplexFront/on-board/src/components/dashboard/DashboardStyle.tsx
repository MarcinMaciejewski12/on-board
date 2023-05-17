import styled from "styled-components";



export const DashboardViewContainer = styled.div`
    height: 100vh;
    width: 100%;
`
export const DashboardView = styled.div`
    height: 100%;
    width: 100%;
    background: ${props=> props.theme.colors.second};

    & h1 {
        padding: 1rem 3rem;
        font-weight: 200;
    }
`;

export const GameCollectionContainer = styled.div`
    width: 50vw;
    height: 80vh;
    margin-left: 3rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    display: flex; 
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.first};
`;

export const ListContainer = styled.div`
width: 45vw;
height: 75vh;
overflow: hidden;
display: flex;
justify-content: center;
background: red;
`;

export const GamesValuesContainer = styled.div`
    width: 40vw;
    height: 10vh;
    padding: 1rem;
    background: blue;
`