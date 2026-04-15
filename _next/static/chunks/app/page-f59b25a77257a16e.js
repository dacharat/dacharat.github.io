(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1754:(e,t,r)=>{"use strict";r.d(t,{D:()=>l,w:()=>s});var n=r(5155),o=r(2115),a=r(7232);let i=(0,o.createContext)({isDark:!1,toggleTheme:()=>{},theme:a._k});function s(e){let{children:t}=e,[r,s]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=localStorage.getItem("theme");e?s("dark"===e):s(window.matchMedia("(prefers-color-scheme: dark)").matches)},[]),(0,n.jsx)(i.Provider,{value:{isDark:r,toggleTheme:()=>{s(e=>{let t=!e;return localStorage.setItem("theme",t?"dark":"light"),t})},theme:r?a.a5:a._k},children:t})}function l(){return(0,o.useContext)(i)}},2817:(e,t,r)=>{Promise.resolve().then(r.bind(r,3225))},3225:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>e9});var n=r(5155),o=r(2115),a=r(2553),i=r(9995),s=r(4384),l=r(9447);let c=a.Ay.div`
  width: min(1200px, 92vw);
  margin: 0 auto;
`,d=a.Ay.section`
  padding: clamp(80px, 12vw, 160px) 0;
  position: relative;
`,p=a.Ay.span`
  font-family: var(--font-mono-stack);
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${e=>{let{theme:t}=e;return t.textMuted}};
`,x=(0,a.Ay)(p)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;

  &::before {
    content: "";
    display: inline-block;
    width: 32px;
    height: 1px;
    background: ${e=>{let{theme:t}=e;return t.accent}};
  }
`,h=a.Ay.h2`
  font-size: clamp(2rem, 4.5vw, 3.25rem);
  letter-spacing: -0.025em;
  margin-bottom: clamp(40px, 6vw, 72px);
  max-width: 24ch;
`,m=a.Ay.h1`
  font-size: clamp(3rem, 8vw, 5.75rem);
  letter-spacing: -0.035em;
  line-height: 1;
`,u=a.Ay.p`
  font-size: clamp(1.05rem, 1.6vw, 1.25rem);
  color: ${e=>{let{theme:t}=e;return t.textMuted}};
  line-height: 1.65;
  max-width: 60ch;
`,g={initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.6,ease:[.22,1,.36,1]}},f=e=>({...g,transition:{...g.transition,delay:e}});i.P.div;var b=r(3530),y=r(898);let v=a.Ay.section`
  position: relative;
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  padding: clamp(80px, 12vw, 140px) 0 clamp(60px, 10vw, 100px);
  overflow: hidden;
`,j=(0,a.Ay)(i.P.div)`
  position: absolute;
  top: -20%;
  right: -10%;
  width: 60vw;
  height: 60vw;
  max-width: 800px;
  max-height: 800px;
  background: radial-gradient(
    circle at center,
    ${e=>{let{theme:t}=e;return t.accent}}26 0%,
    ${e=>{let{theme:t}=e;return t.accentAlt}}1a 35%,
    transparent 70%
  );
  filter: blur(60px);
  pointer-events: none;
  z-index: 0;
`,k=a.Ay.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: clamp(24px, 4vw, 40px);
`,w=a.Ay.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,$=(0,a.Ay)(i.P.span)`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>{let{theme:t}=e;return t.accent}};
  box-shadow: 0 0 16px ${e=>{let{theme:t}=e;return t.accent}};
`,A=(0,a.Ay)(m)`
  max-width: 14ch;

  span.accent {
    background: linear-gradient(
      135deg,
      ${e=>{let{theme:t}=e;return t.accent}},
      ${e=>{let{theme:t}=e;return t.accentAlt}}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`,P=a.Ay.p`
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  line-height: 1.55;
  color: ${e=>{let{theme:t}=e;return t.textMuted}};
  max-width: 56ch;

  strong {
    color: ${e=>{let{theme:t}=e;return t.text}};
    font-weight: 600;
  }
`,z=a.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px 32px;
  margin-top: 8px;
  padding-top: 24px;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.border}};
`,M=a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,S=(0,a.Ay)(p)`
  font-size: 0.7rem;
`,I=a.Ay.span`
  font-size: 0.95rem;
  color: ${e=>{let{theme:t}=e;return t.text}};
  font-weight: 500;
`,C=(0,a.Ay)(b.N_)`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-family: var(--font-mono-stack);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${e=>{let{theme:t}=e;return t.textMuted}};
  cursor: pointer;
  z-index: 1;
  transition: color 200ms ease;

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.text}};
  }

  svg {
    animation: bob 2.4s ease-in-out infinite;
  }

  @keyframes bob {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(6px);
    }
  }

  @media (max-width: 640px) {
    display: none;
  }
