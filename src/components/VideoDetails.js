import React from 'react';
import YouTube from 'react-youtube';

class VideoDetails extends React.Component{

    constructor(props){
        super(props);
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

      render(){
          const {selectedVideo} = this.props;
            const options = {
            height: '390',
            width: '640',
            playerVars: {
            autoplay: 1
        }
      };
    return(
        <div>
            <YouTube
                videoId={selectedVideo.id.videoId}
                opts={Option}
            onReady={this._onReady}
            />
      </div>
    )

    }
}

export default  VideoDetails;