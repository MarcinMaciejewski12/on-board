import styled from "styled-components";

export const PlayedGamesWindow = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const WindowSheet = styled.section`
  /* margin-top: ${(props) => props.theme.margin.marginTop}; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ScoreboardSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GameName = styled.span`
  width: 100%;
  height: 8vh;
  color: white;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;
  font-size: 50px;
`;
