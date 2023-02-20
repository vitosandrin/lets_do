import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isAuth } from "../redux/auth/authSlice";
import { FC } from "react";

interface IPrivateRouteProps {
  children: React.ReactElement;
}

export const PrivateRoute: FC<IPrivateRouteProps> = ({ children }) => {
  const auth = useSelector(isAuth);

  return auth ? <>{children}</> : <Navigate to={"/login"} />;
};
