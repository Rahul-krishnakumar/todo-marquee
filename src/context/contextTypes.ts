import User from "../interfaces/User";

export type ProviderChildren = {
  children: React.ReactNode;
};

export type AuthState = {
  user: User | null;
  token: string;
  errorMessage: string;
};

export type Action = {
  type: "LOGIN" | "LOGOUT" | "LOGINFAILED";
  payload: any;
};
