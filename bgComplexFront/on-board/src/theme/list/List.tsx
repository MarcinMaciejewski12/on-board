import { ReactNode } from "react";
import {
  GameCollectionContainer,
  ListContainer,
  ListWrapper,
} from "./ListStyle";

interface ListProps {
  children: ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  return (
    <div>
      <GameCollectionContainer>
        <ListContainer>
          <ListWrapper>{children}</ListWrapper>
        </ListContainer>
      </GameCollectionContainer>
    </div>
  );
};

export default List;
