import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

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

export const PlayersScoreboard = styled.td`
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

export const TotalPointContainer = styled.div`
  display: flex;
`;

export const TotalScore = styled.td`
  width: 10vw;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid black;
  border-top: 2px solid black;
  background: white;
  padding: 0.3rem;
`;
export const ScoreboardTable = styled.table`
  display: flex;
`;

export const TotalPoints = styled.div`
  width: 10vw;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid black;
  border-top: 2px solid black;

  border-right: 2px solid black;
  background: white;
  padding: 0.3rem;
`;

export const TotalPointsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
