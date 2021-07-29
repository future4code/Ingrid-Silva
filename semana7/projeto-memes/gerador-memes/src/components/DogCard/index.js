import axios from "axios";

import React, { Component } from "react";

export default class DogCard extends Component {
  render() {
    return (
      <div>
        <img src={this.state.image} />
      </div>
    );
  }
}