`,G=()=>{let{scrollYProgress:e}=(0,s.L)(),t=(0,l.G)(e,[0,.2],[0,100]),r=(0,l.G)(e,[0,.2],[1,0]);return(0,n.jsxs)(v,{id:"cover",children:[(0,n.jsx)(j,{style:{y:t,opacity:r}}),(0,n.jsx)(c,{children:(0,n.jsxs)(k,{children:[(0,n.jsx)(i.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,ease:[.22,1,.36,1]},children:(0,n.jsxs)(w,{children:[(0,n.jsx)($,{animate:{opacity:[1,.4,1]},transition:{duration:2,repeat:1/0}}),(0,n.jsx)(p,{children:"Portfolio \xb7 2026"})]})}),(0,n.jsx)(i.P.div,{initial:{opacity:0,y:32},animate:{opacity:1,y:0},transition:{duration:.7,delay:.1,ease:[.22,1,.36,1]},children:(0,n.jsxs)(A,{children:["Dacharat",(0,n.jsx)("br",{}),(0,n.jsx)("span",{className:"accent",children:"Pankong."})]})}),(0,n.jsx)(i.P.div,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.7,delay:.25,ease:[.22,1,.36,1]},children:(0,n.jsxs)(P,{children:[(0,n.jsx)("strong",{children:"Senior backend engineer at LINE MAN Wongnai."})," I build food delivery systems at scale — pricing, ordering, and the paths millions of orders run through every day."]})}),(0,n.jsx)(i.P.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.7,delay:.4,ease:[.22,1,.36,1]},children:(0,n.jsxs)(z,{children:[(0,n.jsxs)(M,{children:[(0,n.jsx)(S,{children:"Role"}),(0,n.jsx)(I,{children:"Senior Backend Engineer"})]}),(0,n.jsxs)(M,{children:[(0,n.jsx)(S,{children:"Company"}),(0,n.jsx)(I,{children:"LINE MAN Wongnai"})]}),(0,n.jsxs)(M,{children:[(0,n.jsx)(S,{children:"Based in"}),(0,n.jsx)(I,{children:"Bangkok, Thailand"})]}),(0,n.jsxs)(M,{children:[(0,n.jsx)(S,{children:"Stack"}),(0,n.jsx)(I,{children:"Go \xb7 MongoDB \xb7 Kafka \xb7 Redis \xb7 gRPC"})]})]})})]})}),(0,n.jsxs)(C,{to:"about",smooth:!0,duration:800,offset:-80,children:["Scroll",(0,n.jsx)(y.$TP,{size:12})]})]})};var L=r(3615),N=r(7650);let D=a.Ay.button`
  background: none;
  border: 1px solid ${e=>{let{theme:t}=e;return t.border}};
  border-radius: 8px;
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${e=>{let{theme:t}=e;return t.text}};
  cursor: pointer;
  position: relative;
  z-index: 70;
`,E=a.Ay.div`
  position: fixed;
  inset: 0;
  background: ${e=>{let{theme:t}=e;return t.bg}}cc;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  opacity: ${e=>+!!e.$isOpen};
  pointer-events: ${e=>e.$isOpen?"auto":"none"};
  transition: opacity 250ms ease;
  z-index: 100;
`,T=a.Ay.aside`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(320px, 82vw);
  padding: 96px 32px 32px;
  background-color: ${e=>{let{theme:t}=e;return t.surface}};
  border-left: 1px solid ${e=>{let{theme:t}=e;return t.border}};
  box-shadow: -12px 0 48px rgba(0, 0, 0, 0.2);
  transform: translateX(${e=>e.$isOpen?"0":"100%"});
  transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 110;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,O=(0,a.Ay)(b.N_)`
  cursor: pointer;
  display: block;
  padding: 16px 8px;
  font-family: var(--font-mono-stack);
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${e=>{let{theme:t}=e;return t.text}};
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.border}};
  transition:
    color 200ms ease,
    padding-left 200ms ease;

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.accent}};
    padding-left: 16px;
  }
`,R=()=>{let[e,t]=(0,o.useState)(!1),[r,a]=(0,o.useState)(!1);(0,o.useEffect)(()=>{a(!0)},[]),(0,o.useEffect)(()=>{if(!r)return;let t=document.body.style.overflow;return document.body.style.overflow=e?"hidden":t||"",()=>{document.body.style.overflow=t||""}},[e,r]);let i=()=>t(!1),s=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(E,{$isOpen:e,onClick:i}),(0,n.jsxs)(T,{$isOpen:e,"aria-hidden":!e,children:[(0,n.jsx)(O,{onClick:i,to:"about",smooth:!0,duration:600,offset:-80,children:"01 \xb7 About"}),(0,n.jsx)(O,{onClick:i,to:"experience",smooth:!0,duration:600,offset:-80,children:"02 \xb7 Work"}),(0,n.jsx)(O,{onClick:i,to:"projects",smooth:!0,duration:600,offset:-80,children:"03 \xb7 Projects"}),(0,n.jsx)(O,{onClick:i,to:"contact",smooth:!0,duration:600,offset:-80,children:"04 \xb7 Contact"})]})]});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(D,{onClick:()=>t(e=>!e),"aria-label":"Toggle menu","aria-expanded":e,children:e?(0,n.jsx)(y.QCr,{size:16}):(0,n.jsx)(y.OXb,{size:16})}),r&&(0,N.createPortal)(s,document.body)]})};var B=r(1754),_=r(6092);let F=a.Ay.nav`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
  background-color: ${e=>{let{theme:t}=e;return`${t.bg}cc`}};
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.border}};
  transition:
    background-color 300ms ease,
    border-color 300ms ease;
`,H=a.Ay.div`
  width: min(1200px, 92vw);
  margin: 0 auto;
  padding: 18px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`,W=(0,a.Ay)(b.N_)`
  font-family: var(--font-mono-stack);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  cursor: pointer;
  color: ${e=>{let{theme:t}=e;return t.text}};
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${e=>{let{theme:t}=e;return t.accent}};
    box-shadow: 0 0 12px ${e=>{let{theme:t}=e;return t.accent}};
  }
`,J=a.Ay.div`
  display: none;
  align-items: center;
  gap: 6px;

  @media (min-width: 768px) {
    display: flex;
  }
`,Q=(0,a.Ay)(b.N_)`
  font-family: var(--font-mono-stack);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  padding: 8px 14px;
  border-radius: 8px;
  color: ${e=>{let{theme:t}=e;return t.textMuted}};
  transition:
    color 200ms ease,
    background-color 200ms ease;

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.text}};
    background-color: ${e=>{let{theme:t}=e;return t.surfaceAlt}};
  }

  &.active {
    color: ${e=>{let{theme:t}=e;return t.text}};
  }
`,U=a.Ay.button`
  background: none;
  border: 1px solid ${e=>{let{theme:t}=e;return t.border}};
  border-radius: 8px;
  color: ${e=>{let{theme:t}=e;return t.text}};
  cursor: pointer;
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 200ms ease,
    border-color 200ms ease;

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.surfaceAlt}};
    border-color: ${e=>{let{theme:t}=e;return t.borderStrong}};
  }
`,K=a.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
    .mobile-menu {
      display: none;
    }
  }
