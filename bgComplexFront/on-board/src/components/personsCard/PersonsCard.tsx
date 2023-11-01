import { useState } from "react";
import { persons } from "../../constant/Constant";
import {
  ArrowContainer,
  BackArrowContainer,
  CarouselContainer,
  ForwardArrowContainer,
} from "../../pages/landingPage/recomendationCarousel/RecommendationCarouselStyle";
import { ArrowBack, ArrowForward } from "../../theme/blobs/blob";
import PersonCarousel from "./personCarousel/PersonCarousel";

const PersonsCard = () => {
  const [personIndex, setPersonIndex] = useState(0);

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
