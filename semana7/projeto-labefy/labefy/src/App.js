import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BsCheck, BsX } from "react-icons/bs";

import Playlist from "./components/PlaylistItem";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Button from "./components/Button";
import Playlists from "./views/Playlists";
import PlaylistDetails from "./views/PlaylistDetails";

const Container = styled.div`
  display: flex;
  background-color: #000;
  color: #fff;
  min-height: 100vh;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;

  > div {
    flex: 1;
  }
`;

const InputPlaylist = styled.input`
  padding: 10px;
  width: 350px;
  border-radius: 20px;
  outline: none;
  border: none;
`;

const BoxAddPlaylist = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoxAddPlaylistButtons = styled.div`
  display: flex;
  margin-top: 20px;
`;

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
    page: "home",
    selectedPlaylist: undefined,
  };

  handleInputPlayist = (e) => {
    this.setState({ inputPlaylist: e.target.value });
  };

  createPlaylist = async (event) => {
    event.preventDefault();

    const body = {
      name: this.state.inputPlaylist,
    };

    try {
      await axios.post(url, body, headers);
      this.setState({ inputPlaylist: "" });
      this.getAllPlaylists();
      toast.success("Playlist created successfully!");
    } catch (err) {
      toast.error(err.response.data.message);
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
      const confirmed = window.confirm(
        "Are you sure you want delete this playlist?"
      );

      if (!confirmed) return;

      await axios.delete(`${url}/${id}`, headers);
      this.getAllPlaylists();
      toast.success("Playlist removed successfully");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  getPlaylistDetails = async () => {
    const id = this.state.selectedPlaylist;

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

  addTrack = async (id, body) => {
    try {
      await axios.post(`${url}/${id}/tracks`, body, headers);
      toast.success("Song added successfully!");
    } catch (err) {
      alert(err);
    }
  };

  handleChangeSelectedPlaylist = (id) => {
    this.setState({ selectedPlaylist: id }, this.getPlaylistDetails);
  };

  renderForm = () => {
    return (
      <BoxAddPlaylist>
        <h3>New playlist</h3>
        <form onSubmit={this.createPlaylist}>
          <InputPlaylist
            autoFocus
            value={this.state.inputPlaylist}
            onChange={this.handleInputPlayist}
            placeholder="Type the playlist name"
          />

          <BoxAddPlaylistButtons>
            <Button>
              <BsCheck />
              Save
            </Button>
            <Button type="button" onClick={() => this.handlePageChange("home")}>
              <BsX />
              Cancel
            </Button>
          </BoxAddPlaylistButtons>
        </form>
      </BoxAddPlaylist>
    );
  };

  renderPage = () => {
    switch (this.state.page) {
      case "form":
        return this.renderForm();
      case "playlists":
        return (
          <Playlists
            addTrack={this.addTrack}
            playlists={this.state.playlists}
            onPageChange={this.handlePageChange}
            deletePlaylist={this.deletePlaylist}
            getAllPlaylists={this.getAllPlaylists}
            changeSelectedPlaylist={this.handleChangeSelectedPlaylist}
          />
        );
      case "details":
        return (
          <PlaylistDetails
            playlists={this.state.playlists}
            onPageChange={this.handlePageChange}
            selectedPlaylist={this.state.selectedPlaylist}
          />
        );
      default:
        return (
          <div>
            <h1>Seja bem vindo(a)</h1>
          </div>
        );
    }
  };

  handlePageChange = (page) => {
    this.setState({ page: page });
  };

  render() {
    return (
      <Container>
        <Sidebar onPageChange={this.handlePageChange} />
        <Main>
          <Header />
          {this.renderPage()}
        </Main>
        <ToastContainer />
      </Container>
    );
  }
}