`,X=(0,a.Ay)(i.P.div)`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    ${e=>{let{theme:t}=e;return t.accent}},
    ${e=>{let{theme:t}=e;return t.accentAlt}}
  );
  transform-origin: 0%;
`,Y=()=>{let{isDark:e,toggleTheme:t}=(0,B.D)(),{scrollYProgress:r}=(0,s.L)(),o=(0,L.z)(r,{stiffness:120,damping:30,mass:.2});return(0,n.jsxs)(F,{children:[(0,n.jsxs)(H,{children:[(0,n.jsx)(W,{to:"cover",smooth:!0,duration:600,spy:!0,children:"DACHARAT.DEV"}),(0,n.jsxs)(J,{children:[(0,n.jsx)(Q,{to:"about",smooth:!0,duration:600,offset:-80,spy:!0,activeClass:"active",children:"About"}),(0,n.jsx)(Q,{to:"experience",smooth:!0,duration:600,offset:-80,spy:!0,activeClass:"active",children:"Work"}),(0,n.jsx)(Q,{to:"projects",smooth:!0,duration:600,offset:-80,spy:!0,activeClass:"active",children:"Projects"}),(0,n.jsx)(Q,{to:"contact",smooth:!0,duration:600,offset:-80,spy:!0,activeClass:"active",children:"Contact"})]}),(0,n.jsxs)(K,{children:[(0,n.jsx)(U,{onClick:t,"aria-label":"Toggle dark mode",children:e?(0,n.jsx)(_.uSI,{}):(0,n.jsx)(_.h50,{})}),(0,n.jsx)("span",{className:"mobile-menu",children:(0,n.jsx)(R,{})})]})]}),(0,n.jsx)(X,{style:{scaleX:o}})]})};var q=r(5239);let V=a.Ay.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: start;

  @media (min-width: 900px) {
    grid-template-columns: 320px 1fr;
  }
`,Z=(0,a.Ay)(i.P.div)`
  position: relative;
  width: 100%;
  max-width: 320px;
  aspect-ratio: 1 / 1;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid ${e=>{let{theme:t}=e;return t.border}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadow}};

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      ${e=>{let{theme:t}=e;return t.accent}}1a 0%,
      transparent 50%,
      ${e=>{let{theme:t}=e;return t.accentAlt}}1a 100%
    );
    pointer-events: none;
  }
`,ee=a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,et=a.Ay.p`
  font-size: 1.05rem;
  line-height: 1.75;
  color: ${e=>{let{theme:t}=e;return t.text}};

  strong {
    font-weight: 600;
  }

  a {
    color: ${e=>{let{theme:t}=e;return t.accent}};
    border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.accent}}66;
    transition: border-color 200ms ease;

    &:hover {
      border-bottom-color: ${e=>{let{theme:t}=e;return t.accent}};
    }
  }
`,er=a.Ay.div`
  margin-top: clamp(60px, 8vw, 100px);
  display: grid;
  gap: 32px;
`,en=a.Ay.div`
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 24px;
  padding: 24px 0;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.border}};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,eo=(0,a.Ay)(p)`
  align-self: start;
