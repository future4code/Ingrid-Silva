import React, { Component } from "react";
import logo from "../../assets/img/logo.svg";
import Button from "../Button";
import { PlusIcon, Container, Logo, List } from "./styles";

export default class Sidebar extends Component {
  render() {
    return (
      <Container>
        <Logo onClick={() => this.props.onPageChange("home")} src={logo} />
        <div>
          <Button onClick={() => this.props.onPageChange("form")}>
            <PlusIcon />
            New playlist
          </Button>
        </div>
        <div>
          <Button onClick={() => this.props.onPageChange("playlists")}>
            <List />
            Playlists
          </Button>
        </div>
      </Container>
    );
  }
}
