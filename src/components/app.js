import React, { Component } from 'react';
import VideoSearch from './VideoSearch';
import searchYoutube from 'youtube-api-v3-search';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails'

const API_KEY = "AIzaSyDYspx2mPxb3t_nzUNo-ft5ZNeD5da0je4";

class App extends Component {
  constructor(props) {
    super(props);
    this.changeVideoDetails = this.changeVideoDetails.bind(this);
    this.state = {
      searchData: [],
      selectedVideo:[]
  };
  }
    changeVideoDetails(term) {
      

      
      const options = {
        q: term,
        part: 'snippet',
        type: 'video'
      }

      const callback = (error, videos) => {
        this.setState(
          {
            searchData: videos.items,
            selectedVideo: videos.items[0]
          }); 
      console.log(videos);
        }
    searchYoutube(API_KEY, options, callback);
    }

changeSelectedVideo(videos){
  this.setState(
    {
      selectedVideo:video
    }
   
  )
}

    render(){
      const { searchData,selectedVideo } = this.state;
    if (!searchData.length > 0) {
      return (<div>
        <VideoSearch changeVideoDetails = {this.changeVideoDetails} />
        Loading...

        </div>)
    }
    
    return(
      <div>
        youtube
        <VideoSearch changeVideoDetails={this.changeVideoDetails}/>
        <VideoDetails selectedVideo={selectedVideo} />
        <VideoList searchData= {searchData} />
        
      </div>
    );

  }
}
export default App;