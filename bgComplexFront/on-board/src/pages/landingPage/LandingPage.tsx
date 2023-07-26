import { SingUpButton } from "../../components/buttons/ButtonStyles";
import {
  ButtonContainer,
  DescriptionContainer,
  LandingPageContainer,
  LogoAndDescriptionContainer,
  LogoContainer,
  MainDescription,
  MainDescriptionBackground,
  SecondDescriptionBackground,
  EncouragingLeaves,
  LeavesContainer,
  LeftLeaves,
  RightLeaves,
  DiceSection,
  ButtonDisplay,
  DiceContainer,
  RightLeavesContainer,
} from "./LandingPageStyle";
import RecommendationCarousel from "./recomendationCarousel/RecomendationCarousel";
import { Dice } from "../../components/theme/blobs/blob";
import Footer from "./footer/Footer";
import { motion } from "framer-motion";

const LadningPage = () => {
  return (
    <LandingPageContainer>
      <MainDescriptionBackground>
        <LogoAndDescriptionContainer>
          <LogoContainer>
            <h1>
              BOARD GAME <motion.span>COMPARE</motion.span>
            </h1>
          </LogoContainer>
          <DescriptionContainer>
            <MainDescription>
              BoardGame Compare to miejsce, gdzie pasjonaci gier planszowych
              mogą znaleźć swoje idealne towarzystwo. Niezależnie od tego, czy
              preferujesz szybkie partyjki czy długie strategiczne rozgrywki,
              BoardGame Compare zapewnia Ci narzędzia do znalezienia idealnych
              partnerów do gry. Dołącz już teraz i ciesz się pełną ekscytacji
              atmosferą planszówek w towarzystwie swoich znajomych!
            </MainDescription>
          </DescriptionContainer>
          <ButtonContainer>
            <ButtonDisplay>
              <SingUpButton>Zarejestruj się!</SingUpButton>
              <SingUpButton style={{ background: "#FCF300" }}>
                Pobierz aplikacje
              </SingUpButton>
            </ButtonDisplay>
          </ButtonContainer>
        </LogoAndDescriptionContainer>
      </MainDescriptionBackground>
      <DiceSection>
        <SecondDescriptionBackground>
          <DiceContainer>
            <Dice />
          </DiceContainer>
          <div>
            <LogoContainer>
              <h1>KOŚCI ZOSTAŁY RZUCONE</h1>
            </LogoContainer>
            <DescriptionContainer>
              <MainDescription>
                ...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </MainDescription>
            </DescriptionContainer>
          </div>
        </SecondDescriptionBackground>
      </DiceSection>
      <EncouragingLeaves>
        <LeavesContainer>
          <LeftLeaves
            initial={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            STATYSTYKI ROZGRYWEK
          </LeftLeaves>
        </LeavesContainer>
        <RightLeavesContainer>
          <RightLeaves
            initial={{ x: 100, opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5, type: "spring" }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            LISTA ULUBIONYCH GIER
          </RightLeaves>
        </RightLeavesContainer>
        <LeavesContainer>
          <LeftLeaves
            initial={{ x: "-100%", opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5, type: "spring" }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            KALENDARIUM WYDARZEŃ
          </LeftLeaves>
        </LeavesContainer>
        <RightLeavesContainer>
          <RightLeaves
            initial={{ x: "100%", opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5, type: "spring" }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            TWOJA GRUPA ZNAJOMYCH
          </RightLeaves>
        </RightLeavesContainer>
      </EncouragingLeaves>
      <RecommendationCarousel />
      <Footer />
    </LandingPageContainer>
  );
};

export default LadningPage;
