import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardText
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    switch (this.state.activeTab) {
      case 0:
        return (
          <div
            className="projects-grid"
            style={{
              display: "flex",
              flexWrap: "wrap",
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              justifyContent: "center",
              width: "75%"
            }}
          >
            {/*Unity Project #1 */}
            <Card shadow={5} className="card">
              <CardTitle
                style={{
                  color: "#fff",
                  height: "200px",
                  background:
                    "url(https://i.udemycdn.com/course/750x422/1210008_6859.jpg) center / cover"
                }}
              >
                Crabbo Stabbo
              </CardTitle>
              <CardText style={{ height: "10em" }}>
                It is the year 2023, humanity kept on fishing and consuming
                crabs until all species became extinct, or so everyone thought.
                The main character is Mr. Crabbo Stabbo, the last crab on earth.
                Help him make justice and defeat the chefs trying to cook him
                up.
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/MirceaTheHacker/CrabboStabbo"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>GitHub</Button>
                </a>
                <a
                  href="https://mateimircea.itch.io/crabbo-stabbo"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Live Demo</Button>
                </a>
              </CardActions>
            </Card>
            {/*Unity Project #2 */}
            <Card shadow={5} className="card">
              <CardTitle
                style={{
                  color: "#fff",
                  height: "200px",
                  background:
                    "url(https://i.udemycdn.com/course/750x422/1210008_6859.jpg) center / cover"
                }}
              >
                Crazy Taxi Drive
              </CardTitle>
              <CardText style={{ height: "10em" }}>
                A 2D game made in Unity with a team of two developers where you
                are in control of driving passengers to rather exotic
                destinations. The project can be downloaded from my GitHub.
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/MirceaTheHacker/Crazy-Taxi-Drive-2D"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>GitHub</Button>
                </a>
                <a
                  href="https://mateimircea.itch.io/crazy-taxi-drive"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Live Demo</Button>
                </a>
              </CardActions>
            </Card>
          </div>
        );
      case 1:
        return (
          <div
            className="projects-grid"
            style={{
              display: "flex",
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              justifyContent: "center",
              width: "50%"
            }}
          >
            {/*Android Studio Project #1 */}
            <Card shadow={5} className="card">
              <CardTitle
                style={{
                  color: "#fff",
                  height: "200px",
                  background:
                    "url(https://www.xda-developers.com/files/2016/02/android-studio.png) center / cover"
                }}
              >
                Android Quiz Game
              </CardTitle>
              <CardText style={{ height: "10em" }}>
                This is my team project for the year 3 class, "Mobile
                Application Development". It is a simple quiz game developed in
                Android Studio and connected to a Firebase database. It has
                features such as signing in, creating new accounts, different
                quiz categories and ranking.
              </CardText>
              <CardActions border>
                <a
                  href="https://github.com/MirceaTheHacker/Android-App-Quiz-Game"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>GitHub</Button>
                </a>
              </CardActions>
            </Card>
          </div>
        );
      case 2:
        return (
          <div
            className="projects-grid"
            style={{
              display: "flex",
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              justifyContent: "center",
              width: "50%"
            }}
          >
            {/*Python Project #1 */}
            <Card shadow={5} className="card">
              <CardTitle
                style={{
                  textAlign: "left",
                  text: "0px",
                  color: "white",
                  height: "250px",
                  background:
                    "url(https://miro.medium.com/max/3960/1*taf9WHc3BPmhbxyKEu2jIg.png) center / cover"
                }}
              >
                Software for casual entertainment enhancement
              </CardTitle>
              <CardText>
                An application designed for didactic purposes where the subjects
                (i.e. students) can observe the astonishing versatility of the
                Python programming language, learn original techniques that can
                be applied in any game engine and therefore set a stepping stone
                for a career as a game developer. Throughout the thesis’s
                content many complex mechanisms and ways of approaching problems
                are thoroughly described in detail. The final product serves
                mainly as a resourceful way of teaching students how to build
                their own game from scratch in Python. Although not used in the
                modern video gaming industry, the library encapsulates valuable
                techniques applicable in any language. As a secondary goal, the
                thesis tries to raise awareness about the possibility of
                introducing a new optional subject to the curriculum meant to
                teach the basics of game development.
              </CardText>
              <CardActions border>
                <a
                  href="https://drive.google.com/file/d/11_gh4bDtUGbW-yQYiBrMPnAxhqBwmnDM/view"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>DOWNLOAD</Button>
                </a>
                <a
                  href="https://drive.google.com/file/d/1GZLV-TEptbAsuFdAqTvi_Isxq1ynHNv9/view"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>DOCUMENTATION</Button>
                </a>
              </CardActions>
            </Card>
          </div>
        );
      default:
        return (
          <div>
            <h1>Choose a category</h1>
          </div>
        );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
          style={{ paddingTop: "5vh" }}
        >
          <Tab>
            <div className="project-tab">Unity</div>
          </Tab>
          <Tab>
            <div className="project-tab">Android Studio</div>
          </Tab>
          <Tab>
            <div className="project-tab">Python</div>Python
          </Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
