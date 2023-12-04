import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { SetStateAction, useContext, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { SubmitButton } from "../../theme/MainTheme";
import {
  ButtonContainer,
  InputBlock,
  LoginContainer,
  LoginForm,
  LoginIntroductionContainer,
  LoginModal,
} from "./LoginWindowStyle";
const LoginWindow = () => {
  const navigate = useNavigate();

  const [loginValue, setLogin] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [err, setErr] = useState<boolean>();
  const { dispatch, loading } = useContext(AuthContext);

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

      // Decode the token
      const decodedToken = jwtDecode(res.jwt) as any;
      localStorage.setItem("token", res.jwt);
      dispatch({ type: "LOGIN_START" });
      if (!res.error) {
        dispatch({ type: "LOGIN_SUCCESS", payload: decodedToken.id });
        navigate("/dashboard");
      } else {
        console.log(`There is little error: ${decodedToken.error}`);
      }
    } catch (error) {
      setErr(true);
      setLogin("");
      setPassword("");
      dispatch({ type: "LOGIN_FAILURE", payload: error });
      return error;
    }
  };

  return (
    <>
      <LoginContainer>
        <LoginModal
          // TODO: refactor
          initial={{ y: 1000, opacity: 1 }}
          animate={{ y: 0 }}
          transition={{ when: "beforeChildren", duration: 0.8 }}
        >
          <LoginForm>
            <InputBlock
              // TODO: refactor
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                duration: 1.5,
                delay: 0.5,
                stiffness: 80,
              }}
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
              {err && <p style={{ color: "red" }}>Zły login lub hasło</p>}
            </InputBlock>
            <ButtonContainer
              // TODO: refactor
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <SubmitButton
                whileHover={{ scale: 1.1 }}
                onClick={loginButtonHandler}
                disabled={loading}
              >
                Zaloguj się
              </SubmitButton>
            </ButtonContainer>
          </LoginForm>
        </LoginModal>
        <LoginIntroductionContainer>
          <h1>Wejdź do świata gier!</h1>
        </LoginIntroductionContainer>
      </LoginContainer>
    </>
  );
};

export default LoginWindow;
