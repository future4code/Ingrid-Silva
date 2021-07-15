import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import { faShareSquare as faShareSquareSolid } from "@fortawesome/free-solid-svg-icons";
import { faShareSquare as faShareSquareRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faInstagramSquare,
  faTwitterSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

import { IconeComContador } from "../IconeComContador/IconeComContador";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`;

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const PostPhoto = styled.img`
  width: 100%;
`;

const RedesSociais = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

const IconeRedeSocial = styled(FontAwesomeIcon)`
  font-size: 32px;
  margin-right: 10px;
  cursor: pointer;
`;

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false,
    compartilhado: false,
    valorInputComentarioPost: "",
  };

  onChangeComentarioPost = (event) => {
    this.setState({ valorInputComentarioPost: event.target.value });
  };

  onClickCompartilhado = () => {
    this.setState({
      compartilhado: !this.state.compartilhado,
    });
  };

  onSocialMediaClick = (media) => {
    console.log(
      `Post compartilhado no ${media} com a mensagem: "${this.state.valorInputComentarioPost}"`
    );
  };

  onClickMarcado = () => {
    this.setState({
      marcado: !this.state.marcado,
    });
  };

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: this.state.curtido
        ? this.state.numeroCurtidas - 1
        : this.state.numeroCurtidas + 1,
    });
  };

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    });
  };

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    });
  };

  render() {
    let iconeCurtida;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
    }

    return (
      <PostContainer>
        <PostHeader>
          <UserPhoto src={this.props.fotoUsuario} alt={"Imagem do usuario"} />
          <p>{this.props.nomeUsuario}</p>
        </PostHeader>

        <PostPhoto src={this.props.fotoPost} alt={"Imagem do post"} />

        <PostFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />
          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
          <FontAwesomeIcon
            icon={this.state.marcado ? faBookmarkSolid : faBookmarkRegular}
            onClick={this.onClickMarcado}
          />
          <FontAwesomeIcon
            icon={
              this.state.compartilhado
                ? faShareSquareSolid
                : faShareSquareRegular
            }
            onClick={this.onClickCompartilhado}
          />
        </PostFooter>

        {this.state.compartilhado && (
          <>
            <RedesSociais>
              <div>
                <input
                  placeholder="Comentar"
                  value={this.state.valorInputComentarioPost}
                  onChange={this.onChangeComentarioPost}
                />
              </div>
              <div>
                <IconeRedeSocial
                  icon={faInstagramSquare}
                  onClick={() => this.onSocialMediaClick("Instagram")}
                />
                <IconeRedeSocial
                  icon={faTwitterSquare}
                  onClick={() => this.onSocialMediaClick("Twitter")}
                />
                <IconeRedeSocial
                  icon={faFacebookSquare}
                  onClick={() => this.onSocialMediaClick("Facebook")}
                />
              </div>
            </RedesSociais>
          </>
        )}

        {this.state.comentando && (
          <SecaoComentario aoEnviar={this.aoEnviarComentario} />
        )}
      </PostContainer>
    );
  }
}

export default Post;
