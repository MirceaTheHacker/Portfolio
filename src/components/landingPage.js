import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import picCircled from "../images/pic_circled_1MB.png";

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = { imageStatus: "loading"}
  }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }

  handleImageErrored() {
    this.setState({ imageStatus: "failed to load" });
  }

  render() {
    return (
      <div>
        <Grid className="landing-grid">
          <Cell col={6}>
            <img src={picCircled}
            onLoad={this.handleImageLoaded.bind(this)}
            onError={this.handleImageErrored.bind(this)}
            alt="avatar" className="avatar-img" />
          </Cell>
          <Cell col={6}>
            <div className="banner-text">
              <h1>Software Developer</h1>
              <hr />
              <p>
                Unity 3D | C# | C++ | React | Git
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/mircea-matei-588a52112/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/MirceaTheHacker"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
