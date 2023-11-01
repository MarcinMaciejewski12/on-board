import { GameCollectionContainer, ListContainer } from "./ListStyle";

const List = (props: any) => {
  return (
    <GameCollectionContainer>
      <ListContainer>
        <div>{props.children}</div>
      </ListContainer>
    </GameCollectionContainer>
  );
};

export default List;
