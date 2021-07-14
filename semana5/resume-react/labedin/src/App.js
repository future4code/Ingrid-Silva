import React from "react";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import imagemPerfil from "./assets/img/perfil.jpg";
import imagemIconeProfe from "./assets/img/profe.png";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeSquare,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: #0a66c2;
`;

const Icone = styled(FontAwesomeIcon)`
  color: #dce6f1;
  font-size: 40px;
  margin: 0px 20px;
`;

const Titulo = styled.h2`
  display: flex;
  color: #fff;
  font-size: 30px;
`;

const Experiencias = styled.h2`
  text-align: center;
  color: #0a66c2;
  font-size: 40px;
  margin: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardsExperiecias = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0a66c2;
  padding: 20px;
`;

const IconeRedeSocial = styled(FontAwesomeIcon)`
  font-size: 40px;
  margin-left: 20px;
  color: #dce6f1;
  cursor: pointer;
`;

function App() {
  return (
    <div>
      <div>
        <Header>
          <Icone icon={faLinkedin} />
          <Titulo>LabedIn</Titulo>
        </Header>
        <CardGrande
          imagem={imagemPerfil}
          nome="Ingrid Flack"
          descricao="Oi, eu sou a Ingrid Flack. Atualmente sou estudante do curso Web Full Stack na escola de programação Labenu. Além disso, sou formada e especializada em educação"
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno
          icone={faEnvelopeSquare}
          titulo="E-mail:"
          descricao="ingrid_flack@hotmail.com"
        />
        <CardPequeno
          icone={faMapMarkedAlt}
          titulo="Endereço:"
          descricao="Porto Alegre"
        />
      </div>

      <Container>
        <Experiencias>Experiências profissionais</Experiencias>
        <CardsExperiecias>
          <CardGrande
            imagem={imagemIconeProfe}
            nome="Labenu"
            descricao="Estudante - Web Full Stack"
          />
          <CardGrande
            imagem={imagemIconeProfe}
            nome="Escola de Educação Infantil"
            descricao="Acompanhar o desenvolvimento cognitivo de criaças de 0 a 6 anos de idade."
          />
        </CardsExperiecias>
      </Container>
      <Footer>
        <div>
          <IconeRedeSocial icon={faLinkedin} />
          <IconeRedeSocial icon={faFacebookSquare} />
          <IconeRedeSocial icon={faTwitterSquare} />
        </div>
      </Footer>
    </div>
  );
}

export default App;
