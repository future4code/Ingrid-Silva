import React, { Component } from "react";
import Button from "../Button/index";
import { Container, Play, Stop, SongName } from "./styles";

export default class Track extends Component {
  state = {
    listenMusic: false,
  };

  handleToggleListenMusic = () => {
    this.setState({ listenMusic: !this.state.listenMusic });
  };

  render() {
    return (
      <Container>
        <Button onClick={this.handleToggleListenMusic}>
          {this.state.listenMusic ? <Stop /> : <Play />}
          <SongName>{this.props.track.name}</SongName>
        </Button>

        {this.state.listenMusic && (
          <audio controls>
            <source src={this.props.track.url}></source>
          </audio>
        )}
      </Container>
    );
  }
}
