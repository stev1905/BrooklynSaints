import React from "react";
import VideoHeader from './VideoHeader/VideoHeader';
import AboutUs from './AboutUs/AboutUs';

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      ready: false
    }
  }

  componentDidMount(){
    this.onReady()
  }

  onReady = () => {
    this.setState({ ready: true });
  }

  render() {
    return (
      <div>
        <VideoHeader playing={this.state.ready} />
        <AboutUs />
      </div>
    )
  }
}

export default App;
