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
  };
  handleInputPlayist = (e) => {
    this.setState({ inputPlaylist: e.target.value });
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

  addTrack = async (e, id, body) => {
    e.preventDefault();
    try {
      await axios.post(`${url}/${id}/tracks`, body, headers);
      this.getPlaylistDetails(id);
      alert("A música FOI");
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
      <Playlist
        getPlaylistDetails={this.getPlaylistDetails}
        deletePlaylist={this.deletePlaylist}
        addTrack={this.addTrack}
        key={playlist.id}
        playlist={playlist}
      />
    ));
  };

  render() {
    return (
      <div>
        {this.renderForm()}
        {this.renderPlaylists()}
      </div>
    );
  }
}
