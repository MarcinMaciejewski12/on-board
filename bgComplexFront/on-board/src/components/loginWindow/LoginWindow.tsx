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
import { useQuery } from "react-query";

const LoginWindow = () => {
  const { isLoading, isError, data, error } = useQuery("myData", () => {
    fetch("/api/games").then((res) => res.json());
  });

  if (isLoading) console.log("loading..");

  if (isError) console.log("there is error");

  if (data) console.log(data);

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
              <span>Wróć</span>
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
