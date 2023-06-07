import {
  Dispatch,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { AuthState, Action, ProviderChildren } from "./contextTypes";
import { authReducer } from "./reducer";
import { login } from "./utils";

const initialState: AuthState = {
  user: null,
  token: "",
  errorMessage: "",
};

const AuthContext = createContext<
  | {
      state: AuthState;
      dispatch: Dispatch<Action>;
    }
  | undefined
>(undefined);

function AuthProvider({ children }: ProviderChildren) {
  /**
   * Checks if a user had already logged in.
   * Useful when the user reloads the page
   */
  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("authToken");

    if (user && token) {
      dispatch({
        type: "LOGIN",
        payload: { user, token },
      });
    }
  }, []);

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth, login };
