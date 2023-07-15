import { ArrowForward, ArrowBack } from "../../theme/blobs/blob";
import {
  CarouselContainer,
  ForwardArrowContainer,
  BackArrowContainer,
} from "../recomendationCarousel/RecommendationCarouselStyle";
import {
  Card,
  MainContainer,
  Description,
  Header,
  StarContainer,
} from "./PersonsCardStyle";
import { Star } from "../../theme/blobs/blob";
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
          let starContainer = [];
          for (let star = 0; person.star > star; star++) {
            starContainer.push(Star());
          }
          return (
            <Card key={index}>
              {personIndex === index && (
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
