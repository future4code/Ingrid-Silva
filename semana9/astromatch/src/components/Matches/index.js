import React, { useEffect, useState } from "react";
import axios from "axios";

function Matches() {
  const [matches, setMatches] = useState([]);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ingrid/matches"
      )
      .then((res) => {
        setMatches([...matches, ...res.data.matches]);
      });
  };

  useEffect(() => {
    getMatches();
  }, []);

  const renderMatches = () => {
    return matches.map((match) => {
      <p>{match.name}</p>;
    });
  };

  return (
    <div>
      <h1>Matches</h1>
      {renderMatches()}
    </div>
  );
}

export default Matches;
