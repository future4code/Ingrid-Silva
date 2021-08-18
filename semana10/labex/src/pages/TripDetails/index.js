import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

export const useProtectedPage = () => {
  const [isLogged, setIsLogged] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (isLogged) return;

    const token = localStorage.getItem("token");

    if (token === null) {
      history.push("/login");
    } else {
      setIsLogged(true);
    }
  }, [history, isLogged]);

  return { isLogged };
};

export default function TripDetails(props) {
  const { id } = useParams();

  useProtectedPage();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/ingrid/trip/${id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        console.log("deu certo", response.data);
      })
      .catch((error) => {
        console.log("deu erro", error.response);
      });
  });
  return <div>TripDetails</div>;
}
