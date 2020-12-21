import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import picCircled from "../images/pic_circled_1MB.png";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid style={{ background: "white" }}>
          <Cell col={4}>
            <div
              style={{
                textAllign: "left",
                allign: "left",
                paddingLeft: "0px"
              }}
            >
              <img
                src={picCircled}
                alt="avatar"
                style={{ width: "100%", allign: "left", paddingLeft: "0px" }}
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

            <h2>Work Experience</h2>
            <Experience
              startYear={"NOV2019"}
              endYear={"Present"}
              jobName="C++ Developer"
              jobCompany="Atypical Games S.R.L."
              jobLocation="Bucharest, Romania"
              jobDescription="This is my second title within this company and with it I had to switch from Unity to a proprietary engine. The projects that I am working on are 3D hybrids between regular games and a simulators. The features I recently worked on vary from the implementation of AI commands to algorithms for procedurally generating trees. Every week I work here I am tasked with different challenges and figuring out their solution helps me learn a lot. I also work on UI/UX and Game Design every now and then."
              jobHref="https://www.atypicalgames.com/"
           />
            <Experience
              startYear={"OCT2018"}
              endYear={"NOV2019"}
              jobName="Unity 3D Developer"
              jobCompany="Atypical Games S.R.L."
              jobLocation="Bucharest, Romania"
              jobDescription="I collaborated with my team on an outsourcing project in which we built a small but robust 3D 3rd person war simulator, getting a chance to get a good grasp on the way my coworkers code. The biggest impact I made on this project must have been on the audio side. Albeit there was a sound queue manager in place when I got there, it was not doing much good. The sounds were cutting out as soon as the priority queue would get busy (i.e. when many guns got shot at the same time). By prioritizing the sounds made by the main character and overriding less important sounds only when a sound with high priority would get triggered, the audio experience turned swiftly from an unintelligible mixture of constantly overriding each other sounds to something pleasant and satisfying. While I was not working on the sound I was mostly fixing bugs and tweaking the UI (which is a pleasure to do in Unity due to the easy to use and intuitive interface)."
            />
            <Experience
              startYear={"OCT2018"}
              endYear={"Present"}
              jobName="Full stack contributor"
              jobCompany="colonist.io"
              jobLocation="Remote"
              jobDescription="Wanted to improve my web development skills while helping a company whose game I enjoy. Ended up learning a lot more than I anticipated about Typescript
              , NodeJS, Docker, AJAX and WSL. In order to get a better hold of the project I've been given the task to create a new and fun map. I chose to make a map in the shape of my country
               (i.e. Romania) and respect the geographical topology by using Ore hexes where the Carpathian Mountain Chain is at, creating the first map in their repertoire with this feature. After working on an algorithm for randomizing the map tiles and fixing some bugs, I dedicated some time towards helping the other developers who had issues setting
                 up the environment on Windows. This project is optimized to run on Linux and because of that there are plenty of issues one has to face in order to get it to run properly on
                  Windows. I ended up finding a solution that would get the best of both worlds: have the IDE on Windows, but run the whole project inside WSL (i.e. Windows Subsystem for Linux).
                   This way the interface the programmer interacts with the code remains the same, but the code runs on the Linux kernel."
              jobHref="https://colonist.io/"
            />
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
            <h2>Skills</h2>
            <Skills skill="Unity" progress={87} />
            <Skills skill="C#" progress={90} />
            <Skills skill="C++" progress={80} />
            <Skills skill="Javascript" progress={45} />
            <Skills skill="Android Studio" progress={30} />
            <Skills skill="React" progress={55} />
            <Skills skill="Java" progress={40} />
            <Skills skill="Design Patterns" progress={80} />
            <Skills skill="Data Structures" progress={70} />
            <Skills skill="Adobe Photoshop" progress={30} />
            <Skills skill="Git" progress={85} />

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
