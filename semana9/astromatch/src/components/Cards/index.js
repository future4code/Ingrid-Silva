import React, { useEffect, useState } from "react";
import axios from "axios";

import { Like, Dislike, Button, Container, BoxBtn } from "./styles";
import CardProfile from "../CardProfile";

function Cards() {
  const [profile, setProfile] = useState({});

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
        getProfile();
        // const isMatch = response.data.isMatch;
      });
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
        <p>Acabou-se</p>
      )}
    </Container>
  );
}

export default Cards;
