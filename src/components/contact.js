import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import contactPicture from "../images/react_contact_picture.png"

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Mircea Matei</h2>
            <img src={contactPicture} alt="avatar"/>
            <p style={{ width: "100%", margin: "auto", paddingTop: "1em" }}>
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
                <ListItem style={{ padding: "5px" }}>
                  <ListItemContent className="contact-list-item-content">
                    <i className="fa fa-phone-square" aria-hidden="true" />
                  </ListItemContent>
                  <ListItemContent className="contact-list-item-content">
                    <span>(+40) 743-337-623</span>
                  </ListItemContent>
                </ListItem>

                <ListItem style={{ padding: "5px" }}>
                  <ListItemContent className="contact-list-item-content">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </ListItemContent>
                  <ListItemContent className="contact-list-item-content">
                    <span>mircea1997@gmail.com</span>
                  </ListItemContent>
                </ListItem>

                <ListItem style={{ padding: "5px" }}>
                  <ListItemContent className="contact-list-item-content">
                    <i className="fa fa-skype" aria-hidden="true" />
                  </ListItemContent>
                  <ListItemContent className="contact-list-item-content">
                    <span>matei_mircea97</span>
                  </ListItemContent>
                </ListItem>
                <ListItem style={{ padding: "5px", overflow: "visible" }}>
                  <ListItemContent className="contact-list-item-content">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </ListItemContent>
                  <ListItemContent className="contact-list-item-content">
                    <span>
                      https://www.linkedin.com/in/mircea-matei-588a52112/
                    </span>
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
