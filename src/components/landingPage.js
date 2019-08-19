import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import picCircled from "../images/picCircled.png";

class Landing extends Component {
  render() {
    return (
      <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              style={{ height: "40vw", marginTop: "0px" }}
              src={picCircled}
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Unity 3D Developer</h1>
              <hr />
              <p>
                React | Java | C# | C++ | Javascript | SQL | PL/SQL | C | OOP |
                Data Structures | Python | Machine Learning | Photoshop Artist
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
