import { ArrowForward, ArrowBack } from "../../theme/blobs/blob";
import {
  CarouselContainer,
  ForwardArrowContainer,
  BackArrowContainer,
} from "../recomendationCarousel/RecommendationCarouselStyle";
import { Card, Container, Description, Header } from "./PersonsCardStyle";
import { useState } from "react";
import { persons } from "../../theme/data/data";

const PersonsCard = () => {
  const [personIndex, setPersonIndex] = useState<number>(0);

  const prevSlide = () => {
    personIndex === 0
      ? setPersonIndex(persons.length - 1)
      : setPersonIndex(personIndex - 1);
  };

  const nextSlide = () => {
    persons.length > personIndex + 1
      ? setPersonIndex(personIndex + 1)
      : setPersonIndex(0);
  };

  return (
    <>
      <CarouselContainer>
        <ForwardArrowContainer>
          <div onClick={prevSlide} style={{ cursor: "pointer" }}>
            <ArrowForward />
          </div>
        </ForwardArrowContainer>
        {persons.map((person, index) => {
          return (
            <Card key={index}>
              {personIndex === index && (
                <Container key={index}>
                  <Header>{person.name}</Header>
                  <Description>
                    <p>{person.description}</p>
                  </Description>
                </Container>
              )}
            </Card>
          );
        })}
        <BackArrowContainer>
          <div onClick={nextSlide} style={{ cursor: "pointer" }}>
            <ArrowBack />
          </div>
        </BackArrowContainer>
      </CarouselContainer>
    </>
  );
};

export default PersonsCard;
