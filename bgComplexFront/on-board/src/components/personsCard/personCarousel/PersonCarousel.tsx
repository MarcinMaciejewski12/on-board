import { Star } from "../../theme/blobs/blob";
import { persons } from "../../constant/Constant";
import {
  Card,
  MainContainer,
  Description,
  Header,
  StarContainer,
} from "../PersonsCardStyle";

const PersonCarousel: React.FC<{ slideIndex: number }> = ({ slideIndex }) => {
  return (
    <>
      {persons.map((person, index) => {
        let starContainer = [];
        for (let star = 0; person.star > star; star++) {
          starContainer.push(Star());
        }
        return (
          <Card key={index}>
            {slideIndex === index && (
              <MainContainer key={index}>
                <Header>{person.name}</Header>
                <Description>
                  <p>{person.description}</p>
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
