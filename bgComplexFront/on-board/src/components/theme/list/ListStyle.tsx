import styled from "styled-components";

export const GameCollectionContainer = styled.div`
  width: 50vw;
  height: 60vh;
  margin-left: 3rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
`;

export const ListContainer = styled.div`
  width: 45vw;
  height: 55vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
`;

export const GamesValuesContainer = styled.div`
  width: 45vw;
  max-width: 44vw;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

export const GameName = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1rem;
`;
