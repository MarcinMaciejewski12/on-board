import { HomePage } from "./HomeWindowStyle";
import {
  LogoContainer,
  IntroBlobContainer,
  IntroContainer,
} from "./HomeWindowStyle";
import { LogoBlob, IntroBlob } from "../theme/blobs/blob";
import { SingUpButton } from "../theme/buttons/ButtonStyles";
import { motion } from "framer-motion";
const HomeWindow = () => {

  return (
    <HomePage>
   
      <LogoContainer>
        <LogoBlob />
        <motion.div>
          <motion.span>
            Board Game
            <motion.h1>Compare</motion.h1>
          </motion.span>
        </motion.div>
      </LogoContainer>
      <IntroContainer>
        <IntroBlobContainer>
          <IntroBlob />
          <div>
            <span>
              Kochasz planszówki tak samo jak my? Chciałbyś się zmierzyć z
              swoimi znajomymi? <span>Zarejestruj sie</span> już teraz i śledź
              zmagania swoje i przyjaciół w aplikacji!
              <br/>
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
