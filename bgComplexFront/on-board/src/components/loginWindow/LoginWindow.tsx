import { SetStateAction, useState } from "react";
import {
  LoginContainer,
  LoginModal,
  LoginForm,
  GoBack,
  InputBlock,
  ButtonContainer,
  LoginIntroductionContainer,
} from "./LoginWindowStyle";
import { SubmitButton } from "../theme/MainTheme";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useMutation } from "react-query";

const LoginWindow = () => {
  const navigate = useNavigate();

  const [loginValue, setLogin] = useState("");
  const [passwordValue, setPassword] = useState("");

  const loginHandler = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setLogin(event.target.value);
  };
  const passwordHandler = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
  };

  const mutation = useMutation((credentials: Object) =>
    axios.post("/auth/login", credentials).then((res) => res.data)
  );

  const loginButtonHandler = async (event: any) => {
    event.preventDefault();

    try {
      const res = await mutation.mutateAsync({
        username: loginValue,
        password: passwordValue,
      });

      if (!res.error) {
        navigate("/dashboard");
      } else {
        console.log(`There is little error: ${res.error}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LoginContainer>
        <LoginModal
          initial={{ y: 1000, opacity: 1 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.6 }}
        >
          <LoginForm>
            <InputBlock
              initial={{ x: -100, opacity: 0, scale: 0.4 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.6 }}
            >
              <label>Login</label>
              <input
                placeholder="login"
                type="text"
                value={loginValue}
                onChange={loginHandler}
              />
              <label>Hasło</label>
              <input
                type="password"
                placeholder="password"
                value={passwordValue}
                onChange={passwordHandler}
              />
            </InputBlock>
            <ButtonContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <SubmitButton onClick={loginButtonHandler}>
                Zaloguj się
              </SubmitButton>
            </ButtonContainer>
          </LoginForm>
        </LoginModal>
        <LoginIntroductionContainer>
          <h1>Wejdź od świata gier!</h1>
        </LoginIntroductionContainer>
      </LoginContainer>
    </>
  );
};

export default LoginWindow;
