import React from "react";
import VideoHeader from './VideoHeader/VideoHeader';

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
      <VideoHeader playing={this.state.ready} />
    )
  }
}

export default App;
