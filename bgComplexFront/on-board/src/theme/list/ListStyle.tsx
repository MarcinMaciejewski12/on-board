import styled from "styled-components";

export const GameCollectionContainer = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListContainer = styled.div`
  width: 45vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ListWrapper = styled.div`
  width: 100%;
  max-height: 60vh;
  overflow: auto;
  padding-top: 10px;
`;

export const GamesValuesContainer = styled.div`
  width: 43vw;
  height: 130px;
  border: 0.5px solid white;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  width: 100%;
`;

export const GameName = styled.div`
  width: 100%;
  height: 5vh;
  /* margin-left: 10px; */
  color: ${(props) => props.theme.colors.quatenary};
  font-size: 27px;
  letter-spacing: 1px;
`;

export const AddGameButton = styled.button`
  height: 5vh;
  width: 200px;
  margin-right: 10px;
  cursor: pointer;
  background: none;
  font-size: 16px;
  border: none;
  color: ${(props) => props.theme.colors.teriary};
`;

export const AdditionalGameInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  margin-left: 10px;
  width: 100%;
  opacity: 0.6;
  color: ${(props) => props.theme.colors.teriary};
`;
