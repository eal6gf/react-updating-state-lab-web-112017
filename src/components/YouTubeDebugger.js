// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleChangeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleChangeResolution = () => {
    this.setState({
      settings: {...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render(){
    return (
      <div>
      <button className='bitrate' onClick={this.handleChangeBitrate}> Change Bitrate </button>
      <h2>Current Bitrate: {this.state.settings.bitrate} </h2>
      <button className='resolution' onClick={this.handleChangeResolution}> Change resolution</button>
      <h2> Current Resolution: {this.state.settings.video.resolution} </h2>
      </div>
    )
  }
}

export default YouTubeDebugger
