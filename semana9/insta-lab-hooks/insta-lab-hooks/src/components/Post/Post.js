import React, { useState } from "react";
import {
  PostContainer,
  PostHeader,
  UserPhoto,
  PostPhoto,
  PostFooter,
  CommentContainer,
} from "./styles";

import IconeComContador from "../IconeComContador/IconeComContador";
import SecaoComentario from "../SecaoComentario/SecaoComentario";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";

const Post = (props) => {
  const [curtido, setCurtido] = useState(false);
  const [numeroCurtidas, setNumeroCurtidas] = useState(0);
  const [comentando, setComentando] = useState(false);
  const [comentarios, setComentarios] = useState([]);

  const onClickCurtida = () => {
    setCurtido((curtido) => !curtido);
    setNumeroCurtidas((numeroCurtidas) =>
      curtido ? numeroCurtidas - 1 : numeroCurtidas + 1
    );
  };

  const onClickComentario = () => {
    setComentando((comentando) => !comentando);
  };

  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, comentario];
    setComentarios(listaDeComentarios);
    setComentando(false);
  };

  const iconeCurtida = curtido ? iconeCoracaoPreto : iconeCoracaoBranco;

  const caixaDeComentario = comentando ? (
    <SecaoComentario enviarComentario={enviarComentario} />
  ) : (
    comentarios.map((comentario, index) => {
      return (
        <CommentContainer key={index}>
          <p>{comentario}</p>
        </CommentContainer>
      );
    })
  );

  console.log(comentarios);

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={"Imagem do usuario"} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={"Imagem do post"} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={comentarios.length}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  );
};

export default Post;
