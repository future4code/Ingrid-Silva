import React, { Component } from "react";
import axios from "axios";
import Playlist from "./components/Playlist";

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
const headers = {
  headers: {
    Authorization: "ingrid-silva-lovelace",
  },
};

export default class App extends Component {
  state = {
    inputPlaylist: "",
    playlists: [],
    inputMusicName: "",
    inputArtist: "",
    inputMusicUrl: "",
  };

  handleInputPlayist = (e) => {
    this.setState({ inputPlaylist: e.target.value });
  };

  handleInputMusicName = (e) => {
    this.setState({ inputMusicName: e.target.value });
  };
  handleInputArtist = (e) => {
    this.setState({ inputArtist: e.target.value });
  };
  handleInputMusicUrl = (e) => {
    this.setState({ inputMusicUrl: e.target.value });
  };

  createPlaylist = async () => {
    const body = {
      name: this.state.inputPlaylist,
    };

    try {
      await axios.post(url, body, headers);
      alert("Deu certo");
      this.setState({ inputPlaylist: "" });
      this.getAllPlaylists();
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  getAllPlaylists = async () => {
    try {
      const response = await axios(url, headers);
      this.setState({ playlists: response.data.result.list });
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  deletePlaylist = async (id) => {
    try {
      await axios.delete(`${url}/${id}`, headers);
      this.getAllPlaylists();
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  getPlaylistDetails = async (id) => {
    try {
      const response = await axios.get(`${url}/${id}/tracks`, headers);
      const playlists = this.state.playlists.map((playlist) => {
        if (playlist.id === id) {
          return {
            ...playlist,
            tracks: response.data.result.tracks,
          };
        }

        return playlist;
      });

      this.setState({ playlists: playlists });
    } catch (err) {
      alert(err);
    }
  };

  addTrack = async (id) => {
    try {
      await axios.post(`${url}/${id}/tracks`, headers);
      this.setState({ inputMusicName: "", inputArtist: "", inputMusicUrl: "" });
      this.getPlaylistDetails(id);
    } catch (err) {
      alert(err);
    }
  };

  renderForm = () => {
    return (
      <div>
        <input
          value={this.state.inputPlaylist}
          onChange={this.handleInputPlayist}
          placeholder="Digite o nome da sua playlist"
        />

        <button onClick={this.createPlaylist}>Criar playlist</button>
        <button onClick={this.getAllPlaylists}>Ver playlists</button>
      </div>
    );
  };

  renderPlaylists = () => {
    return this.state.playlists.map((playlist) => (
      <Playlist key={playlist.id} playlist={playlist} />
    ));
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

  render() {
    return (
      <div>
        {this.renderForm()}
        {this.renderPlaylists()}
        {this.renderFormTrack()}
      </div>
    );
  }
}
