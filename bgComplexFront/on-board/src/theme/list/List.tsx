import { ReactNode } from "react";
import { GameCollectionContainer, ListContainer } from "./ListStyle";

interface ListProps {
  children: ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  return (
    <div>
      <GameCollectionContainer>
        <ListContainer>
          <div>{children}</div>
        </ListContainer>
      </GameCollectionContainer>
    </div>
  );
};

export default List;
