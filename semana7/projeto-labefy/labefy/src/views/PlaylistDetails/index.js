import React, { Component } from "react";
import Track from "../../components/TrackItem";

export default class PlaylistDetails extends Component {
  renderTracks = (playlist) => {
    if (!playlist.tracks) return null;

    if (playlist.tracks.length === 0)
      return <p>This playlist has no songs yet</p>;

    return (
      <>
        {playlist.tracks.map((track) => {
          return <Track key={track.id} track={track} />;
        })}
      </>
    );
  };

  render() {
    const playlist = this.props.playlists.find(
      (pl) => pl.id === this.props.selectedPlaylist
    );

    console.log(this.props);

    if (!playlist) return <p>Playlist not found</p>;

    return (
      <div>
        <h1>{playlist.name}</h1>
        {this.renderTracks(playlist)}
      </div>
    );
  }
}
