import React, { Component } from "react";
import Track from "../TrackItem/index";
import Button from "../Button/index";

import {
  Form,
  Container,
  BoxBtn,
  TituloPlaylist,
  Input,
  InputGroup,
  Label,
} from "./styles";
import {
  BsFillPlusCircleFill,
  BsX,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsCheck,
} from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default class Playlist extends Component {
  state = {
    isAdding: false,

    inputMusicName: "",
    inputArtist: "",
    inputMusicUrl: "",
  };

  handleToggleAddSong = () => {
    this.setState({ isAdding: !this.state.isAdding });
  };

  handleShowInfo = () => {
    this.props.changeSelectedPlaylist(this.props.playlist.id);
    this.props.onPageChange("details");
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
    e.preventDefault();
    const body = {
      name: this.state.inputMusicName,
      artist: this.state.inputArtist,
      url: this.state.inputMusicUrl,
    };
    await this.props.addTrack(this.props.playlist.id, body);
    this.setState({ inputMusicName: "", inputArtist: "", inputMusicUrl: "" });
  };

  renderFormTrack = () => {
    return (
      <Form onSubmit={this.handleSubmit}>
        <InputGroup>
          <Label>Song name</Label>
          <Input
            value={this.state.inputMusicName}
            onChange={this.handleInputMusicName}
            placeholder="Type here the song name"
          ></Input>
        </InputGroup>

        <InputGroup>
          <Label>Artist</Label>
          <Input
            value={this.state.inputArtist}
            onChange={this.handleInputArtist}
            placeholder="Type here the artist name"
          ></Input>
        </InputGroup>
        <InputGroup>
          <Label>URL</Label>
          <Input
            value={this.state.inputMusicUrl}
            onChange={this.handleInputMusicUrl}
            placeholder="Type here the song URL"
          ></Input>
        </InputGroup>
        <BoxBtn>
          <Button type="button" onClick={this.handleToggleAddSong}>
            <BsX />
            Cancel
          </Button>
          <Button>
            <BsCheck />
            Save
          </Button>
        </BoxBtn>
      </Form>
    );
  };

  render() {
    return (
      <Container>
        <TituloPlaylist>{this.props.playlist.name}</TituloPlaylist>
        <BoxBtn>
          <Button onClick={this.handleShowInfo}>
            <BsFillCaretDownFill /> Show info
          </Button>
          <Button
            type="button"
            disabled={this.state.isAdding}
            onClick={this.handleToggleAddSong}
          >
            <BsFillPlusCircleFill /> Add song
          </Button>
          <Button
            onClick={() => this.props.deletePlaylist(this.props.playlist.id)}
            variant="danger"
          >
            <ToastContainer />
            <BsX />
            Delete
          </Button>
        </BoxBtn>

        {this.state.isShowingTracks && this.renderTracks(this.props.playlist)}

        {this.state.isAdding && this.renderFormTrack()}
      </Container>
    );
  }
}
