import React from "react";
import VideoHeader from './VideoHeader/VideoHeader';
import AboutUs from './AboutUs/AboutUs';
import Events from './Events/Events';
import Footer from "./Footer/Footer";
import NavigationBar from "./NavigationBar/NavigationBar";

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
        <NavigationBar />
        <VideoHeader playing={this.state.ready} />
        <AboutUs />
        <Events />
        <Footer />
      </div>
    )
  }
}

export default App;
