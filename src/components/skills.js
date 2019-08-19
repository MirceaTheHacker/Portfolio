import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div style={{ display: "flex", flexWrap: "nowrap" }}>
            <span
              style={{ width: "30%", fontWeight: "bold", fontSize: "1.5em" }}
            >
              {this.props.skill}
            </span>
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
