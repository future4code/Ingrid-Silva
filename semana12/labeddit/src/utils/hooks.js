import { useLayoutEffect, useState } from "react";
import { useHistory } from "react-router-dom";

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

  useLayoutEffect(() => {
    if (isLogged) return;

    const token = localStorage.getItem("token");

    if (token === null) {
      history.push("/");
    } else {
      setIsLogged(true);
    }
  }, [history, isLogged]);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
  };

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
