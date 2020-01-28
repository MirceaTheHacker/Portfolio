import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
  showLink() {
    if (this.props.jobHref !== undefined) {
      return (
        <a
          href={this.props.jobHref}
          rel="noopener noreferrer"
          target="_blank"
          style={{ paddingLeft: ".5em" }}
        >
          LINK
        </a>
      );
    }
  }

  render() {
    return (
      <Grid>
        <Cell col={2}>
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={10}>
          <h4
            style={{
              marginTop: "0px",
              marginBottom: "0px",
              fontWeight: "bold"
            }}
          >
            {this.props.jobName}
          </h4>
          <h6
            style={{
              marginTop: "0px",
              marginBottom: "0px",
              fontStyle: "italic"
            }}
          >
            {this.props.jobCompany}
            {this.showLink()}
          </h6>
          <h6
            style={{
              marginTop: "0px",
              marginBottom: "1em",
              fontStyle: "italic",
              color: "grey"
            }}
          >
            {this.props.jobLocation}
          </h6>
          <p
          style={{
            fontSize: "1.5em"
          }}
          >
            {this.props.jobDescription}
          </p>
        </Cell>
      </Grid>
    );
  }
}

export default Experience;
