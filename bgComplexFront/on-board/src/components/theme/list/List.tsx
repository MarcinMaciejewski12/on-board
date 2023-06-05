import { GameCollectionContainer, ListContainer } from "./ListStyle";

const List = (props: any) => {
  return (
    <GameCollectionContainer>
      <ListContainer>{props.children}</ListContainer>
    </GameCollectionContainer>
  );
};

export default List;
