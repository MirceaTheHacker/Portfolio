import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div className="skill">
            <span>{this.props.skill}</span>
            <ProgressBar
              style={{
                width: "70%",
                paddingTop: "1em"
              }}
              progress={this.props.progress}
            />
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
