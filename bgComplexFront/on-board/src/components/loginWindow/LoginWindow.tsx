import { SetStateAction, useState } from "react";
import {
  LoginContainer,
  LoginModal,
  LoginFormChildren,
  LoginForm,
  GoBack,
  InputBlock,
  ButtonContainer,
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

  const mutation = useMutation((credentials: any) =>
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
            <form>
              <LoginFormChildren>
                <InputBlock>
                  <label>Login</label>
                  <input
                    type="text"
                    value={loginValue}
                    onChange={loginHandler}
                  />
                  <label>Hasło</label>
                  <input
                    type="password"
                    value={passwordValue}
                    onChange={passwordHandler}
                  />
                </InputBlock>
              </LoginFormChildren>
              <LoginFormChildren style={{ flex: 0 }}>
                <ButtonContainer>
                  <SubmitButton onClick={loginButtonHandler}>
                    Zaloguj się
                  </SubmitButton>
                </ButtonContainer>
              </LoginFormChildren>
            </form>
          </LoginForm>
        </LoginModal>
      </LoginContainer>
    </>
  );
};

export default LoginWindow;
