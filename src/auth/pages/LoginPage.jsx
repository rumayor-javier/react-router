import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    login("Hello user =)");
    navigate(lastPath);
  };

  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => {
          onLogin();
        }}
      >
        Login
      </button>
    </>
  );
};
