import { Dispatch } from "react";
import { authenticateUser } from "../utils/fakeusers";
import { Action } from "./contextTypes";

export async function login(
  dispatch: Dispatch<Action>,
  email: string,
  password: string
) {
  try {
    const { user, token } = await authenticateUser(email, password);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("authToken", JSON.stringify(token));

    dispatch({
      type: "LOGIN",
      payload: { user, token },
    });
  } catch (error: any) {
    dispatch({
      type: "LOGINFAILED",
      payload: { errorMessage: error?.message },
    });
  }
}

export async function logout(dispatch: Dispatch<Action>) {
  localStorage.removeItem("user");
  localStorage.removeItem("authToken");

  dispatch({
    type: "LOGOUT",
    payload: { user: null, token: "", errorMessage: "" },
  });
}