`,ea=a.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,ei=(0,a.Ay)(i.P.span)`
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.border}};
  background-color: ${e=>{let{theme:t}=e;return t.surface}};
  color: ${e=>{let{theme:t}=e;return t.text}};
  font-size: 0.85rem;
  font-weight: 500;
  cursor: default;
  transition:
    border-color 200ms ease,
    color 200ms ease,
    background-color 200ms ease,
    transform 200ms ease;

  &:hover {
    border-color: ${e=>{let{theme:t}=e;return t.accent}};
    color: ${e=>{let{theme:t}=e;return t.accent}};
    transform: translateY(-2px);
  }
`,es=[{label:"Languages",items:["Go","TypeScript","Python","Java"]},{label:"Backend",items:["gRPC","REST","GraphQL","Microservices","Distributed systems"]},{label:"Data",items:["MongoDB","Redis","MySQL","PostgreSQL"]},{label:"Messaging",items:["Kafka","RabbitMQ"]},{label:"Tooling",items:["Docker","Kubernetes","Git","GitHub","GitLab"]}],el=()=>(0,n.jsx)(d,{children:(0,n.jsxs)(c,{children:[(0,n.jsxs)(i.P.div,{...g,children:[(0,n.jsx)(x,{children:"01 \xb7 About"}),(0,n.jsx)(h,{children:"Backend engineer, builder, occasional tinkerer."})]}),(0,n.jsxs)(V,{children:[(0,n.jsx)(Z,{...f(.1),children:(0,n.jsx)(q.default,{src:"/assets/profile.jpg",alt:"Portrait of Dacharat Pankong",fill:!0,sizes:"(max-width: 900px) 70vw, 320px",style:{objectFit:"cover"},priority:!0})}),(0,n.jsxs)(ee,{children:[(0,n.jsx)(i.P.div,{...f(.15),children:(0,n.jsx)(u,{children:"I'm Dacharat Pankong — friends call me Jack. I'm a software engineer based in Bangkok, focused on building backend systems that scale."})}),(0,n.jsx)(i.P.div,{...f(.2),children:(0,n.jsx)(et,{children:"I started out studying computer engineering at Kasetsart University and found myself drawn to the messy, satisfying work of turning ideas into shipped products. My path began with internships across three very different worlds — an eyewear e-commerce startup, a deep learning research lab in Germany, and the Growth squad at Wongnai."})}),(0,n.jsx)(i.P.div,{...f(.25),children:(0,n.jsxs)(et,{children:["Today I'm a ",(0,n.jsx)("strong",{children:"Senior Backend Engineer"})," at"," ",(0,n.jsx)("strong",{children:"LINE MAN Wongnai"}),", working on the food delivery platform. I care most about writing code that's clear enough to delete, systems that fail loudly, and products that respect the people using them."]})})]})]}),(0,n.jsxs)(er,{children:[(0,n.jsx)(i.P.div,{...g,children:(0,n.jsx)(p,{children:"What I work with"})}),es.map((e,t)=>(0,n.jsx)(i.P.div,{...f(.05*t),children:(0,n.jsxs)(en,{children:[(0,n.jsx)(eo,{children:e.label}),(0,n.jsx)(ea,{children:e.items.map(e=>(0,n.jsx)(ei,{children:e},e))})]})},e.label))]})]})}),ec=(0,a.Ay)(i.P.article)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: clamp(28px, 4vw, 48px) 0;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.border}};

  @media (min-width: 800px) {
    grid-template-columns: 200px 1fr;
    gap: 48px;
  }
`,ed=(0,a.Ay)(p)`
  align-self: start;
  padding-top: 4px;
`,ep=a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ex=a.Ay.h3`
  font-size: clamp(1.35rem, 2.2vw, 1.75rem);
  letter-spacing: -0.02em;
`,eh=a.Ay.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.textMuted}};

  a {
    color: ${e=>{let{theme:t}=e;return t.text}};
    border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.border}};
    transition:
      border-color 200ms ease,
      color 200ms ease;
  }
  a:hover {
    color: ${e=>{let{theme:t}=e;return t.accent}};
    border-bottom-color: ${e=>{let{theme:t}=e;return t.accent}};
  }
`,em=a.Ay.p`
  color: ${e=>{let{theme:t}=e;return t.textMuted}};
  font-size: 1rem;
  line-height: 1.7;
  max-width: 64ch;
`,eu=a.Ay.ul`
  list-style: none;
  padding: 0;
  margin: 8px 0 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,eg=a.Ay.li`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding-left: 0;
  font-size: 0.97rem;
  line-height: 1.65;
  color: ${e=>{let{theme:t}=e;return t.text}};

  &::before {
    content: "";
    flex: 0 0 auto;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${e=>{let{theme:t}=e;return t.accent}};
    margin-top: 10px;
  }
`,ef=a.Ay.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 10px;
  margin-left: 8px;
  border-radius: 999px;
  font-family: var(--font-mono-stack);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  background: linear-gradient(
    135deg,
    ${e=>{let{theme:t}=e;return t.accent}},
    ${e=>{let{theme:t}=e;return t.accentAlt}}
  );
  color: #ffffff;
  vertical-align: middle;
