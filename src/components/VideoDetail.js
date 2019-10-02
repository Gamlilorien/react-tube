import React from "react";

//pulling props.selectedVideo off into the const name 'selectedVideo'
//wrap in a 'section' as react expects a single html element
//use an If to catch inital load before
const VideoDetail = ({ selectedVideo}) => {
    //Again by doing {selectedVideo} helps to destructure so we don't have to do props.selectedVideo everytime...
    //This component renders BEFORE the axios call returns a result
    if (!selectedVideo) return <h2>loading spinner goes here</h2>;
    //This line is required due to the lag in the axios response, oterwise it will cause an error

    const videoId = selectedVideo.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`

    //console.log(videoUrl);

    //All JSX goes within your Return statement
    return (
        <section>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" title={selectedVideo.snippet.title} src={videoUrl} allowFullScreen></iframe>
            </div>
            <h2>{selectedVideo.snippet.title}</h2>
            <p>{selectedVideo.snippet.description}</p>
        </section>
    )
}

export default VideoDetail;

//note return <h2>Video Detail</h2> would work as well but it might 