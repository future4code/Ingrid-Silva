import React, { Component } from "react";

export default class Playlist extends Component {
  state = {
    isAdding: false,
  };

  renderFormTrack = () => {
    return (
      <form>
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
        <button>Adicionar música</button>
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
          return <p key={track.id}>{track.name}</p>;
        })}
      </>
    );
  };

  render() {
    return (
      <div>
        <div>
          <p>{this.props.playlist.name}</p>
          <button onClick={() => this.deletePlaylist(this.props.playlist.id)}>
            x
          </button>
          <button
            onClick={() => this.getPlaylistDetails(this.props.playlist.id)}
          >
            Detalhes
          </button>
        </div>

        {this.renderTracks(this.props.playlist)}

        {isAdding && this.renderFormTrack()}
      </div>
    );
  }
}
