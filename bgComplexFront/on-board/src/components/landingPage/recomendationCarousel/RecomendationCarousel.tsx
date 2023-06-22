import PersonsCard from "../personsCard/PersonsCard";
import {
  RecommendationSection,
  RecommendationContainer,
  Header,
  CarouselContainer,
} from "./RecommendationCarouselStyle";

const RecommendationCarousel = () => {
  return (
    <RecommendationSection>
      <RecommendationContainer>
        <Header>
          <h1>Co myślą o nas inni?</h1>
        </Header>
        <CarouselContainer>
          <PersonsCard />
        </CarouselContainer>
      </RecommendationContainer>
    </RecommendationSection>
  );
};

export default RecommendationCarousel;
