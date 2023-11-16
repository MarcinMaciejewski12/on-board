import styled from "styled-components";

export const PlayersInput = styled.input`
  width: 10vw;
  height: 5vh;
  border: 0.5px solid black;
  background: white;
  border-bottom: 2px solid black;
  padding: 0.3rem;
  &::placeholder {
    text-align: center;
  }
`;

export const PlayersScoreboard = styled.div`
  width: 10vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid black;
  border-right: 2px solid black;
  background: white;
  padding: 0.3rem;
`;

export const PlayerSlashActions = styled.div`
  width: 10vw;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid black;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  background: white;
  padding: 0.3rem;
`;
export const ScoreInput = styled.input`
  width: 10vw;
  height: 10vh;
  border: 0.5px solid black;
  background: white;
  padding: 0.3rem;
  &::placeholder {
    text-align: center;
  }
`;
