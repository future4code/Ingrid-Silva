import React from "react";
import styled from "styled-components";
import Logo from "../../img/insta-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHome, faCompass, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

import Foto from "../../img/batatinha.jpg";

const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 975px;
  width: 100%;
`;

const InstagramLogo = styled.img`
  width: 150px;
  height: auto;
  cursor: pointer;
`;

const UserPhoto = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const Icone = styled(FontAwesomeIcon)`
  font-size: 22px;
  margin-right: 15px;
  cursor: pointer;
`;

const ContainerIcones = styled.div`
  display: flex;
`;
class Header extends React.Component {
  render() {
    return (
      <Container>
        <InstagramLogo src={Logo} />
        <input placeholder="Pesquisar" />
        <ContainerIcones>
          <Icone icon={faHome} />
          <Icone icon={faTelegramPlane} />
          <Icone icon={faCompass} />
          <Icone icon={faHeart} />
        </ContainerIcones>
        <UserPhoto src={Foto}></UserPhoto>
      </Container>
    );
  }
}

export default Header;
