import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import picCircled from "../images/picCircled.png";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div
              style={{ textAllign: "left", allign: "left", paddingLeft: "0px" }}
            >
              <img
                src={picCircled}
                alt="avatar"
                style={{ height: "400px", allign: "left", paddingLeft: "0px" }}
              />
            </div>
            <h2 style={{ paddingTop: "0px" }}>Matei Mircea</h2>
            <h4 style={{ color: "grey" }}>Software Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Proactive programmer with experience in Unity Development, Adobe
              Photoshop, Audacity and other tools used in video game
              development. Currently building a career as a Game Developer.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Phone </h5>
            <p>(+40) 743-337-623</p>
            <h5>Email</h5>
            <p>mircea1997@gmail.com</p>
            <h5>LinkedIn</h5>
            <a
              href="https://www.linkedin.com/in/mircea-matei-588a52112/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>https://www.linkedin.com/in/mircea-matei-588a52112/</p>
            </a>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell col={8} className="resume-right-col">
            <h2>Education</h2>

            <Education
              startYear={2016}
              endYear={2019}
              schoolName="Faculty of Cybernetics, Statistics, and
              Economic Informatics"
              schoolDescription="Majored in Computer Science. Throughout the years I dealt with many
              individual and group projects in
              programming languages such as Java,
              Python, C++, C#, SQL, PL/SQL, R, and got
              to work in SAS Studio, Android Studio,
              Visual Studio, Eclipse, PyCharm and many
              other IDE."
              educationHref="http://csie.ase.ro/home"
            />

            <Education
              startYear={2012}
              endYear={2015}
              schoolName="Liceul Teoretic Ovidius Constanta"
              schoolDescription="During my four years of study in what was at the time a top 10 high school in Romania, I improved myself significantly, but most importantly, I have discovered what I want to do next, which in my case was to pursue a career in IT."
              educationHref="https://liceulovidius.ro/"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Work Experience</h2>
            <Experience
              startYear={"JUL2018"}
              endYear={"OCT2018"}
              jobName="Communications Professional"
              jobCompany="WPG Racing Solutions"
              jobLocation="Bucharest, Romania"
              jobDescription="I was involved in a campaign meant to find better electric suppliers for the citizens of Rhode Island. My job was to get in direct contact with the individuals and find the best supplier for their region. After that I would make them an offer and assist the client through out signing the contract."
            />
            <Experience
              startYear={"JAN2018"}
              endYear={"MAY2018"}
              jobName="Hardware Engineering Manager"
              jobCompany="EURO ECO TECH SRL"
              jobLocation="Bucharest, Romania"
              jobDescription="During a partnership with an IT Hardware Company (i.e. Inovshop) I had to mount customized smart advertising displays at different locations in Bucharest as well as train the personal at the location on how to use the equipment and troubleshoot when necessary."
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="Unity" progress={87} />
            <Skills skill="C#" progress={90} />
            <Skills skill="C++" progress={80} />
            <Skills skill="Javascript" progress={75} />
            <Skills skill="Android Studio" progress={80} />
            <Skills skill="React" progress={70} />
            <Skills skill="Java" progress={90} />
            <Skills skill="Design Patterns" progress={100} />
            <Skills skill="Data Structures" progress={95} />
            <Skills skill="Adobe Photoshop" progress={80} />
            <Skills skill="SQL" progress={70} />
            <Skills skill="PL/SQL" progress={60} />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Voluteer Experience</h2>

            <Experience
              startYear={"JUL2019"}
              endYear={"Present"}
              jobName="Logistics Specialist"
              jobCompany="TEDxBucharest"
              jobLocation="Bucharest, Romania"
              jobDescription="By volunteering within this organization I get to meet a lot of interesting people and feel like I am part of something great. The satisfaction of getting things done the right way is what keeps up the rhythm and that is such a great feeling!"
            />

            <Experience
              startYear={"NOV2016"}
              endYear={"FEB2017"}
              jobName="Team Manager"
              jobCompany="SiSC - Sindicatul Studenților din Cibernetică"
              jobLocation="Bucharest, Romania"
              jobDescription="An NGO where I met a lot of other enthusiastic students who, just like myself, wanted to change the system into something better and make the things easier for everyone."
            />

            <Experience
              startYear={"FEB2014"}
              endYear={"OCT2015"}
              jobName="Interact Pontus Euxinus Project Manager"
              jobCompany="Rotary International"
              jobLocation="Constanta, Romania"
              jobDescription="During my stay I helped in organizing multiple events with the target of helping the others. The experiences I had convinced me that everything is possible with the right people.
              Here you may find a event we organized with the purpose of getting attention towards the forgotten beautiful sights of the old town of Constanta:"
              jobHref="https://www.facebook.com/events/362014950641952/"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
