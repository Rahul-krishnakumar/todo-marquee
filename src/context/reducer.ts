import { Action, AuthState } from "./contextTypes";

export function authReducer(state: AuthState, action: Action) {
  switch (action.type) {
    case "LOGIN": {
      return { ...state, ...action.payload, errorMessage: "" };
    }

    case "LOGOUT": {
      return { ...state, ...action.payload };
    }

    case "LOGINFAILED": {
      return { ...state, errorMessage: action.payload.errorMessage };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
