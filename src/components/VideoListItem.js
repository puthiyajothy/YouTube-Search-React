import React from 'react';

class VideoListItem extends React.Component{

    constructor(props) {
     super(props);
     this.changeVideo=this.changeVideo.bind(this);
    }

    changeVideo(video){
        const {changeSelectedVideo,listItem}=this.props;
        changeSelectedVideo(listItem);
    }

        render () {
            const{listItem}= this.props;
        
        return( 
            <li>
            <div onClick={this.changeVideo}>>
                <img src={listItem.snippet.thumbnails.default.url}/>
            </div>
            <div>
            {listItem.snippet.title}
            </div>
            
        
            </li>

        )
    }
}
export default VideoListItem;