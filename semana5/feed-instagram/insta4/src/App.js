import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import Header from "./components/Header/Header";
import PerfilIngrid from "./img/perfil.jpg";
import PerfilDudu from "./img/dudu.jfif";
import Post1 from "./img/batatinha.jpg";
import Post2 from "./img/guadalupe.jpg";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0px;
`;

class App extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
        comentarios: [],
      },
      {
        id: 2,
        nomeUsuario: "ingrid",
        fotoUsuario: PerfilIngrid,
        fotoPost: Post1,
        comentarios: [],
      },
      {
        id: 3,
        nomeUsuario: "dudu",
        fotoUsuario: PerfilDudu,
        fotoPost: Post2,
        comentarios: [],
      },
    ],

    nomeUsuario: "",
    fotoUsuario: "",
    fotoPost: "",
  };

  adicionaPost = (event) => {
    event.preventDefault();

    const novoPost = {
      id: this.state.posts.length + 1,
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost,
      comentarios: [],
    };

    const novoPosts = [...this.state.posts, novoPost];

    this.setState({
      posts: novoPosts,
      nomeUsuario: "",
      fotoUsuario: "",
      fotoPost: "",
    });
  };

  adicionaComentario = (id, comentario) => {
    const posts = this.state.posts.map((post) => {
      if (post.id !== id) return post;

      return {
        ...post,
        comentarios: [...post.comentarios, comentario],
      };
    });

    this.setState({ posts });
  };

  onChangeInputNome = (event) => {
    this.setState({ nomeUsuario: event.target.value });
  };

  onChangeInputFoto = (event) => {
    this.setState({ fotoUsuario: event.target.value });
  };
  onChangeInputPost = (event) => {
    this.setState({ fotoPost: event.target.value });
  };

  render() {
    return (
      <MainContainer>
        <Header>Oi</Header>

        <Form onSubmit={this.adicionaPost}>
          <Input
            value={this.state.nomeUsuario}
            onChange={this.onChangeInputNome}
            type="text"
            placeholder="Digite o seu nome"
          />
          <Input
            value={this.state.fotoUsuario}
            onChange={this.onChangeInputFoto}
            placeholder="Adicione a URL da sua foto"
          />
          <Input
            value={this.state.fotoPost}
            onChange={this.onChangeInputPost}
            placeholder="Cole a URL da foto do seu Post"
          />
          <button>Criar Post</button>
        </Form>

        {this.state.posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            adicionaComentario={this.adicionaComentario}
          />
        ))}
      </MainContainer>
    );
  }
}

export default App;
