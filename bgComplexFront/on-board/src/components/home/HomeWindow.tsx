import { HomePage } from "./HomeWindowStyle";
import {
  LogoContainer,
  IntroBlobContainer,
  IntroContainer,
} from "./HomeWindowStyle";
import { LogoBlob, IntroBlob } from "../themeStyle/blobs/blob";
import { SingUpButton } from "../themeStyle/buttons/ButtonStyles";
import { motion } from "framer-motion";
import useFetch from "../../hooks/fetchData";

const HomeWindow = () => {

  const { data, loading, error, } = useFetch("/games")
console.log(data);

  return (
    <HomePage>
      <LogoContainer>
        <LogoBlob />
        <motion.div>
          <motion.span>
            Board Game
            <motion.h1>Complex</motion.h1>
          </motion.span>
        </motion.div>
      </LogoContainer>
      <IntroContainer>
        <IntroBlobContainer>
          <IntroBlob />
          <div>
            <span>
              kochasz planszówki tak samo jak my? Chciałbyś się zmierzyć z
              swoimi znajmomymi? <span>Zarejestruj sie</span> już teraz i śledź
              zmagania swoje i przyjaciół w aplikacji!
            </span>
            <SingUpButton whileHover={{ scale: 1.1 }}>
              Zarejestruj sie!
            </SingUpButton>
          </div>
        </IntroBlobContainer>
      </IntroContainer>
    </HomePage>
  );
};

export default HomeWindow;
