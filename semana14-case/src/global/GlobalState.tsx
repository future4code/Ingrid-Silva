import { useState, useCallback } from "react";
import axios from "axios";
import GlobalContext from "./GlobalContext";
import { ICard, IData } from "../config/interfaces";

const GlobalState: React.FC = ({ children }) => {
  const [data, setData] = useState<IData | undefined>();

  const getData = useCallback(async () => {
    try {
      const { data } = await axios.get("/assets/tarot.json");
      setData(data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const state = { data };
  const setters = {};
  const requests = { getData };

  return (
    <GlobalContext.Provider value={{ state, setters, requests }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
