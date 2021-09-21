import React, { Component } from "react";
import Playlist from "../../components/PlaylistItem";

export default class Playlists extends Component {
  componentDidMount() {
    this.props.getAllPlaylists();
  }

  render() {
    return (
      <div>
        {this.props.playlists.map((playlist) => (
          <Playlist
            key={playlist.id}
            playlist={playlist}
            addTrack={this.props.addTrack}
            onPageChange={this.props.onPageChange}
            deletePlaylist={this.props.deletePlaylist}
            getPlaylistDetails={this.props.getPlaylistDetails}
            changeSelectedPlaylist={this.props.changeSelectedPlaylist}
          />
        ))}
      </div>
    );
  }
}
