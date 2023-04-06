import { useContext, useMemo } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);

  const { pathname, search } = useLocation();
  const lastPath = pathname + search;

  useMemo(() => {
    localStorage.setItem("lastPath", lastPath);
  }, [pathname, search]);

  return logged ? children : <Navigate to="/login" />;
};
