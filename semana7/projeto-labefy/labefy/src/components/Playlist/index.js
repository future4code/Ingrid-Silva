import React, { Component } from "react";

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
const headers = {
  headers: {
    Authorization: "ingrid-silva-lovelace",
  },
};

export default class Playlist extends Component {
  state = {
    isAdding: false,
    listenMusic: false,

    inputMusicName: "",
    inputArtist: "",
    inputMusicUrl: "",
  };

  handleInputMusicUrl = (e) => {
    this.setState({ inputMusicUrl: e.target.value });
  };
  handleInputMusicName = (e) => {
    this.setState({ inputMusicName: e.target.value });
  };
  handleInputArtist = (e) => {
    this.setState({ inputArtist: e.target.value });
  };

  handleSubmit = async (e) => {
    const body = {
      name: this.state.inputMusicName,
      artist: this.state.inputArtist,
      url: this.state.inputMusicUrl,
    };
    await this.props.addTrack(e, this.props.playlist.id, body);
    this.setState({ inputMusicName: "", inputArtist: "", inputMusicUrl: "" });
  };

  renderFormTrack = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.inputMusicName}
          onChange={this.handleInputMusicName}
          placeholder="Digite o nome da música"
        ></input>
        <input
          value={this.state.inputArtist}
          onChange={this.handleInputArtist}
          placeholder="Digite o nome do artista"
        ></input>
        <input
          value={this.state.inputMusicUrl}
          onChange={this.handleInputMusicUrl}
          placeholder="Cole aqui a URL da música"
        ></input>
        <button>Salvar</button>
      </form>
    );
  };

  renderTracks = (playlist) => {
    if (!playlist.tracks) return null;

    if (playlist.tracks.length === 0) return <p>Nenhuma música cadastrada</p>;

    return (
      <>
        <h4>Músicas:</h4>
        {playlist.tracks.map((track) => {
          return (
            <div>
              <p key={track.id}>{track.name}</p>
              <button>Ouça a música</button>
              {this.state.listenMusic && (
                <audio controls>
                  <source src={track.url}></source>
                </audio>
              )}
            </div>
          );
        })}
      </>
    );
  };

  render() {
    return (
      <div>
        <div>
          <p>{this.props.playlist.name}</p>
          <button
            onClick={() => this.props.deletePlaylist(this.props.playlist.id)}
          >
            x
          </button>
          <button
            onClick={() =>
              this.props.getPlaylistDetails(this.props.playlist.id)
            }
          >
            Detalhes
          </button>
          <button
            onClick={() => {
              this.setState({ isAdding: true });
            }}
          >
            Adicionar música
          </button>
        </div>

        {this.renderTracks(this.props.playlist)}

        {this.state.isAdding && this.renderFormTrack()}
      </div>
    );
  }
}
