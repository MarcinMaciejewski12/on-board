import { persons } from "../../../constant/Constant";
import { Star } from "../../../theme/blobs/blob";
import {
  Card,
  Description,
  Header,
  MainContainer,
  StarContainer,
} from "../PersonsCardStyle";

interface Props {
  slideIndex: number;
}

const PersonCarousel = ({ slideIndex }: Props) => {
  return (
    <>
      {persons.map(({ star, name, description }, index) => {
        let starContainer = [];
        for (let starValue = 0; star > starValue; starValue++) {
          starContainer.push(Star());
        }
        return (
          <Card key={index}>
            {slideIndex === index && (
              <MainContainer>
                <Header>{name}</Header>
                <Description>
                  <p>{description}</p>
                </Description>
                <StarContainer>{starContainer}</StarContainer>
              </MainContainer>
            )}
          </Card>
        );
      })}
    </>
  );
};

export default PersonCarousel;
