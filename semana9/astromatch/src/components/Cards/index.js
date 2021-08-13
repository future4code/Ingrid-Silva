import React, { useEffect, useState } from "react";
import axios from "axios";
import { animate, useMotionValue, useTransform } from "framer-motion";
import {
  Like,
  Dislike,
  Button,
  Container,
  BoxBtn,
  ContainerSemOpcoes,
} from "./styles";
import CardProfile from "../CardProfile";
import ItsAMatch from "../ItsAMatch";
import Header from "../Header";

function Cards(props) {
  const [profile, setProfile] = useState({});
  const [hasMatch, setHasMatch] = useState(false);

  const x = useMotionValue(0);
  const opacity = useMotionValue(1);
  const rotate = useTransform(x, [-100, 0, 100], [-10, 0, 10]);

  useEffect(() => {
    if (profile?.id) {
      animate(opacity, 1);
      animate(x, 0, { duration: 0 });
    }
  }, [profile?.id]);

  const getProfile = () => {
    animate(opacity, 0);

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
    animate(x, 150, { stiffness: 200 });
  };

  const dislikePerson = () => {
    choosePerson(false);
    animate(x, -150, { stiffness: 200 });
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -50) {
      dislikePerson();
    } else if (info.offset.x > 50) {
      likePerson();
    } else {
      animate(x, 0, { stiffness: 200 });
    }
  };

  return (
    <Container>
      {profile ? (
        <>
          <Header changePage={props.changePage} />

          <CardProfile
            profile={profile}
            likePerson={likePerson}
            dislikePerson={dislikePerson}
            onDragEnd={handleDragEnd}
            dragStyle={{ x, rotate, opacity }}
          />
          <BoxBtn>
            <Button onClick={dislikePerson}>
              <Dislike />
            </Button>
            <Button onClick={likePerson}>
              <Like />
            </Button>
          </BoxBtn>
        </>
      ) : (
        <ContainerSemOpcoes>
          <Header changePage={props.changePage} />

          <p>As opções de perfis esgotaram!</p>
        </ContainerSemOpcoes>
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
