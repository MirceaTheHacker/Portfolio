import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Matei Mircea</h2>
            <img
              src="https://lh3.googleusercontent.com/eE_jt2Hf1I8Wm0KR9jgDiFfgabJedIoggustVkjDYP9kurCLp1NVGisimUjriVDr-uERepDgqD9qTLvXJHHRn3PMPNJK2W_a775e-QMg0h1lcfWfMikfxB1dgPmYAsHYsc9Fm_cmEF435T5CgY9FBpFvqrPrLW1yLO2MOtmYDlRjvh-nlljJTOp6WQ6OX1hC7IHzMqxVAEiVtG6wedGmyInCbevhnqsnWsDvwNaScUIYijG3dvErDTNJp3QgsVY9oPB07oe5pj2qmJG4NCyDm0_QOCopgra_i_Z0u55-PzyaehpI3A9HCR2yOH5I3UWh4r2jgdMADEDlukQgzInUSxMGU2TAoidtWdohSBy5Yf5PkZBvEdEeX5z0OM9d9XE2iIN92wRR0Bz4zyP8SuseC0OHbJra33ngJ2VizcPPTrNHLN9e9gvwUBAUzOZsSyWqnl2ciLhz93an965_ckjaKxL-hi95hGSPdRq1n5DyBXsxm7Yzo8X0ay_WZiJdHQIDdbppyZ5VGn2narOAeWYo3_9EjqfNLcTwOzGCqoQdBKLLrEAYjijyVeO6Urp9uluPY9I9_rWJTqyjx1rcoKiFaKDT_RreqLZTzdBxF9SXF-sCdDqi7YbpFjK7DZ4-RN7wFIwJIMIS3v_fyX7iKJ3tzy5xlezQrf8=w1946-h1297-no"
              alt="avatr"
              style={{ height: "300px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Proactive programmer with experience in Unity Development, Adobe
              Photoshop, Audacity and other tools used in video game
              development. Currently building a career as a Game Developer.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (+40) 743-337-623
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    mircea1997@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    matei_mircea97
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                    https://www.linkedin.com/in/mircea-matei-588a52112/
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