`,eb=a.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
`,ey=a.Ay.span`
  font-family: var(--font-mono-stack);
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.border}};
  color: ${e=>{let{theme:t}=e;return t.textMuted}};
  background-color: ${e=>{let{theme:t}=e;return t.surface}};
`,ev=e=>{let{data:t}=e;return(0,n.jsxs)(ec,{...g,children:[(0,n.jsx)(ed,{children:t.period}),(0,n.jsxs)(ep,{children:[(0,n.jsx)(ex,{children:t.role}),(0,n.jsx)(eh,{children:t.companyUrl?(0,n.jsx)("a",{href:t.companyUrl,target:"_blank",rel:"noopener noreferrer",children:t.company}):t.company}),(0,n.jsx)(em,{children:t.summary}),t.highlights&&t.highlights.length>0&&(0,n.jsx)(eu,{children:t.highlights.map((e,t)=>(0,n.jsx)(eg,{children:(0,n.jsxs)("span",{children:[e.text,e.metric&&(0,n.jsx)(ef,{children:e.metric})]})},t))}),t.stack&&t.stack.length>0&&(0,n.jsx)(eb,{children:t.stack.map(e=>(0,n.jsx)(ey,{children:e},e))})]})]})},ej=[{period:"2022 — Present",role:"Senior Software Engineer, Backend",company:"LINE MAN Wongnai",companyUrl:"https://lmwn.com",summary:"Building the backend powering LINE MAN's food delivery platform — pricing, ordering, and the systems millions of orders run through every day. Promoted to Senior in 2022.",highlights:[{text:"Introduced a dedicated Price Engine to LINE MAN services with the team, replacing scattered pricing logic with a single source of truth."},{text:"Delivered the คนละครึ่ง (Half-Half) government co-payment integration on the user side of the LINE MAN app."},{text:"Led an order-creation latency effort, bringing p99 from >5s down to <500ms on one of the platform's hottest paths.",metric:"10\xd7"}],stack:["Go","MongoDB","Kafka","RabbitMQ","Redis","gRPC"]},{period:"2019 — 2022",role:"Software Engineer, Backend",company:"Wongnai Media",summary:"Joined Wongnai full-time out of my internship on the Growth squad. Stayed on through the LINE MAN Wongnai merger and moved to the food delivery org.",stack:["Java","Spring","Python","TypeScript","gRPC","GraphQL","MySQL"]}],ek=[{year:"2019",role:"Backend Intern, Growth squad",company:"Wongnai Media",stack:"Java \xb7 Spring \xb7 gRPC \xb7 GraphQL"},{year:"2019",role:"Deep Learning Research Intern",company:"Offenburg University, Germany",stack:"Python \xb7 TensorFlow \xb7 Keras \xb7 Django"},{year:"2018",role:"Full-stack Intern",company:"Glazziq",stack:"Ruby on Rails \xb7 React \xb7 PostgreSQL"}],ew=(0,a.Ay)(d)`
  background-color: ${e=>{let{theme:t}=e;return t.surface}};
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.border}};
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.border}};
`,e$=a.Ay.div`
  margin-top: clamp(40px, 6vw, 64px);
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.border}};
`,eA=a.Ay.div`
  margin-top: clamp(48px, 6vw, 80px);
`,eP=a.Ay.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 24px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,ez=(0,a.Ay)(i.P.div)`
  padding: 20px 0;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.border}};
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eM=(0,a.Ay)(p)`
  font-size: 0.7rem;
`,eS=a.Ay.span`
  font-weight: 500;
  color: ${e=>{let{theme:t}=e;return t.text}};
`,eI=a.Ay.span`
  color: ${e=>{let{theme:t}=e;return t.textMuted}};
  font-size: 0.9rem;
`,eC=a.Ay.span`
  margin-top: 6px;
  font-family: var(--font-mono-stack);
  font-size: 0.72rem;
  color: ${e=>{let{theme:t}=e;return t.textSubtle}};
`,eG=()=>(0,n.jsx)(ew,{children:(0,n.jsxs)(c,{children:[(0,n.jsxs)(i.P.div,{...g,children:[(0,n.jsx)(x,{children:"02 \xb7 Work"}),(0,n.jsx)(h,{children:"Where I've been shipping things."}),(0,n.jsx)(u,{children:"From a Growth-squad intern to a Senior Backend Engineer on Thailand's largest food delivery platform."})]}),(0,n.jsx)(e$,{children:ej.map((e,t)=>(0,n.jsx)(ev,{data:e},t))}),(0,n.jsxs)(eA,{children:[(0,n.jsx)(i.P.div,{...g,children:(0,n.jsx)(p,{children:"Earlier \xb7 Internships"})}),(0,n.jsx)(eP,{children:ek.map((e,t)=>(0,n.jsxs)(ez,{...f(.05*t),children:[(0,n.jsx)(eM,{children:e.year}),(0,n.jsx)(eS,{children:e.role}),(0,n.jsx)(eI,{children:e.company}),(0,n.jsx)(eC,{children:e.stack})]},t))})]})]})}),eL=a.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,eN=a.Ay.span`
  font-family: var(--font-mono-stack);
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.border}};
  color: ${e=>{let{theme:t}=e;return t.textMuted}};
  background-color: ${e=>{let{theme:t}=e;return t.surface}};
