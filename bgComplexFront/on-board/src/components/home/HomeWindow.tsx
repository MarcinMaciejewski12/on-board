import { HomePage } from "./HomeWindowStyle";
import {
  LogoContainer,
  IntroBlobContainer,
  IntroContainer,
} from "./HomeWindowStyle";
import { LogoBlob, IntroBlob } from "../themeStyle/blobs/blob";
import { motion } from "framer-motion";

const HomeWindow = () => {
  return (
    <HomePage>
      <LogoContainer
        initial={{y:-200, opacity: 0, scale: 0 }}
        animate={{y:0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <LogoBlob />
        <motion.div>
          <motion.span
            initial={{ x: 10 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.2 }}
          >
            Board Game
            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              Complex
            </motion.h1>
          </motion.span>
        </motion.div>
      </LogoContainer>
      <IntroContainer>
        <IntroBlobContainer>
          <IntroBlob />
          <div>
            <span>
              kochasz planszówki tak samo jak my? Chciałbyś się zmierzyć z
              swoimi znajmomymi? <span>Zarejestruj sie</span> już teraz i śledź zmagania
              swoje i przyjaciół w aplikacji!
            </span>
          </div>
        </IntroBlobContainer>
      </IntroContainer>
    </HomePage>
  );
};

export default HomeWindow;
