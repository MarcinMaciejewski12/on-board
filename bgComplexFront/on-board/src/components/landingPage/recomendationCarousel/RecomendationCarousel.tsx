import {
  RecommendationSection,
  RecommendationContainer,
  Header,
} from "./RecommendationCarouselStyle";
import PersonsCard from "../personsCard/PersonsCard";

const RecommendationCarousel = () => {
  




  return (
    <RecommendationSection>
      <RecommendationContainer>
      <Header>
          <h1>Co myślą o nas inni?</h1>
        </Header>
        <PersonsCard />
      </RecommendationContainer>
    </RecommendationSection>
  );
};

export default RecommendationCarousel;
