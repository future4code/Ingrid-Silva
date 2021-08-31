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
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      history.push("/");
    }
  }, [history]);
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
