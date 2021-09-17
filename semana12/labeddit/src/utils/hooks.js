import { useLayoutEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";

export const useForm = (initialState) => {
  const [fields, setFields] = useState(initialState);

  const handleInputChange = ({ target }) => {
    const { value, name } = target;
    setFields({ ...fields, [name]: value });
  };

  const clear = () => {
    setFields(initialState);
  };

  return [fields, handleInputChange, clear];
};

export const useProtectedPage = () => {
  const [isLogged, setIsLogged] = useState(false);
  const history = useHistory();

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setIsLogged(false);

    history.push("/");
  }, [history]);

  useLayoutEffect(() => {
    if (isLogged) return;

    const token = localStorage.getItem("token");

    try {
      const jwt = jwtDecode(token);
      const isTokenExpired = Date.now() >= jwt.exp * 1000;

      if (isTokenExpired) throw new Error("Token expired");

      setIsLogged(true);
    } catch (e) {
      logout();
    }
  }, [isLogged, logout]);

  return { isLogged, logout };
};

export const useUnprotectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/feed");
    }
  }, [history]);
};
