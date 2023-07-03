import { useState } from "react";
import PersonsCard from "../personsCard/PersonsCard";
import {
  RecommendationSection,
  RecommendationContainer,
  Header,
  CarouselContainer,
  ForwardArrowContainer,
  BackArrowContainer,
} from "./RecommendationCarouselStyle";
import { ArrowBack, ArrowForward } from "../../theme/blobs/blob";
import { Container } from "../personsCard/PersonsCardStyle";
import { motion } from "framer-motion";

const RecommendationCarousel = () => {
  const [personIndex, setPersonIndex] = useState<number>(0);

  const persons = [
    {
      id: 1,
      name: "Wojtek",
      description: "“Pomocy jestem przetrzymywany w serwerowni”",
      star: 5,
    },
    {
      id: 2,
      name: "Michał",
      description: "siemano",
      star: 5,
    },

    {
      id: 3,
      name: "Andrzej",
      description: "elo elo",
      star: 5,
    },
  ];

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
    <RecommendationSection>
      <RecommendationContainer>
        <Header>
          <h1>Co myślą o nas inni?</h1>
        </Header>
        <CarouselContainer>
          <ForwardArrowContainer>
            <div onClick={prevSlide} style={{ cursor: "pointer" }}>
              <ArrowForward />
            </div>
          </ForwardArrowContainer>
          {persons.map((person, index) => {
            return (
              <motion.div
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                }}
              >
                {personIndex === index && (
                  <Container key={index}>
                    <Header>{person.name}</Header>
                    <p>{person.description}</p>
                  </Container>
                )}
              </motion.div>
            );
          })}
          <BackArrowContainer>
            <div onClick={nextSlide} style={{ cursor: "pointer" }}>
              <ArrowBack />
            </div>
          </BackArrowContainer>
        </CarouselContainer>
      </RecommendationContainer>
    </RecommendationSection>
  );
};

export default RecommendationCarousel;
