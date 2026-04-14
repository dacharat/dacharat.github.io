(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2817:(e,s,a)=>{Promise.resolve().then(a.bind(a,4763))},4763:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>ej});var t=a(5155),n=a(2553),i=a(2115),o=a(9136),r=a.n(o);let l=n.Ay.div`
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
`,h=n.Ay.h4`
  font-family: "Baloo 2", cursive;
  opacity: 0.75;
`,m=()=>{let[e,s]=(0,i.useState)(!1),a=(0,i.useRef)(null);return(0,i.useEffect)(()=>{a.current?.complete&&s(!0)},[]),(0,t.jsxs)(l,{children:[(0,t.jsxs)("picture",{children:[(0,t.jsx)("source",{media:"(max-width: 480px)",srcSet:"/assets/cover/cover-mobile.jpg"}),(0,t.jsx)("source",{media:"(max-width: 800px)",srcSet:"/assets/cover/cover-tablet.jpg"}),(0,t.jsx)(c,{ref:a,src:"/assets/cover/cover-pc.jpg",onLoad:()=>s(!0),alt:"Cover"})]}),e&&(0,t.jsxs)(d,{children:[(0,t.jsx)(p,{children:"Dacharat Pankong"}),(0,t.jsx)(h,{children:(0,t.jsx)(r(),{onInit:e=>{e.typeString("Software Developer").start()},options:{delay:50}})})]})]})};var g=a(3530),x=a(898);let j=n.Ay.span`
  cursor: pointer;
  z-index: 1;
`,u=n.Ay.div`
  position: fixed;
  padding-top: 50px;
  right: 0;
  top: 0;
  height: 100%;
  width: ${e=>e.$isOpen?"240px":"0"};
  background-color: white;
  box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.2);
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
`,f=()=>{let[e,s]=(0,i.useState)(!1),a=()=>s(e=>!e);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(j,{onClick:a,children:e?(0,t.jsx)(x.QCr,{size:24}):(0,t.jsx)(x.OXb,{size:24})}),(0,t.jsxs)(u,{$isOpen:e,children:[(0,t.jsx)(b,{onClick:a,to:"about",offset:-80,children:"About"}),(0,t.jsx)(b,{onClick:a,to:"experience",offset:-80,children:"Experience"}),(0,t.jsx)(b,{onClick:a,to:"projects",offset:-80,children:"Projects"}),(0,t.jsx)(b,{onClick:a,to:"contact",offset:-80,children:"Contact"})]})]})},k=n.Ay.nav.attrs({className:"navbar navbar-light navbar-expand-md sticky-top"})`
  background-color: white;
  box-shadow: 0px 1px 5px grey;
  padding: 3px !important;
  transition: all 300ms;
`,v=n.Ay.span.attrs({className:"nav-item"})`
  font-size: 18px;
`,y=n.Ay.a.attrs({className:"navbar-brand fw-bold"})`
  margin: 5px 15px;
  cursor: pointer;
`,w=(0,n.Ay)(g.N_).attrs({spy:!0,smooth:!0,duration:800})`
  cursor: pointer;
  padding: 12px;
  transition: background 200ms;
  color: inherit;
  text-decoration: none;
  &:hover {
    background-color: #f7f7f7;
    color: inherit;
    text-decoration: none;
  }
`,N=()=>(0,t.jsx)(k,{children:(0,t.jsxs)("div",{className:"container-fluid mx-md-4",children:[(0,t.jsx)(y,{href:"/",children:"Dacharat"}),(0,t.jsxs)("div",{className:"navbar-nav d-none d-md-flex",children:[(0,t.jsx)(w,{to:"about",offset:-80,children:(0,t.jsx)(v,{children:" About "})}),(0,t.jsx)(w,{to:"experience",offset:-80,children:(0,t.jsx)(v,{children:" Experience "})}),(0,t.jsx)(w,{to:"projects",offset:-80,children:(0,t.jsx)(v,{children:" Projects "})}),(0,t.jsx)(w,{to:"contact",offset:-80,children:(0,t.jsx)(v,{children:" Contact "})})]}),(0,t.jsx)("div",{className:"me-4 mt-1 d-flex d-md-none",children:(0,t.jsx)(f,{})})]})});var A=a(5239);let S=n.Ay.div.attrs({className:"text-center container"})`
  margin-top: 15px;
  font-size: 30px;
`,P=e=>{let{icon:s,name:a,component:n}=e;return(0,t.jsxs)("div",{className:"mt-3",children:[(0,t.jsx)(S,{children:(0,t.jsxs)("p",{children:[(0,t.jsx)(s,{size:30})," ",a]})}),(0,t.jsx)("hr",{}),n,(0,t.jsx)("hr",{})]})},z=n.Ay.p`
  border-radius: 10px;
  background-color: #e7e7e7;
  padding: 12px;
  width: 90%;
  margin: auto;
`,E=()=>(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-6 text-center",children:(0,t.jsx)(A.default,{src:"/assets/profile.png",alt:"MyPicture",width:300,height:300,style:{borderRadius:"50%",width:"70%",height:"auto",padding:"0.7em"}})}),(0,t.jsx)("div",{className:"col-md-6 m-auto text-center",children:(0,t.jsxs)(z,{children:[" ","Hi, I'm ",(0,t.jsx)("b",{children:"Dacharat"}),". I'm currently a Software Engineer student at Kasetsart University. Nowadays, technology is growing rapidly. I want to develop a modern Software for human."]})})]}),F=()=>(0,t.jsx)(P,{icon:x.NBi,name:"About Me",component:(0,t.jsx)(E,{})}),I=n.Ay.b.attrs({className:"ms-3"})`
  float: left;
  font-size: 18px;
`,C=n.Ay.p.attrs({className:"me-3"})`
  float: right;
  font-size: 18px;
`,R=e=>{let{left:s,right:a}=e;return(0,t.jsxs)("div",{className:"clearfix",children:[(0,t.jsxs)(I,{children:[s,":"]}),(0,t.jsx)(C,{children:a}),(0,t.jsx)("br",{})]})},D=()=>(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col-md",children:[(0,t.jsx)(R,{left:"Firstname",right:"Dacharat"}),(0,t.jsx)(R,{left:"Lastname",right:"Pankong"}),(0,t.jsx)(R,{left:"Nickname",right:"Jack"})]}),(0,t.jsxs)("div",{className:"col-md",children:[(0,t.jsx)(R,{left:"Birthday",right:"28 Feb 1998"}),(0,t.jsx)(R,{left:"Age",right:(()=>{let e=new Date(1998,2,28);return Math.abs(new Date(Date.now()-e.getTime()).getUTCFullYear()-1970)})().toString()}),(0,t.jsx)(R,{left:"Nationality",right:"Thailand"})]})]}),O=()=>(0,t.jsx)(P,{icon:x.k89,name:"Personal Information",component:(0,t.jsx)(D,{})}),G=n.Ay.div.attrs({className:"p-3 m-2"})`
  box-shadow: -1px -1px 10px 2px rgba(0, 0, 0, 0.1);
  text-align: left;
`,L=e=>{let{head:s,component:a}=e;return(0,t.jsxs)(G,{children:[(0,t.jsx)("h4",{className:"pt-2 ps-3",children:s}),(0,t.jsx)("hr",{}),a]})},T=e=>{let{body:s}=e;return(0,t.jsx)("div",{className:"row text-center",children:s.map((e,s)=>(0,t.jsxs)("div",{className:"col s4 m2",children:[(0,t.jsx)(A.default,{src:e.image,alt:e.name,width:90,height:90,style:{objectFit:"contain"},loading:"lazy"}),(0,t.jsx)("p",{children:e.name})]},s))})},M=e=>{let{head:s,body:a}=e;return(0,t.jsx)(L,{head:s,component:(0,t.jsx)(T,{body:a})})};var _=a(7733);let J={zoom:{hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1}},flip:{hidden:{opacity:0,rotateX:-90},visible:{opacity:1,rotateX:0}},pulse:{hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1}},fadeUp:{hidden:{opacity:0,y:30},visible:{opacity:1,y:0}}};function Q(e){let{children:s,variant:a="fadeUp",delay:n=0}=e;return(0,t.jsx)(_.P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-50px"},transition:{duration:.5,delay:n},variants:J[a],children:s})}let B=[{head:"Language",data:[{name:"C",image:"/assets/skills/language/c.png"},{name:"Java",image:"/assets/skills/language/java.png"},{name:"Javascript",image:"/assets/skills/language/javascript.png"},{name:"Python",image:"/assets/skills/language/python.png"},{name:"Ruby",image:"/assets/skills/language/ruby.png"}]},{head:"Front-end",data:[{name:"ReactJS",image:"/assets/skills/front-end/react.png"},{name:"Pug",image:"/assets/skills/front-end/pug.png"}]},{head:"Back-end",data:[{name:"NodeJS & Express",image:"/assets/skills/back-end/node.png"},{name:"Ruby on Rails",image:"/assets/skills/back-end/rails.png"},{name:"Django",image:"/assets/skills/back-end/django.png"}]},{head:"Mobile",data:[{name:"Android Studio",image:"/assets/skills/mobile/android.png"},{name:"Xcode",image:"/assets/skills/mobile/xcode.jpg"},{name:"React Native",image:"/assets/skills/mobile/react-native.png"}]},{head:"Database",data:[{name:"Firebase",image:"/assets/skills/database/firebase.png"},{name:"MongoDB",image:"/assets/skills/database/mongodb.png"},{name:"PostgreSQL",image:"/assets/skills/database/postgreSQL.png"}]},{head:"Tools",data:[{name:"Github",image:"/assets/skills/tools/github.png"},{name:"Gitlab",image:"/assets/skills/tools/gitlab.png"},{name:"Slack",image:"/assets/skills/tools/slack.png"},{name:"Asana",image:"/assets/skills/tools/asana.png"}]}],U=()=>(0,t.jsx)(t.Fragment,{children:B.map((e,s)=>(0,t.jsx)(Q,{variant:"zoom",children:(0,t.jsx)(M,{head:e.head,body:e.data})},s))}),X=()=>(0,t.jsx)(P,{icon:x.E7i,name:"Skill",component:(0,t.jsx)(U,{})}),q=()=>(0,t.jsxs)("div",{className:"mt-3 mb-3",children:[(0,t.jsx)(F,{}),(0,t.jsx)(O,{}),(0,t.jsx)(X,{})]}),K=e=>{let{image:s,describe:a}=e;return(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col m4 text-center",children:(0,t.jsx)(A.default,{src:s,alt:"Experience",width:400,height:250,style:{width:"70%",height:"auto"},loading:"lazy"})}),(0,t.jsx)("div",{className:"col m8",children:a.map((e,s)=>(0,t.jsx)("li",{children:e},s))})]})},$=e=>{let{data:s}=e;return(0,t.jsx)(L,{head:s.name,component:(0,t.jsx)(K,{image:s.image,describe:s.describe})})},H=[{name:"Internship at Glazziq",image:"/assets/experiences/glazziq.jpg",describe:["Eyewear e-commerce","04/06/2018 - 03/08/2018","Ruby on rails","React","Slim","PostgreSQL"]},{name:"Internship at Offenburg University",image:"/assets/experiences/offenburg_university.jpg",describe:["Deep Learning, Face Recognition","03/06/2019 - 02/08/2019","Python","OpenCV, Tensorflow, Keras","Django Framework","PostgreSQL"]},{name:"Internship at Wongnai Media Co.,Ltd.",image:"/assets/experiences/wongnai.jpg",describe:["Software Engineer, Backend [Growth squad]","13/08/2019 - 20/12/2019","Java, Python, Javascript, Typescript","RESTful API, gRPC, graphQL","React","Express","Spring Framework","MySQL, phpMyAdmin"]}],V=()=>(0,t.jsx)(t.Fragment,{children:[...H].reverse().map((e,s)=>(0,t.jsx)(Q,{variant:"flip",children:(0,t.jsx)($,{data:e})},s))}),W=()=>(0,t.jsx)(P,{icon:x.vd0,name:"Experience",component:(0,t.jsx)(V,{})}),Y=()=>(0,t.jsx)("div",{className:"mt-3 mb-3",children:(0,t.jsx)(W,{})}),Z=n.Ay.a`
  @media (min-width: 769px) {
    transition: max-width 0.4s;
    max-width: 45px;
  }
  color: black !important;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  border-radius: 200px;
  border: 1px solid black;
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
`,ee=n.Ay.span`
  @media (max-width: 768px) {
    display: initial;
  }
  item-align: center;
  justify-content: center;
  margin: 0px 10px;
  display: none;
`,es=e=>{let{url:s}=e;return(0,t.jsxs)(Z,{href:s,children:[(0,t.jsx)(x.hL4,{size:32}),(0,t.jsx)(ee,{children:"See in Github"})]})},ea=n.Ay.p`
  text-indent: 7%;
`,et=n.Ay.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`,en=e=>{let{data:s}=e;return(0,t.jsxs)("div",{className:"ps-2",children:[(0,t.jsx)(ea,{children:s.describe}),(0,t.jsxs)(et,{children:[(0,t.jsx)(es,{url:s.url}),(0,t.jsx)("div",{className:"mt-3",children:s.technology.map((e,s)=>(0,t.jsx)(A.default,{src:e,alt:"technology",width:30,height:30,style:{marginLeft:"5px",marginRight:"5px",objectFit:"contain"}},s))})]})]})},ei=e=>{let{data:s}=e;return(0,t.jsx)(L,{head:s.name,component:(0,t.jsx)(en,{data:s})})},eo=[{name:"Face Emotion Result",describe:"Internship project that maintain the University project which can predict emotion to recognize the face and record to the database and develop a web application to show the result from the database as a graph.",url:"https://github.com/dacharat/face_emotion_result",images:[],technology:["/assets/skills/language/python.png","/assets/skills/back-end/django.png","/assets/skills/database/postgreSQL.png","/assets/skills/python-tools/opencv.png","/assets/skills/python-tools/tensorflow.png","/assets/skills/python-tools/keras.png","/assets/skills/tools/nvidia.png"]},{name:"Otopaholic",describe:"Group project to create an e-commerce web application that sells OTOP products. This project working on full-stack web developer use ReactJS and Express.",url:"https://github.com/InsanelyGood/InsanelyGood-OTOP",images:["/assets/projects/otopaholic/first.png","/assets/projects/otopaholic/second.png","/assets/projects/otopaholic/third.png","/assets/projects/otopaholic/fourth.png","/assets/projects/otopaholic/fifth.png","/assets/projects/otopaholic/sixth.png"],technology:["/assets/skills/language/javascript.png","/assets/skills/front-end/react.png","/assets/skills/back-end/node.png","/assets/skills/database/mongodb.png","/assets/skills/tools/gitlab.png","/assets/skills/tools/asana.png"]},{name:"IP subnet calculator",describe:"Group project to create IP subnet calculator.",url:"https://github.com/dacharat/IP-subnet-calculator",images:["/assets/projects/ip-subnet/first.png","/assets/projects/ip-subnet/second.png"],technology:["/assets/skills/language/javascript.png","/assets/skills/front-end/react.png","/assets/skills/database/firebase.png"]},{name:"Math Master Game",describe:"Final project in OOP class, use Java to make application.",url:"https://github.com/dacharat/Math-Master-Game",images:["/assets/projects/math-game/first.png","/assets/projects/math-game/second.png","/assets/projects/math-game/third.png","/assets/projects/math-game/fourth.png"],technology:["/assets/skills/language/java.png","/assets/skills/tools/javafx.png","/assets/skills/database/mysqlAdmin.png"]},{name:"Took-took-4.0",describe:"Group project to create IoT(Internet of Things) application.",url:"https://github.com/took-took-4/took-took4",images:["/assets/projects/took-took/first.png","/assets/projects/took-took/second.png"],technology:["/assets/skills/language/javascript.png","/assets/skills/front-end/html.png","/assets/skills/front-end/css.png"]}],er=()=>(0,t.jsx)(t.Fragment,{children:eo.map((e,s)=>(0,t.jsx)(Q,{variant:"pulse",children:(0,t.jsx)(ei,{data:e})},s))}),el=()=>(0,t.jsx)(P,{icon:x.XOj,name:"Projects",component:(0,t.jsx)(er,{})}),ec=()=>(0,t.jsx)("div",{className:"mt-3 mb-3",children:(0,t.jsx)(el,{})}),ed=n.Ay.a.attrs({className:"btn m-2"})`
  text-align: center;
  font-size: 20px !important;
  border-color: black !important;
  border-radius: 30px !important;
`,ep=e=>{let{setting:s}=e,a=s.icon;return(0,t.jsx)("div",{className:"col-md-3 col-6 text-center",children:(0,t.jsxs)(ed,{href:s.href,children:[(0,t.jsx)(a,{className:"me-2"}),s.name]})})},eh=[{name:"Github",href:"https://github.com/dacharat",icon:x.g3s},{name:"Resume",href:"https://goo.gl/96buwB",icon:x.kl1},{name:"Email",href:"mailto:dacharat.p@ku.th?subject=Hi Dacharat, I contacted you from Github",icon:x.T35},{name:"Facebook",href:"https://facebook.com/dacharat.pankong",icon:x.D2F}],em=()=>(0,t.jsx)("div",{className:"row",children:eh.map((e,s)=>(0,t.jsx)(ep,{setting:e},s))}),eg=()=>(0,t.jsx)("div",{className:"mt-3 mb-3",children:(0,t.jsx)(P,{icon:x.toK,name:"Contact",component:(0,t.jsx)(em,{})})}),ex=n.Ay.div.attrs({className:"container"})`
  max-width: 900px !important;
`;function ej(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(N,{}),(0,t.jsx)(m,{}),(0,t.jsxs)(ex,{children:[(0,t.jsx)("section",{id:"about",children:(0,t.jsx)(q,{})}),(0,t.jsx)("section",{id:"experience",children:(0,t.jsx)(Y,{})}),(0,t.jsx)("section",{id:"projects",children:(0,t.jsx)(ec,{})}),(0,t.jsx)("section",{id:"contact",children:(0,t.jsx)(eg,{})})]})]})}}},e=>{e.O(0,[711,553,180,441,255,358],()=>e(e.s=2817)),_N_E=e.O()}]);