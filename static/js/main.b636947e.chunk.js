(window.webpackJsonpmyportfoliowebsite=window.webpackJsonpmyportfoliowebsite||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),i=a.n(o),l=(a(54),a(55),a(1)),c=a(4),s=a(6),m=a(7),h=a(9),d=a(8),u=a(10),p=a(25),g=a.n(p),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={imageStatus:"loading"},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"handleImageLoaded",value:function(){this.setState({imageStatus:"loaded"})}},{key:"handleImageErrored",value:function(){this.setState({imageStatus:"failed to load"})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(l.Grid,{className:"landing-grid"},r.a.createElement(l.Cell,{col:6},r.a.createElement("img",{src:g.a,onLoad:this.handleImageLoaded.bind(this),onError:this.handleImageErrored.bind(this),alt:"avatar",className:"avatar-img"})),r.a.createElement(l.Cell,{col:6},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",null,"Software Developer"),r.a.createElement("hr",null),r.a.createElement("p",null,"Unity 3D | C# | C++ | React | Git"),r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"https://www.linkedin.com/in/mircea-matei-588a52112/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})),r.a.createElement("a",{href:"https://github.com/MirceaTheHacker",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"})))))))}}]),t}(n.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About Page"))}}]),t}(n.Component),f=a(47),y=a.n(f),w=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-body"},r.a.createElement(l.Grid,{className:"contact-grid"},r.a.createElement(l.Cell,{col:6},r.a.createElement("h2",null,"Mircea Matei"),r.a.createElement("img",{src:y.a,alt:"avatar"}),r.a.createElement("p",{style:{width:"100%",margin:"auto",paddingTop:"1em"}},"Proactive programmer with experience in Unity Development, Adobe Photoshop, Audacity and other tools used in video game development. Currently building a career as a Game Developer.")),r.a.createElement(l.Cell,{col:6},r.a.createElement("h2",null,"Contact me"),r.a.createElement("hr",null),r.a.createElement("div",{className:"contact-list"},r.a.createElement(l.List,null,r.a.createElement(l.ListItem,{style:{padding:"5px"}},r.a.createElement(l.ListItemContent,{className:"contact-list-item-content"},r.a.createElement("i",{className:"fa fa-phone-square","aria-hidden":"true"})),r.a.createElement(l.ListItemContent,{className:"contact-list-item-content"},r.a.createElement("span",null,"(+40) 743-337-623"))),r.a.createElement(l.ListItem,{style:{padding:"5px"}},r.a.createElement(l.ListItemContent,{className:"contact-list-item-content"},r.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"})),r.a.createElement(l.ListItemContent,{className:"contact-list-item-content"},r.a.createElement("span",null,"mircea1997@gmail.com"))),r.a.createElement(l.ListItem,{style:{padding:"5px"}},r.a.createElement(l.ListItemContent,{className:"contact-list-item-content"},r.a.createElement("i",{className:"fa fa-skype","aria-hidden":"true"})),r.a.createElement(l.ListItemContent,{className:"contact-list-item-content"},r.a.createElement("span",null,"matei_mircea97"))),r.a.createElement(l.ListItem,{style:{padding:"5px",overflow:"visible"}},r.a.createElement(l.ListItemContent,{className:"contact-list-item-content"},r.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})),r.a.createElement(l.ListItemContent,{className:"contact-list-item-content"},r.a.createElement("span",null,"https://www.linkedin.com/in/mircea-matei-588a52112/"))))))))}}]),t}(n.Component),v=a(20),j=a.n(v),C=(n.Component,function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={activeTab:0},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"toggleCategories",value:function(){switch(this.state.activeTab){case 0:return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("div",{className:"projects-grid",style:{display:"flex",flexWrap:"wrap",textAlign:"center",marginLeft:"auto",marginRight:"auto",justifyContent:"center",width:"75%"}},r.a.createElement(l.Card,{shadow:5,className:"card"},r.a.createElement(l.CardTitle,{style:{color:"#fff",height:"200px",background:"url(https://i.udemycdn.com/course/750x422/1210008_6859.jpg) center / cover"}},"Crabbo Stabbo"),r.a.createElement(l.CardText,{style:{height:"8em"}},"It is the year 2023, humanity kept on fishing and consuming crabs until all species became extinct, or so everyone thought. The main character is Mr. Crabbo Stabbo, the last crab on earth. Help him make justice and defeat the chefs trying to cook him up."),r.a.createElement(l.CardActions,{border:!0},r.a.createElement("a",{href:"https://github.com/MirceaTheHacker/CrabboStabbo",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(l.Button,{colored:!0},"GitHub")),r.a.createElement("a",{href:"https://mateimircea.itch.io/crabbo-stabbo",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(l.Button,{colored:!0},"Live Demo")))),r.a.createElement(l.Card,{shadow:5,className:"card"},r.a.createElement(l.CardTitle,{style:{color:"#fff",height:"200px",background:"url(https://i.udemycdn.com/course/750x422/1210008_6859.jpg) center / cover"}},"Crazy Taxi Drive"),r.a.createElement(l.CardText,{style:{height:"8em"}},"A 2D game made in Unity with a team of two developers where you are in control of driving passengers to rather exotic destinations. The project can be downloaded from my GitHub."),r.a.createElement(l.CardActions,{border:!0},r.a.createElement("a",{href:"https://github.com/MirceaTheHacker/Crazy-Taxi-Drive-2D",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(l.Button,{colored:!0},"GitHub")),r.a.createElement("a",{href:"https://mateimircea.itch.io/crazy-taxi-drive",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(l.Button,{colored:!0},"Live Demo")),r.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.MirceaMatei.CrazyTaxiDriver",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(l.Button,{colored:!0},"GOOGLE PLAY"))))));case 1:return r.a.createElement("div",{className:"projects-grid",style:{display:"flex",textAlign:"center",marginLeft:"auto",marginRight:"auto",justifyContent:"center",width:"50%"}},r.a.createElement(l.Card,{shadow:5,className:"card"},r.a.createElement(l.CardTitle,{style:{color:"#fff",height:"200px",background:"url(https://www.xda-developers.com/files/2016/02/android-studio.png) center / cover"}},"Android Quiz Game"),r.a.createElement(l.CardText,{style:{height:"10em"}},'This is my team project for the year 3 class, "Mobile Application Development". It is a simple quiz game developed in Android Studio and connected to a Firebase database. It has features such as signing in, creating new accounts, different quiz categories and ranking.'),r.a.createElement(l.CardActions,{border:!0},r.a.createElement("a",{href:"https://github.com/MirceaTheHacker/Android-App-Quiz-Game",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(l.Button,{colored:!0},"GitHub")))));case 2:return r.a.createElement("div",{className:"projects-grid",style:{display:"flex",textAlign:"center",marginLeft:"auto",marginRight:"auto",justifyContent:"center",width:"50%"}},r.a.createElement(l.Card,{shadow:5,className:"card"},r.a.createElement(l.CardTitle,{style:{textAlign:"left",text:"0px",color:"white",height:"250px",background:"url(https://miro.medium.com/max/3960/1*taf9WHc3BPmhbxyKEu2jIg.png) center / cover"}},"Software for casual entertainment enhancement"),r.a.createElement(l.CardText,null,"An application designed for didactic purposes where the subjects (i.e. students) can observe the astonishing versatility of the Python programming language, learn original techniques that can be applied in any game engine and therefore set a stepping stone for a career as a game developer. Throughout the thesis\u2019s content many complex mechanisms and ways of approaching problems are thoroughly described in detail. The final product serves mainly as a resourceful way of teaching students how to build their own game from scratch in Python. Although not used in the modern video gaming industry, the library encapsulates valuable techniques applicable in any language. As a secondary goal, the thesis tries to raise awareness about the possibility of introducing a new optional subject to the curriculum meant to teach the basics of game development."),r.a.createElement(l.CardActions,{border:!0},r.a.createElement("a",{href:"https://drive.google.com/file/d/1M6RLhFZzKDXeyNgSG9wi8M-TGIFrd0gu/view?usp=sharing",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(l.Button,{colored:!0},"DOWNLOAD")),r.a.createElement("a",{href:"https://drive.google.com/file/d/1n48Awj9y2E58_R9T3-RHxlCkD5vaDHH7/view?usp=sharing",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(l.Button,{colored:!0},"DOCUMENTATION")))));default:return r.a.createElement("div",null,r.a.createElement("h1",null,"Choose a category"))}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(l.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0,style:{paddingTop:"5vh"}},r.a.createElement(l.Tab,null,r.a.createElement("div",{className:"project-tab"},"Unity")),r.a.createElement(l.Tab,null,r.a.createElement("div",{className:"project-tab"},"Android Studio")),r.a.createElement(l.Tab,null,r.a.createElement("div",{className:"project-tab"},"Python"))),r.a.createElement(l.Grid,null,r.a.createElement(l.Cell,{col:12},r.a.createElement("div",{className:"content"},this.toggleCategories()))))}}]),t}(n.Component)),k=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(l.Grid,null,r.a.createElement(l.Cell,{col:4},r.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),r.a.createElement(l.Cell,{col:8},r.a.createElement("h4",{style:{marginTop:"0px"}},this.props.schoolName,r.a.createElement("a",{href:this.props.educationHref,rel:"noopener noreferrer",target:"_blank",style:{paddingLeft:".5em"}},r.a.createElement("i",{className:"fa fa-university","aria-hidden":"true"}))),r.a.createElement("p",null,this.props.schoolDescription)))}}]),t}(n.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"showLink",value:function(){if(void 0!==this.props.jobHref)return r.a.createElement("a",{href:this.props.jobHref,rel:"noopener noreferrer",target:"_blank",style:{paddingLeft:".5em"}},"LINK")}},{key:"render",value:function(){return r.a.createElement(l.Grid,null,r.a.createElement(l.Cell,{col:2},r.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),r.a.createElement(l.Cell,{col:10},r.a.createElement("h4",{style:{marginTop:"0px",marginBottom:"0px",fontWeight:"bold"}},this.props.jobName),r.a.createElement("h6",{style:{marginTop:"0px",marginBottom:"0px",fontStyle:"italic"}},this.props.jobCompany,this.showLink()),r.a.createElement("h6",{style:{marginTop:"0px",marginBottom:"1em",fontStyle:"italic",color:"grey"}},this.props.jobLocation),r.a.createElement("p",{style:{fontSize:"1.5em"}},this.props.jobDescription)))}}]),t}(n.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(l.Grid,null,r.a.createElement(l.Cell,{col:12},r.a.createElement("div",{className:"skill"},r.a.createElement("span",null,this.props.skill),r.a.createElement(l.ProgressBar,{style:{width:"70%",paddingTop:"1em"},progress:this.props.progress}))))}}]),t}(n.Component),T=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(l.Grid,{style:{background:"white"}},r.a.createElement(l.Cell,{col:4},r.a.createElement("div",{style:{textAllign:"left",allign:"left",paddingLeft:"0px"}},r.a.createElement("img",{src:g.a,alt:"avatar",style:{width:"100%",allign:"left",paddingLeft:"0px"}})),r.a.createElement("h2",{style:{paddingTop:"0px"}},"Matei Mircea"),r.a.createElement("h4",{style:{color:"grey"}},"Software Developer"),r.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}}),r.a.createElement("p",null,"Proactive programmer with experience in Unity Development, Adobe Photoshop, Audacity and other tools used in video game development. Currently building a career as a Game Developer."),r.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}}),r.a.createElement("h5",null,"Phone "),r.a.createElement("p",null,"(+40) 743-337-623"),r.a.createElement("h5",null,"Email"),r.a.createElement("p",null,"mircea1997@gmail.com"),r.a.createElement("h5",null,"LinkedIn"),r.a.createElement("a",{href:"https://www.linkedin.com/in/mircea-matei-588a52112/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("p",null,"https://www.linkedin.com/in/mircea-matei-588a52112/")),r.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}})),r.a.createElement(l.Cell,{col:8,className:"resume-right-col"},r.a.createElement("h2",null,"Work Experience"),r.a.createElement(x,{startYear:"NOV2019",endYear:"Present",jobName:"C++ Developer",jobCompany:"Atypical Games S.R.L.",jobLocation:"Bucharest, Romania",jobDescription:"This is my second title within this company and with it I had to switch from Unity to a proprietary engine. The projects that I am working on are 3D hybrids between regular games and a simulators. The features I recently worked on vary from the implementation of AI commands to algorithms for procedurally generating trees. Every week I work here I am tasked with different challenges and figuring out their solution helps me learn a lot. I also work on UI/UX and Game Design every now and then.",jobHref:"https://www.atypicalgames.com/"}),r.a.createElement(x,{startYear:"OCT2018",endYear:"NOV2019",jobName:"Unity 3D Developer",jobCompany:"Atypical Games S.R.L.",jobLocation:"Bucharest, Romania",jobDescription:"I collaborated with my team on an outsourcing project in which we built a small but robust 3D 3rd person war simulator, getting a chance to get a good grasp on the way my coworkers code. The biggest impact I made on this project must have been on the audio side. Albeit there was a sound queue manager in place when I got there, it was not doing much good. The sounds were cutting out as soon as the priority queue would get busy (i.e. when many guns got shot at the same time). By prioritizing the sounds made by the main character and overriding less important sounds only when a sound with high priority would get triggered, the audio experience turned swiftly from an unintelligible mixture of constantly overriding each other sounds to something pleasant and satisfying. While I was not working on the sound I was mostly fixing bugs and tweaking the UI (which is a pleasure to do in Unity due to the easy to use and intuitive interface)."}),r.a.createElement(x,{startYear:"JUL2018",endYear:"OCT2018",jobName:"Communications Professional",jobCompany:"WPG Racing Solutions",jobLocation:"Bucharest, Romania",jobDescription:"I was involved in a campaign meant to find better electric suppliers for the citizens of Rhode Island. My job was to get in direct contact with the individuals and find the best supplier for their region. After that I would make them an offer and assist the client through out signing the contract."}),r.a.createElement(x,{startYear:"JAN2018",endYear:"MAY2018",jobName:"Hardware Engineering Manager",jobCompany:"EURO ECO TECH SRL",jobLocation:"Bucharest, Romania",jobDescription:"During a partnership with an IT Hardware Company (i.e. Inovshop) I had to mount customized smart advertising displays at different locations in Bucharest as well as train the personal at the location on how to use the equipment and troubleshoot when necessary."}),r.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}),r.a.createElement("h2",null,"Education"),r.a.createElement(k,{startYear:2016,endYear:2019,schoolName:"Faculty of Cybernetics, Statistics, and\r Economic Informatics",schoolDescription:"Majored in Computer Science. Throughout the years I dealt with many\r individual and group projects in\r programming languages such as Java,\r Python, C++, C#, SQL, PL/SQL, R, and got\r to work in SAS Studio, Android Studio,\r Visual Studio, Eclipse, PyCharm and many\r other IDE.",educationHref:"http://csie.ase.ro/home"}),r.a.createElement(k,{startYear:2012,endYear:2015,schoolName:"Liceul Teoretic Ovidius Constanta",schoolDescription:"During my four years of study in what was at the time a top 10 high school in Romania, I improved myself significantly, but most importantly, I have discovered what I want to do next, which in my case was to pursue a career in IT.",educationHref:"https://liceulovidius.ro/"}),r.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}),r.a.createElement("h2",null,"Skills"),r.a.createElement(N,{skill:"Unity",progress:87}),r.a.createElement(N,{skill:"C#",progress:90}),r.a.createElement(N,{skill:"C++",progress:80}),r.a.createElement(N,{skill:"Javascript",progress:45}),r.a.createElement(N,{skill:"Android Studio",progress:30}),r.a.createElement(N,{skill:"React",progress:55}),r.a.createElement(N,{skill:"Java",progress:40}),r.a.createElement(N,{skill:"Design Patterns",progress:80}),r.a.createElement(N,{skill:"Data Structures",progress:70}),r.a.createElement(N,{skill:"Adobe Photoshop",progress:30}),r.a.createElement(N,{skill:"Git",progress:85}),r.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}),r.a.createElement("h2",null,"Voluteer Experience"),r.a.createElement(x,{startYear:"JUL2019",endYear:"Present",jobName:"Logistics Specialist",jobCompany:"TEDxBucharest",jobLocation:"Bucharest, Romania",jobDescription:"By volunteering within this organization I get to meet a lot of interesting people and feel like I am part of something great. The satisfaction of getting things done the right way is what keeps up the rhythm and that is such a great feeling!"}),r.a.createElement(x,{startYear:"NOV2016",endYear:"FEB2017",jobName:"Team Manager",jobCompany:"SiSC - Sindicatul Studen\u021bilor din Cibernetic\u0103",jobLocation:"Bucharest, Romania",jobDescription:"An NGO where I met a lot of other enthusiastic students who, just like myself, wanted to change the system into something better and make the things easier for everyone."}),r.a.createElement(x,{startYear:"FEB2014",endYear:"OCT2015",jobName:"Interact Pontus Euxinus Project Manager",jobCompany:"Rotary International",jobLocation:"Constanta, Romania",jobDescription:"During my stay I helped in organizing multiple events with the target of helping the others. The experiences I had convinced me that everything is possible with the right people.\r Here you may find a event we organized with the purpose of getting attention towards the forgotten beautiful sights of the old town of Constanta:",jobHref:"https://www.facebook.com/events/362014950641952/"}))))}}]),t}(n.Component),I=function(){return r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:b}),r.a.createElement(c.a,{path:"/aboutme",component:E}),r.a.createElement(c.a,{path:"/contact",component:w}),r.a.createElement(c.a,{path:"/projects",component:C}),r.a.createElement(c.a,{path:"/resume",component:T}))},O=a(14);var L=function(){return r.a.createElement(O.a,{basename:"/Portfolio"},r.a.createElement("div",null,r.a.createElement(l.Layout,null,r.a.createElement(l.Header,{className:"header-color",title:r.a.createElement(O.b,{className:"nav-bar",style:{textDecoration:"none",color:"white",fontSize:"2em"},to:"/"},"My portfolio")},r.a.createElement(l.Navigation,null,r.a.createElement(O.b,{to:"/resume",className:"nav-bar",style:{fontSize:"2em"}},"Resume"),r.a.createElement(O.b,{to:"/projects",className:"nav-bar",style:{fontSize:"2em"}},"Projects"),r.a.createElement(O.b,{to:"/contact",className:"nav-bar",style:{fontSize:"2em"}},"Contact"))),r.a.createElement(l.Drawer,{title:r.a.createElement(O.b,{style:{textDecoration:"none",color:"black"},to:"/"},"My portfolio")},r.a.createElement(l.Navigation,null,r.a.createElement(O.b,{to:"/resume"},"Resume"),r.a.createElement(O.b,{to:"/projects"},"Projects"),r.a.createElement(O.b,{to:"/contact"},"Contact"))),r.a.createElement(l.Content,null,r.a.createElement("div",{className:"page-content"}),r.a.createElement(I,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(110),a(111);i.a.render(r.a.createElement(O.a,{basename:"/Portfolio"},r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},25:function(e,t,a){e.exports=a.p+"static/media/pic_circled_1MB.0615039b.png"},47:function(e,t,a){e.exports=a.p+"static/media/react_contact_picture.6fcddfa1.png"},49:function(e,t,a){e.exports=a(112)},54:function(e,t,a){},55:function(e,t,a){}},[[49,1,2]]]);
//# sourceMappingURL=main.b636947e.chunk.js.map