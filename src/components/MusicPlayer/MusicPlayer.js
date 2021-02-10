import React from 'react';
import ReactAudioPlayer from 'react-audio-player'

class MusicPlayer extends React.Component {
    constructor(props) {
    super(props);
    this.songUrl = props.songUrl;
  }

  render() {
    return (
      <ReactAudioPlayer 
          src={this.songUrl}
          type="audio/wav"
          controls>
      </ReactAudioPlayer>
    );
  }
}
export default MusicPlayer;