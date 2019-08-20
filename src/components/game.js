import React, { Component } from "react";
import Unity, { UnityContent, SetFullScreen } from "react-unity-webgl";
import { Button } from "react-mdl";

class Game extends Component {
  constructor(props) {
    super(props);

    this.unityContent = new UnityContent(
      "./Build/Build16.json",
      "./Build/UnityLoader.js"
    );
    this.isFullScreen = false;
  }

  handleFullScreen() {
    if (this.props.isFullScreen) {
      SetFullScreen(false);
      this.isFullScreen = false;
    } else {
      SetFullScreen(true);
      this.isFullScreen = true;
    }
  }

  render() {
    return (
      <Unity unityContent={this.unityContent}>
        <Button onClick={this.handleFullScreen}>PLAY</Button>
      </Unity>
    );
  }
}

export default Game;
