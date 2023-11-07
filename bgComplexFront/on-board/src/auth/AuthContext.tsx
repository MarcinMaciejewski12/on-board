import { ReactNode, createContext, useEffect, useReducer } from "react";
interface State {
  user: null;
  loading: boolean;
  error: null | string;
}

interface Action {
  type: string;
  payload?: any;
}

const storedData = localStorage.getItem("token");

const INITIAL_STATE = {
  user: storedData ? JSON.parse(storedData) : null,
  loading: false,
  error: null,
  dispatch: (event: Action) => {},
};

export const AuthContext = createContext(INITIAL_STATE);

const authReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      localStorage.setItem("user", null ?? "");
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", state.user);
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