`,eD=a.Ay.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono-stack);
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${e=>{let{theme:t}=e;return t.text}};
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.text}};
  padding-bottom: 4px;
  transition:
    color 200ms ease,
    border-color 200ms ease,
    gap 200ms ease;

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.accent}};
    border-bottom-color: ${e=>{let{theme:t}=e;return t.accent}};
    gap: 14px;
  }
`,eE=(0,a.Ay)(i.P.article)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  padding: clamp(28px, 4vw, 48px);
  border: 1px solid ${e=>{let{theme:t}=e;return t.border}};
  border-radius: 20px;
  background-color: ${e=>{let{theme:t}=e;return t.surface}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadow}};
  transition:
    box-shadow 300ms ease,
    transform 300ms ease,
    border-color 300ms ease;

  &:hover {
    box-shadow: ${e=>{let{theme:t}=e;return t.shadowHover}};
    border-color: ${e=>{let{theme:t}=e;return t.borderStrong}};
    transform: translateY(-2px);
  }

  @media (min-width: 900px) {
    grid-template-columns: 1.1fr 1fr;
    gap: 56px;
    align-items: center;
  }
`,eT=a.Ay.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    ${e=>{let{theme:t}=e;return t.accent}}33,
    ${e=>{let{theme:t}=e;return t.accentAlt}}33
  );
  border: 1px solid ${e=>{let{theme:t}=e;return t.border}};
`,eO=a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,eR=a.Ay.h3`
  font-size: clamp(1.5rem, 2.6vw, 2rem);
  letter-spacing: -0.02em;
  line-height: 1.2;
`,eB=a.Ay.p`
  color: ${e=>{let{theme:t}=e;return t.textMuted}};
  font-size: 1rem;
  line-height: 1.7;
`,e_=a.Ay.div`
  display: flex;
  gap: 16px;
  color: ${e=>{let{theme:t}=e;return t.textSubtle}};
`,eF=(0,a.Ay)(i.P.article)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.border}};
  border-radius: 16px;
  background-color: ${e=>{let{theme:t}=e;return t.surface}};
  transition:
    transform 300ms ease,
    border-color 300ms ease,
    box-shadow 300ms ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${e=>{let{theme:t}=e;return t.borderStrong}};
    box-shadow: ${e=>{let{theme:t}=e;return t.shadow}};
  }
`,eH=a.Ay.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,eW=a.Ay.h4`
  font-size: 1.2rem;
  letter-spacing: -0.015em;
`,eJ=a.Ay.a`
  color: ${e=>{let{theme:t}=e;return t.textMuted}};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.border}};
  transition:
    color 200ms ease,
    border-color 200ms ease,
    background-color 200ms ease;

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.accent}};
    border-color: ${e=>{let{theme:t}=e;return t.accent}};
    background-color: ${e=>{let{theme:t}=e;return t.surfaceAlt}};
  }
`,eQ=a.Ay.p`
  color: ${e=>{let{theme:t}=e;return t.textMuted}};
  font-size: 0.92rem;
  line-height: 1.6;
  flex: 1;
