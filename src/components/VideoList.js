import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
    console.log(props.searchData);

    let videoList;
    //const{changeSelectedVideo} =

    if (props.searchData) {
        videoList = props.searchData.map((video, loopIndex) => {
            return <VideoListItem key={video.etag} listItem={video}/>
        });
    }

    return (
        <div>
            <div>
                <h2>Video List</h2>
            </div>
            <div>
                <ul>
                    {videoList}
                </ul>
            </div>
        </div>
    )
}

export default VideoList;