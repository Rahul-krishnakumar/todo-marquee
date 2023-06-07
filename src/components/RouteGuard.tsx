import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

type RouteGuardProps = {
  children: JSX.Element;
};

export default function RouteGuard({ children }: RouteGuardProps) {
  const { state } = useAuth();
  const { token } = state;

  return token ? children : <Navigate to="/login" replace />;
}