`,eU=e=>{let{data:t}=e;return(0,n.jsxs)(eE,{...g,children:[(0,n.jsx)(eT,{children:t.cover&&(0,n.jsx)(q.default,{src:t.cover,alt:`${t.name} cover`,fill:!0,sizes:"(max-width: 900px) 92vw, 50vw",style:{objectFit:"cover"}})}),(0,n.jsxs)(eO,{children:[(0,n.jsxs)(p,{children:["Featured \xb7 ",t.year]}),(0,n.jsx)(eR,{children:t.tagline}),(0,n.jsx)(eB,{children:t.description}),(0,n.jsx)(eL,{children:t.stack.map(e=>(0,n.jsx)(eN,{children:e},e))}),(0,n.jsx)(e_,{children:t.context&&(0,n.jsx)(p,{children:t.context})}),(0,n.jsxs)(eD,{href:t.url,target:"_blank",rel:"noopener noreferrer",children:["View on GitHub ",(0,n.jsx)(y.Z0P,{size:12})]})]})]})},eK=e=>{let{data:t}=e;return(0,n.jsxs)(eF,{...g,children:[(0,n.jsxs)(eH,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(p,{children:t.year}),(0,n.jsx)(eW,{children:t.name})]}),(0,n.jsx)(eJ,{href:t.url,target:"_blank",rel:"noopener noreferrer","aria-label":`${t.name} on GitHub`,children:(0,n.jsx)(y.hL4,{size:14})})]}),(0,n.jsx)(eQ,{children:t.description}),(0,n.jsx)(eL,{children:t.stack.map(e=>(0,n.jsx)(eN,{children:e},e))})]})},eX=[{name:"Otopaholic",tagline:"Full-stack e-commerce for Thailand's local OTOP goods.",description:"A full-stack e-commerce platform for Thailand's OTOP (One Tambon One Product) program. I worked across the stack — React on the front, Node/Express and MongoDB on the back — and learned more about making real product decisions than I did about code.",url:"https://github.com/InsanelyGood/InsanelyGood-OTOP",cover:"/assets/projects/otopaholic/first.png",stack:["React","Node.js","Express","MongoDB"],year:"2019",context:"University \xb7 Group project"},{name:"Face Emotion Result",tagline:"Real-time face emotion recognition with a Postgres dashboard.",description:"A computer vision pipeline that detects faces in real time, classifies emotional state, and streams results to a Postgres-backed dashboard. Built on top of an existing university research project — I extended the model serving layer and wrote the web app that visualises aggregate emotion data as time-series graphs.",url:"https://github.com/dacharat/face_emotion_result",stack:["Python","Django","TensorFlow","Keras","OpenCV","PostgreSQL"],year:"2019",context:"Internship \xb7 Offenburg University"},{name:"IP Subnet Calculator",tagline:"A web tool for calculating subnets, masks, and host ranges.",description:"A web tool for calculating IP subnets, network masks, and host ranges. Small in scope, but the first time I felt the satisfaction of shipping something other people actually used.",url:"https://github.com/dacharat/IP-subnet-calculator",stack:["React","Firebase"],year:"2018",context:"University \xb7 Group project"},{name:"Math Master Game",tagline:"A desktop math game built in Java + JavaFX.",description:"A desktop math game built in Java + JavaFX with MySQL for score tracking. My first real encounter with OOP beyond classroom exercises — inheritance, polymorphism, and a lot of refactoring.",url:"https://github.com/dacharat/Math-Master-Game",stack:["Java","JavaFX","MySQL"],year:"2018",context:"University \xb7 OOP final project"},{name:"Took-took 4.0",tagline:"An IoT application for Bangkok's iconic tuk-tuks.",description:"A group project that pushed me to work with hardware sensors and real-time data for the first time.",url:"https://github.com/took-took-4/took-took4",stack:["JavaScript","HTML","CSS","IoT"],year:"2018",context:"University \xb7 Group project"}],eY=a.Ay.div`
  margin-top: clamp(40px, 6vw, 64px);
`,eq=a.Ay.div`
  margin-top: clamp(32px, 5vw, 56px);
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(20px, 2vw, 28px);

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,eV=()=>{let[e,...t]=eX;return(0,n.jsx)(d,{children:(0,n.jsxs)(c,{children:[(0,n.jsxs)(i.P.div,{...g,children:[(0,n.jsx)(x,{children:"03 \xb7 Projects"}),(0,n.jsx)(h,{children:"Things I've built along the way."}),(0,n.jsx)(u,{children:"A handful of projects from school, internships, and weekends — kept here because each one taught me something I still use today."})]}),(0,n.jsx)(eY,{children:(0,n.jsx)(eU,{data:e})}),(0,n.jsx)(eq,{children:t.map(e=>(0,n.jsx)(eK,{data:e},e.name))})]})})};var eZ=r(8122);let e0=(0,a.Ay)(d)`
  background-color: ${e=>{let{theme:t}=e;return t.surface}};
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.border}};
  position: relative;
  overflow: hidden;
`,e1=a.Ay.div`
  position: absolute;
  bottom: -30%;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  height: 80vw;
  max-width: 900px;
  max-height: 900px;
  background: radial-gradient(
    circle at center,
    ${e=>{let{theme:t}=e;return t.accent}}1f 0%,
    ${e=>{let{theme:t}=e;return t.accentAlt}}14 35%,
    transparent 70%
  );
  filter: blur(80px);
  pointer-events: none;
`,e2=a.Ay.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`,e6=a.Ay.h2`
  font-size: clamp(2.25rem, 6vw, 4.5rem);
  letter-spacing: -0.035em;
  line-height: 1.05;
  max-width: 16ch;

  span {
    background: linear-gradient(
      135deg,
      ${e=>{let{theme:t}=e;return t.accent}},
      ${e=>{let{theme:t}=e;return t.accentAlt}}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`,e5=a.Ay.a`
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 18px 32px;
  border-radius: 999px;
  background: ${e=>{let{theme:t}=e;return t.text}};
  color: ${e=>{let{theme:t}=e;return t.bg}};
  font-weight: 600;
  font-size: 1.05rem;
  transition:
    transform 250ms ease,
    box-shadow 250ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 40px ${e=>{let{theme:t}=e;return t.accent}}55;
  }
`,e4=a.Ay.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px 24px;
  margin-top: 8px;
`,e8=a.Ay.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono-stack);
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${e=>{let{theme:t}=e;return t.textMuted}};
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.border}};
  transition:
    color 200ms ease,
    border-color 200ms ease,
    background-color 200ms ease;

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.text}};
    border-color: ${e=>{let{theme:t}=e;return t.borderStrong}};
    background-color: ${e=>{let{theme:t}=e;return t.surfaceAlt}};
  }
