import React, { Component } from "react";
import { Search, SearchIcon, Container } from "./styles";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <SearchIcon />
        <Search placeholder="Search" />
      </Container>
    );
  }
}
