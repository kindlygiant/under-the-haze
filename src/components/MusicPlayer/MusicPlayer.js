import React from 'react';
import ReactAudioPlayer from 'react-audio-player'
import themeURL from '../../assets/audio/theme.wav';

class MusicPlayer extends React.Component {
    constructor(props) {
    super(props);
  }

  render() {
    return (
      <ReactAudioPlayer 
          src={themeURL}
          type="audio/wav"
          controls>
      </ReactAudioPlayer>
    );
  }
}
export default MusicPlayer;