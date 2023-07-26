import { ArrowForward, ArrowBack } from "../theme/blobs/blob";
import {
  CarouselContainer,
  ForwardArrowContainer,
  BackArrowContainer,
  ArrowContainer,
} from "../../pages/landingPage/recomendationCarousel/RecommendationCarouselStyle";
import { useState } from "react";
import { persons } from "../constant/Constant";
import PersonCarousel from "./personCarousel/PersonCarousel";

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
          <ArrowContainer onClick={prevSlide}>
            <ArrowForward />
          </ArrowContainer>
        </ForwardArrowContainer>
        <PersonCarousel slideIndex={personIndex} />
        <BackArrowContainer>
          <ArrowContainer onClick={nextSlide}>
            <ArrowBack />
          </ArrowContainer>
        </BackArrowContainer>
      </CarouselContainer>
    </>
  );
};

export default PersonsCard;
