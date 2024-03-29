import { LoginButtons } from "./ButtonStyles";

export const LoginButton = (props: any) => {
  return (
    <LoginButtons onClick={props.onClick} whileHover={{ scale: 1.1 }}>
      {props.children}
    </LoginButtons>
  );
};

export default LoginButton;
