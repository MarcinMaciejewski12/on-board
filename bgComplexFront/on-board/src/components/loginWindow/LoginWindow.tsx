import {
  LoginContainer,
  LoginModal,
  LoginFormChildren,
  LoginForm,
  GoBack,
  InputBlock,
  ButtonContainer,
} from "./LoginWindowStyle";
import { SubmitButton } from "../themeStyle/MainTheme";
import { Link } from "react-router-dom"
const LoginWindow = () => {

  return (
    <>
      <LoginContainer>
        <LoginModal
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <LoginForm>
            <GoBack>
              <Link to="/">
              <span>Wyjdź</span>
              
              </Link>
            </GoBack>

            <LoginFormChildren>
              <InputBlock>
                <label>Login</label>
                <input />
                <label>Hasło</label>
                <input />
              </InputBlock>
            </LoginFormChildren>
            <LoginFormChildren style={{ flex: 0 }}>
              <ButtonContainer>
                <SubmitButton>Zaloguj się</SubmitButton>
              </ButtonContainer>
            </LoginFormChildren>
          </LoginForm>
        </LoginModal>
      </LoginContainer>
    </>
  );
};

export default LoginWindow;
