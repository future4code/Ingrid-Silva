import React, { useEffect, useState } from "react";
import axios from "axios";

import { Like, Dislike, Button, Container, BoxBtn } from "./styles";
import CardProfile from "../CardProfile";
import ItsAMatch from "../ItsAMatch";
import Header from "../Header";

function Cards(props) {
  const [profile, setProfile] = useState({});
  const [hasMatch, setHasMatch] = useState(false);

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ingrid/person"
      )
      .then((response) => {
        setProfile(response.data.profile);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  const choosePerson = (choice) => {
    const body = {
      id: profile.id,
      choice: choice,
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ingrid/choose-person",
        body
      )
      .then((response) => {
        const isMatch = response.data.isMatch;

        if (isMatch) {
          setHasMatch(true);
        } else {
          getProfile();
        }
      });
  };

  const resetMatch = () => {
    setHasMatch(false);
    getProfile();
  };

  const likePerson = () => {
    choosePerson(true);
  };

  const dislikePerson = () => {
    choosePerson(false);
  };

  return (
    <Container>
      {profile ? (
        <>
          <Header changePage={props.changePage} />

          <CardProfile profile={profile} />
          <BoxBtn>
            <Button onClick={likePerson}>
              <Like />
            </Button>
            <Button onClick={dislikePerson}>
              <Dislike />
            </Button>
          </BoxBtn>
        </>
      ) : (
        <p>As opções de perfis esgotaram :(</p>
      )}

      {hasMatch && (
        <ItsAMatch
          profile={profile}
          resetMatch={resetMatch}
          changePage={props.changePage}
        />
      )}
    </Container>
  );
}

export default Cards;
