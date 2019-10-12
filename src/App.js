import React, { Component} from 'react';
// the { component} simply allows us to use Component as a variable vs the more verbose react.component
import _ from "lodash";
import {Container, Row, Col} from "reactstrap";
import API from "./utils/API"
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import {VideoList, VideoListItem} from "./components/VideoList";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  //componentDidMount only renders the first time the page loads
  //this.setState is required for forcing a render of that component
  componentDidMount() {
    //call that youtube api
    this.searchYouTube("React.js")
  }

  searchYouTube = term => {
    API.searchYouTube(term)
    //this will capture the return value from the call above
    .then(res => this.setState({ videos: res.data.items, selectedVideo: res.data.items[0]}))
    .catch(err => console.log(err));
  }

  onVideoSelect = selectedVideo => {
    this.setState( {selectedVideo: selectedVideo } );
  }

  //1000 milliseconds = 1 sec
  throttledSearch = _.debounce( this.searchYouTube, 800 );

  //IF your selected item name matches the value you can simply do { slectedVideo } to equal both
  //This function is available to the child components...IF we pass as a prop, ie this.onVideoSelect

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>React-Tube</h1>
            <SearchBar searchYouTube={this.throttledSearch}/>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <VideoDetail selectedVideo={this.state.selectedVideo}/>
          </Col>
          <Col md="4">
            <VideoList>
              {/* .map creates a NEW array from an existing array (ie this.state.videos). Why? because you can't (or shouldn't) mutate state. So if your original array contains say 4 items, the .map --- Also, the "key" is required for React and is ONLY available to React */}
              {this.state.videos.map(video => (
                <VideoListItem
                  video={video}
                  key={video.id.videoId}
                  selectedVideo={this.state.selectedVideo}
                  onVideoSelect={this.onVideoSelect}
                  />
              ))}
            </VideoList>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