`,e3=a.Ay.footer`
  margin-top: clamp(80px, 10vw, 140px);
  padding-top: 32px;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.border}};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  font-family: var(--font-mono-stack);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${e=>{let{theme:t}=e;return t.textSubtle}};
`,e7=()=>(0,n.jsxs)(e0,{children:[(0,n.jsx)(e1,{}),(0,n.jsx)(c,{children:(0,n.jsxs)(i.P.div,{...g,children:[(0,n.jsxs)(e2,{children:[(0,n.jsx)(x,{children:"04 \xb7 Contact"}),(0,n.jsxs)(e6,{children:["Got something interesting to ",(0,n.jsx)("span",{children:"build together?"})]}),(0,n.jsx)(p,{children:"Open to chats about backend, distributed systems, and food."}),(0,n.jsxs)(e5,{href:"mailto:dacharat.p@ku.th?subject=Hi Jack",children:[(0,n.jsx)(eZ.pHD,{size:20}),"dacharat.p@ku.th",(0,n.jsx)(eZ.qdV,{size:18})]}),(0,n.jsxs)(e4,{children:[(0,n.jsxs)(e8,{href:"https://github.com/dacharat",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(y.hL4,{})," GitHub"]}),(0,n.jsxs)(e8,{href:"https://facebook.com/dacharat.pankong",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(y.D2F,{})," Facebook"]}),(0,n.jsxs)(e8,{href:"/assets/resume.pdf",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(y.kl1,{})," Resume"]})]})]}),(0,n.jsxs)(e3,{children:[(0,n.jsxs)("span",{children:["\xa9 ",new Date().getFullYear()," Dacharat Pankong"]}),(0,n.jsx)("span",{children:"Built with Next.js \xb7 Designed in Bangkok"})]})]})})]});function e9(){return(0,n.jsxs)("main",{children:[(0,n.jsx)(Y,{}),(0,n.jsx)(G,{}),(0,n.jsx)("section",{id:"about",children:(0,n.jsx)(el,{})}),(0,n.jsx)("section",{id:"experience",children:(0,n.jsx)(eG,{})}),(0,n.jsx)("section",{id:"projects",children:(0,n.jsx)(eV,{})}),(0,n.jsx)("section",{id:"contact",children:(0,n.jsx)(e7,{})})]})}},7232:(e,t,r)=>{"use strict";r.d(t,{_k:()=>o,a5:()=>a,zy:()=>i});var n=r(2553);let o={bg:"#fafaf9",surface:"#ffffff",surfaceAlt:"#f4f4f3",text:"#0a0a0a",textMuted:"#6b6b6b",textSubtle:"#9a9a9a",border:"#e5e5e3",borderStrong:"#cfcfcc",accent:"#06c755",accentHover:"#05a847",accentAlt:"#ff6b35",accentAltHover:"#e85a26",shadow:"0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.06)",shadowHover:"0 2px 4px rgba(0, 0, 0, 0.06), 0 12px 32px rgba(0, 0, 0, 0.08)"},a={bg:"#0a0a0a",surface:"#141414",surfaceAlt:"#1c1c1c",text:"#f5f5f5",textMuted:"#a3a3a3",textSubtle:"#6b6b6b",border:"#262626",borderStrong:"#383838",accent:"#1ed760",accentHover:"#33e673",accentAlt:"#ff7f50",accentAltHover:"#ff9670",shadow:"0 1px 2px rgba(0, 0, 0, 0.4), 0 4px 16px rgba(0, 0, 0, 0.4)",shadowHover:"0 2px 4px rgba(0, 0, 0, 0.5), 0 12px 32px rgba(0, 0, 0, 0.55)"},i=(0,n.DU)`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  :root {
    --font-sans-stack: var(--font-sans), -apple-system, BlinkMacSystemFont,
      "Segoe UI", Helvetica, Arial, sans-serif;
    --font-mono-stack: var(--font-mono), ui-monospace, SFMono-Regular, Menlo,
      Monaco, Consolas, monospace;
  }

  body {
    margin: 0;
    background-color: ${e=>{let{theme:t}=e;return t.bg}};
    color: ${e=>{let{theme:t}=e;return t.text}};
    font-family: var(--font-sans-stack);
    font-size: 16px;
    line-height: 1.6;
    transition: background-color 300ms ease, color 300ms ease;
    font-feature-settings: "cv11", "ss01";
  }

  code, kbd, pre, samp {
    font-family: var(--font-mono-stack);
  }

  ::selection {
    background-color: ${e=>{let{theme:t}=e;return t.accent}};
    color: #ffffff;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  p {
    margin: 0;
    line-height: 1.65;
  }

  hr {
    border: none;
    border-top: 1px solid ${e=>{let{theme:t}=e;return t.border}};
    margin: 0;
  }
`}},e=>{e.O(0,[844,711,87,553,246,441,255,358],()=>e(e.s=2817)),_N_E=e.O()}]);