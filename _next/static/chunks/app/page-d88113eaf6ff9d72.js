(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1754:(e,s,t)=>{"use strict";t.d(s,{D:()=>l,w:()=>o});var a=t(5155),n=t(2115),r=t(7232);let i=(0,n.createContext)({isDark:!1,toggleTheme:()=>{},theme:r._k});function o(e){let{children:s}=e,[t,o]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=localStorage.getItem("theme");e?o("dark"===e):o(window.matchMedia("(prefers-color-scheme: dark)").matches)},[]),(0,a.jsx)(i.Provider,{value:{isDark:t,toggleTheme:()=>{o(e=>{let s=!e;return localStorage.setItem("theme",s?"dark":"light"),s})},theme:t?r.a5:r._k},children:s})}function l(){return(0,n.useContext)(i)}},2817:(e,s,t)=>{Promise.resolve().then(t.bind(t,4763))},4763:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>ef});var a=t(5155),n=t(2553),r=t(2115),i=t(9136),o=t.n(i);let l=n.Ay.div`
  position: relative;
  text-align: center;
`,c=n.Ay.img`
  width: 100%;
`,d=n.Ay.div`
  position: absolute;
  width: 100%;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
`,p=n.Ay.h1`
  font-family: "Special Elite", cursive;
  color: #333333;
`,h=n.Ay.h4`
  font-family: "Baloo 2", cursive;
  opacity: 0.75;
  color: #333333;
`,m=()=>{let[e,s]=(0,r.useState)(!1),t=(0,r.useRef)(null);return(0,r.useEffect)(()=>{t.current?.complete&&s(!0)},[]),(0,a.jsxs)(l,{children:[(0,a.jsxs)("picture",{children:[(0,a.jsx)("source",{media:"(max-width: 480px)",srcSet:"/assets/cover/cover-mobile.jpg"}),(0,a.jsx)("source",{media:"(max-width: 800px)",srcSet:"/assets/cover/cover-tablet.jpg"}),(0,a.jsx)(c,{ref:t,src:"/assets/cover/cover-pc.jpg",onLoad:()=>s(!0),alt:"Cover"})]}),e&&(0,a.jsxs)(d,{children:[(0,a.jsx)(p,{children:"Dacharat Pankong"}),(0,a.jsx)(h,{children:(0,a.jsx)(o(),{onInit:e=>{e.typeString("Software Developer").start()},options:{delay:50}})})]})]})};var g=t(3530),x=t(898);let j=n.Ay.span`
  cursor: pointer;
  z-index: 1;
`,u=n.Ay.div`
  position: fixed;
  padding-top: 50px;
  right: 0;
  top: 0;
  height: 100%;
  width: ${e=>e.$isOpen?"240px":"0"};
  background-color: ${e=>{let{theme:s}=e;return s.bg}};
  box-shadow: -2px 2px 2px ${e=>{let{theme:s}=e;return s.cardShadow}};
  transition: all 300ms;
  overflow: hidden;
`,b=(0,n.Ay)(g.N_).attrs({spy:!0,smooth:!0,duration:800})`
  cursor: pointer;
  display: block;
  padding: 15px 25px;
  font-size: 1.5em;
  color: inherit;
  text-decoration: none;
  &:hover {
    color: inherit;
    text-decoration: none;
  }
`,f=()=>{let[e,s]=(0,r.useState)(!1),t=()=>s(e=>!e);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j,{onClick:t,children:e?(0,a.jsx)(x.QCr,{size:24}):(0,a.jsx)(x.OXb,{size:24})}),(0,a.jsxs)(u,{$isOpen:e,children:[(0,a.jsx)(b,{onClick:t,to:"about",offset:-80,children:"About"}),(0,a.jsx)(b,{onClick:t,to:"experience",offset:-80,children:"Experience"}),(0,a.jsx)(b,{onClick:t,to:"projects",offset:-80,children:"Projects"}),(0,a.jsx)(b,{onClick:t,to:"contact",offset:-80,children:"Contact"})]})]})};var k=t(1754),v=t(6092);let y=n.Ay.nav.attrs({className:"navbar navbar-light navbar-expand-md sticky-top"})`
  background-color: ${e=>{let{theme:s}=e;return s.bg}};
  color: ${e=>{let{theme:s}=e;return s.text}};
  box-shadow: 0px 1px 5px ${e=>{let{theme:s}=e;return s.navShadow}};
  padding: 3px !important;
  transition: all 300ms;
`,w=n.Ay.span.attrs({className:"nav-item"})`
  font-size: 18px;
`,N=n.Ay.a.attrs({className:"navbar-brand fw-bold"})`
  margin: 5px 15px;
  cursor: pointer;
  color: ${e=>{let{theme:s}=e;return s.text}} !important;
`,S=(0,n.Ay)(g.N_).attrs({spy:!0,smooth:!0,duration:800})`
  cursor: pointer;
  padding: 12px;
  transition: background 200ms;
  color: inherit !important;
  text-decoration: none;
  &:hover {
    background-color: ${e=>{let{theme:s}=e;return s.bgHover}};
    color: inherit;
    text-decoration: none;
  }
`,A=n.Ay.button`
  background: none;
  border: 1px solid ${e=>{let{theme:s}=e;return s.border}};
  border-radius: 6px;
  color: ${e=>{let{theme:s}=e;return s.text}};
  cursor: pointer;
  padding: 4px 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  transition: all 200ms;
  &:hover {
    background-color: ${e=>{let{theme:s}=e;return s.bgHover}};
  }
`,P=()=>{let{isDark:e,toggleTheme:s}=(0,k.D)();return(0,a.jsx)(y,{children:(0,a.jsxs)("div",{className:"container-fluid mx-md-4",children:[(0,a.jsx)(N,{href:"/",children:"Dacharat"}),(0,a.jsxs)("div",{className:"navbar-nav d-none d-md-flex align-items-center",children:[(0,a.jsx)(S,{to:"about",offset:-80,children:(0,a.jsx)(w,{children:" About "})}),(0,a.jsx)(S,{to:"experience",offset:-80,children:(0,a.jsx)(w,{children:" Experience "})}),(0,a.jsx)(S,{to:"projects",offset:-80,children:(0,a.jsx)(w,{children:" Projects "})}),(0,a.jsx)(S,{to:"contact",offset:-80,children:(0,a.jsx)(w,{children:" Contact "})}),(0,a.jsx)(A,{onClick:s,"aria-label":"Toggle dark mode",children:e?(0,a.jsx)(v.uSI,{}):(0,a.jsx)(v.h50,{})})]}),(0,a.jsxs)("div",{className:"me-4 mt-1 d-flex d-md-none align-items-center gap-2",children:[(0,a.jsx)(A,{onClick:s,"aria-label":"Toggle dark mode",children:e?(0,a.jsx)(v.uSI,{}):(0,a.jsx)(v.h50,{})}),(0,a.jsx)(f,{})]})]})})};var I=t(5239);let z=n.Ay.div.attrs({className:"text-center container"})`
  margin-top: 15px;
  font-size: 30px;
`,C=e=>{let{icon:s,name:t,component:n}=e;return(0,a.jsxs)("div",{className:"mt-3",children:[(0,a.jsx)(z,{children:(0,a.jsxs)("p",{children:[(0,a.jsx)(s,{size:30})," ",t]})}),(0,a.jsx)("hr",{}),n,(0,a.jsx)("hr",{})]})},$=n.Ay.p`
  border-radius: 10px;
  background-color: ${e=>{let{theme:s}=e;return s.bgSecondary}};
  padding: 12px;
  width: 90%;
  margin: auto;
`,E=()=>(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-md-6 text-center",children:(0,a.jsx)(I.default,{src:"/assets/profile.png",alt:"MyPicture",width:300,height:300,style:{borderRadius:"50%",width:"70%",height:"auto",padding:"0.7em"}})}),(0,a.jsx)("div",{className:"col-md-6 m-auto text-center",children:(0,a.jsxs)($,{children:[" ","Hi, I'm ",(0,a.jsx)("b",{children:"Dacharat"}),". I'm currently a Software Engineer student at Kasetsart University. Nowadays, technology is growing rapidly. I want to develop a modern Software for human."]})})]}),D=()=>(0,a.jsx)(C,{icon:x.NBi,name:"About Me",component:(0,a.jsx)(E,{})}),F=n.Ay.b.attrs({className:"ms-3"})`
  float: left;
  font-size: 18px;
`,T=n.Ay.p.attrs({className:"me-3"})`
  float: right;
  font-size: 18px;
`,R=e=>{let{left:s,right:t}=e;return(0,a.jsxs)("div",{className:"clearfix",children:[(0,a.jsxs)(F,{children:[s,":"]}),(0,a.jsx)(T,{children:t}),(0,a.jsx)("br",{})]})},O=()=>(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col-md",children:[(0,a.jsx)(R,{left:"Firstname",right:"Dacharat"}),(0,a.jsx)(R,{left:"Lastname",right:"Pankong"}),(0,a.jsx)(R,{left:"Nickname",right:"Jack"})]}),(0,a.jsxs)("div",{className:"col-md",children:[(0,a.jsx)(R,{left:"Birthday",right:"28 Feb 1998"}),(0,a.jsx)(R,{left:"Age",right:(()=>{let e=new Date(1998,2,28);return Math.abs(new Date(Date.now()-e.getTime()).getUTCFullYear()-1970)})().toString()}),(0,a.jsx)(R,{left:"Nationality",right:"Thailand"})]})]}),G=()=>(0,a.jsx)(C,{icon:x.k89,name:"Personal Information",component:(0,a.jsx)(O,{})}),L=n.Ay.div.attrs({className:"p-3 m-2"})`
  box-shadow: -1px -1px 10px 2px ${e=>{let{theme:s}=e;return s.cardShadow}};
  text-align: left;
`,_=e=>{let{head:s,component:t}=e;return(0,a.jsxs)(L,{children:[(0,a.jsx)("h4",{className:"pt-2 ps-3",children:s}),(0,a.jsx)("hr",{}),t]})},M=e=>{let{body:s}=e;return(0,a.jsx)("div",{className:"row text-center",children:s.map((e,s)=>(0,a.jsxs)("div",{className:"col s4 m2",children:[(0,a.jsx)(I.default,{src:e.image,alt:e.name,width:90,height:90,style:{objectFit:"contain"},loading:"lazy"}),(0,a.jsx)("p",{children:e.name})]},s))})},J=e=>{let{head:s,body:t}=e;return(0,a.jsx)(_,{head:s,component:(0,a.jsx)(M,{body:t})})};var Q=t(7733);let B={zoom:{hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1}},flip:{hidden:{opacity:0,rotateX:-90},visible:{opacity:1,rotateX:0}},pulse:{hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1}},fadeUp:{hidden:{opacity:0,y:30},visible:{opacity:1,y:0}}};function U(e){let{children:s,variant:t="fadeUp",delay:n=0}=e;return(0,a.jsx)(Q.P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-50px"},transition:{duration:.5,delay:n},variants:B[t],children:s})}let H=[{head:"Language",data:[{name:"C",image:"/assets/skills/language/c.png"},{name:"Java",image:"/assets/skills/language/java.png"},{name:"Javascript",image:"/assets/skills/language/javascript.png"},{name:"Python",image:"/assets/skills/language/python.png"},{name:"Ruby",image:"/assets/skills/language/ruby.png"}]},{head:"Front-end",data:[{name:"ReactJS",image:"/assets/skills/front-end/react.png"},{name:"Pug",image:"/assets/skills/front-end/pug.png"}]},{head:"Back-end",data:[{name:"NodeJS & Express",image:"/assets/skills/back-end/node.png"},{name:"Ruby on Rails",image:"/assets/skills/back-end/rails.png"},{name:"Django",image:"/assets/skills/back-end/django.png"}]},{head:"Mobile",data:[{name:"Android Studio",image:"/assets/skills/mobile/android.png"},{name:"Xcode",image:"/assets/skills/mobile/xcode.jpg"},{name:"React Native",image:"/assets/skills/mobile/react-native.png"}]},{head:"Database",data:[{name:"Firebase",image:"/assets/skills/database/firebase.png"},{name:"MongoDB",image:"/assets/skills/database/mongodb.png"},{name:"PostgreSQL",image:"/assets/skills/database/postgreSQL.png"}]},{head:"Tools",data:[{name:"Github",image:"/assets/skills/tools/github.png"},{name:"Gitlab",image:"/assets/skills/tools/gitlab.png"},{name:"Slack",image:"/assets/skills/tools/slack.png"},{name:"Asana",image:"/assets/skills/tools/asana.png"}]}],X=()=>(0,a.jsx)(a.Fragment,{children:H.map((e,s)=>(0,a.jsx)(U,{variant:"zoom",children:(0,a.jsx)(J,{head:e.head,body:e.data})},s))}),q=()=>(0,a.jsx)(C,{icon:x.E7i,name:"Skill",component:(0,a.jsx)(X,{})}),K=()=>(0,a.jsxs)("div",{className:"mt-3 mb-3",children:[(0,a.jsx)(D,{}),(0,a.jsx)(G,{}),(0,a.jsx)(q,{})]}),V=e=>{let{image:s,describe:t}=e;return(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col m4 text-center",children:(0,a.jsx)(I.default,{src:s,alt:"Experience",width:400,height:250,style:{width:"70%",height:"auto"},loading:"lazy"})}),(0,a.jsx)("div",{className:"col m8",children:t.map((e,s)=>(0,a.jsx)("li",{children:e},s))})]})},W=e=>{let{data:s}=e;return(0,a.jsx)(_,{head:s.name,component:(0,a.jsx)(V,{image:s.image,describe:s.describe})})},Y=[{name:"Internship at Glazziq",image:"/assets/experiences/glazziq.jpg",describe:["Eyewear e-commerce","04/06/2018 - 03/08/2018","Ruby on rails","React","Slim","PostgreSQL"]},{name:"Internship at Offenburg University",image:"/assets/experiences/offenburg_university.jpg",describe:["Deep Learning, Face Recognition","03/06/2019 - 02/08/2019","Python","OpenCV, Tensorflow, Keras","Django Framework","PostgreSQL"]},{name:"Internship at Wongnai Media Co.,Ltd.",image:"/assets/experiences/wongnai.jpg",describe:["Software Engineer, Backend [Growth squad]","13/08/2019 - 20/12/2019","Java, Python, Javascript, Typescript","RESTful API, gRPC, graphQL","React","Express","Spring Framework","MySQL, phpMyAdmin"]}],Z=()=>(0,a.jsx)(a.Fragment,{children:[...Y].reverse().map((e,s)=>(0,a.jsx)(U,{variant:"flip",children:(0,a.jsx)(W,{data:e})},s))}),ee=()=>(0,a.jsx)(C,{icon:x.vd0,name:"Experience",component:(0,a.jsx)(Z,{})}),es=()=>(0,a.jsx)("div",{className:"mt-3 mb-3",children:(0,a.jsx)(ee,{})}),et=n.Ay.a`
  @media (min-width: 769px) {
    transition: max-width 0.4s;
    max-width: 45px;
  }
  color: ${e=>{let{theme:s}=e;return s.text}} !important;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  border-radius: 200px;
  border: 1px solid ${e=>{let{theme:s}=e;return s.border}};
  padding: 2px 7px;
  :hover {
    text-decoration: none;
    border-radius: 100px;
    overflow: hidden;
    white-space: nowrap;
    max-width: 175px;
    span {
      display: initial;
    }
  }
`,ea=n.Ay.span`
  @media (max-width: 768px) {
    display: initial;
  }
  item-align: center;
  justify-content: center;
  margin: 0px 10px;
  display: none;
`,en=e=>{let{url:s}=e;return(0,a.jsxs)(et,{href:s,children:[(0,a.jsx)(x.hL4,{size:32}),(0,a.jsx)(ea,{children:"See in Github"})]})},er=n.Ay.p`
  text-indent: 7%;
`,ei=n.Ay.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`,eo=e=>{let{data:s}=e;return(0,a.jsxs)("div",{className:"ps-2",children:[(0,a.jsx)(er,{children:s.describe}),(0,a.jsxs)(ei,{children:[(0,a.jsx)(en,{url:s.url}),(0,a.jsx)("div",{className:"mt-3",children:s.technology.map((e,s)=>(0,a.jsx)(I.default,{src:e,alt:"technology",width:30,height:30,style:{marginLeft:"5px",marginRight:"5px",objectFit:"contain"}},s))})]})]})},el=e=>{let{data:s}=e;return(0,a.jsx)(_,{head:s.name,component:(0,a.jsx)(eo,{data:s})})},ec=[{name:"Face Emotion Result",describe:"Internship project that maintain the University project which can predict emotion to recognize the face and record to the database and develop a web application to show the result from the database as a graph.",url:"https://github.com/dacharat/face_emotion_result",images:[],technology:["/assets/skills/language/python.png","/assets/skills/back-end/django.png","/assets/skills/database/postgreSQL.png","/assets/skills/python-tools/opencv.png","/assets/skills/python-tools/tensorflow.png","/assets/skills/python-tools/keras.png","/assets/skills/tools/nvidia.png"]},{name:"Otopaholic",describe:"Group project to create an e-commerce web application that sells OTOP products. This project working on full-stack web developer use ReactJS and Express.",url:"https://github.com/InsanelyGood/InsanelyGood-OTOP",images:["/assets/projects/otopaholic/first.png","/assets/projects/otopaholic/second.png","/assets/projects/otopaholic/third.png","/assets/projects/otopaholic/fourth.png","/assets/projects/otopaholic/fifth.png","/assets/projects/otopaholic/sixth.png"],technology:["/assets/skills/language/javascript.png","/assets/skills/front-end/react.png","/assets/skills/back-end/node.png","/assets/skills/database/mongodb.png","/assets/skills/tools/gitlab.png","/assets/skills/tools/asana.png"]},{name:"IP subnet calculator",describe:"Group project to create IP subnet calculator.",url:"https://github.com/dacharat/IP-subnet-calculator",images:["/assets/projects/ip-subnet/first.png","/assets/projects/ip-subnet/second.png"],technology:["/assets/skills/language/javascript.png","/assets/skills/front-end/react.png","/assets/skills/database/firebase.png"]},{name:"Math Master Game",describe:"Final project in OOP class, use Java to make application.",url:"https://github.com/dacharat/Math-Master-Game",images:["/assets/projects/math-game/first.png","/assets/projects/math-game/second.png","/assets/projects/math-game/third.png","/assets/projects/math-game/fourth.png"],technology:["/assets/skills/language/java.png","/assets/skills/tools/javafx.png","/assets/skills/database/mysqlAdmin.png"]},{name:"Took-took-4.0",describe:"Group project to create IoT(Internet of Things) application.",url:"https://github.com/took-took-4/took-took4",images:["/assets/projects/took-took/first.png","/assets/projects/took-took/second.png"],technology:["/assets/skills/language/javascript.png","/assets/skills/front-end/html.png","/assets/skills/front-end/css.png"]}],ed=()=>(0,a.jsx)(a.Fragment,{children:ec.map((e,s)=>(0,a.jsx)(U,{variant:"pulse",children:(0,a.jsx)(el,{data:e})},s))}),ep=()=>(0,a.jsx)(C,{icon:x.XOj,name:"Projects",component:(0,a.jsx)(ed,{})}),eh=()=>(0,a.jsx)("div",{className:"mt-3 mb-3",children:(0,a.jsx)(ep,{})}),em=n.Ay.a.attrs({className:"btn m-2"})`
  text-align: center;
  font-size: 20px !important;
  border-color: ${e=>{let{theme:s}=e;return s.border}} !important;
  color: ${e=>{let{theme:s}=e;return s.text}} !important;
  border-radius: 30px !important;
`,eg=e=>{let{setting:s}=e,t=s.icon;return(0,a.jsx)("div",{className:"col-md-3 col-6 text-center",children:(0,a.jsxs)(em,{href:s.href,children:[(0,a.jsx)(t,{className:"me-2"}),s.name]})})},ex=[{name:"Github",href:"https://github.com/dacharat",icon:x.g3s},{name:"Resume",href:"https://goo.gl/96buwB",icon:x.kl1},{name:"Email",href:"mailto:dacharat.p@ku.th?subject=Hi Dacharat, I contacted you from Github",icon:x.T35},{name:"Facebook",href:"https://facebook.com/dacharat.pankong",icon:x.D2F}],ej=()=>(0,a.jsx)("div",{className:"row",children:ex.map((e,s)=>(0,a.jsx)(eg,{setting:e},s))}),eu=()=>(0,a.jsx)("div",{className:"mt-3 mb-3",children:(0,a.jsx)(C,{icon:x.toK,name:"Contact",component:(0,a.jsx)(ej,{})})}),eb=n.Ay.div.attrs({className:"container"})`
  max-width: 900px !important;
`;function ef(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(P,{}),(0,a.jsx)(m,{}),(0,a.jsxs)(eb,{children:[(0,a.jsx)("section",{id:"about",children:(0,a.jsx)(K,{})}),(0,a.jsx)("section",{id:"experience",children:(0,a.jsx)(es,{})}),(0,a.jsx)("section",{id:"projects",children:(0,a.jsx)(eh,{})}),(0,a.jsx)("section",{id:"contact",children:(0,a.jsx)(eu,{})})]})]})}},7232:(e,s,t)=>{"use strict";t.d(s,{_k:()=>n,a5:()=>r,zy:()=>i});var a=t(2553);let n={bg:"#ffffff",bgSecondary:"#e7e7e7",bgHover:"#f7f7f7",text:"#000000",navShadow:"grey",cardShadow:"rgba(0, 0, 0, 0.1)",border:"black"},r={bg:"#1a1a2e",bgSecondary:"#16213e",bgHover:"#0f3460",text:"#e0e0e0",navShadow:"#000000",cardShadow:"rgba(255, 255, 255, 0.05)",border:"#e0e0e0"},i=(0,a.DU)`
  body {
    background-color: ${e=>{let{theme:s}=e;return s.bg}};
    color: ${e=>{let{theme:s}=e;return s.text}};
    transition: background-color 300ms, color 300ms;
  }
`}},e=>{e.O(0,[711,87,553,180,441,255,358],()=>e(e.s=2817)),_N_E=e.O()}]);