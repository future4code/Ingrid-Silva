import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Image, Name, Title, ContentBox, Box } from "./styles";
import { IconeTinder } from "../Home/styles";
import Header from "../Header";

function Matches(props) {
  const [matches, setMatches] = useState([]);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ingrid/matches"
      )
      .then((res) => {
        setMatches(res.data.matches);
      });
  };

  useEffect(() => {
    getMatches();
  }, []);

  const renderMatches = () => {
    console.log(matches);

    return matches.map((match) => {
      return (
        <ContentBox key={match.id}>
          <Image src={match.photo} alt={match.name} />
          <Name>{match.name}</Name>
        </ContentBox>
      );
    });
  };

  return (
    <Container>
      <Header changePage={props.changePage} />
      <Title>Matches</Title>
      <Box>{renderMatches()}</Box>
    </Container>
  );
}

export default Matches;
