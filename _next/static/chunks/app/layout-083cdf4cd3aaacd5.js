(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{1754:(e,t,a)=>{"use strict";a.d(t,{D:()=>c,w:()=>l});var r=a(5155),o=a(2115),n=a(7232);let s=(0,o.createContext)({isDark:!1,toggleTheme:()=>{},theme:n._k});function l(e){let{children:t}=e,[a,l]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=localStorage.getItem("theme");e?l("dark"===e):l(window.matchMedia("(prefers-color-scheme: dark)").matches)},[]),(0,r.jsx)(s.Provider,{value:{isDark:a,toggleTheme:()=>{l(e=>{let t=!e;return localStorage.setItem("theme",t?"dark":"light"),t})},theme:a?n.a5:n._k},children:t})}function c(){return(0,o.useContext)(s)}},3673:()=>{},4446:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,5174,23)),Promise.resolve().then(a.t.bind(a,7706,23)),Promise.resolve().then(a.t.bind(a,3673,23)),Promise.resolve().then(a.bind(a,8561)),Promise.resolve().then(a.bind(a,7015))},5174:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_188709",variable:"__variable_188709"}},7015:(e,t,a)=>{"use strict";a.d(t,{default:()=>c});var r=a(5155);a(2115);var o=a(2553),n=a(1754),s=a(7232);function l(e){let{children:t}=e,{theme:a}=(0,n.D)();return(0,r.jsxs)(o.NP,{theme:a,children:[(0,r.jsx)(s.zy,{}),t]})}function c(e){let{children:t}=e;return(0,r.jsx)(n.w,{children:(0,r.jsx)(l,{children:t})})}},7232:(e,t,a)=>{"use strict";a.d(t,{_k:()=>o,a5:()=>n,zy:()=>s});var r=a(2553);let o={bg:"#fafaf9",surface:"#ffffff",surfaceAlt:"#f4f4f3",text:"#0a0a0a",textMuted:"#6b6b6b",textSubtle:"#9a9a9a",border:"#e5e5e3",borderStrong:"#cfcfcc",accent:"#06c755",accentHover:"#05a847",accentAlt:"#ff6b35",accentAltHover:"#e85a26",shadow:"0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.06)",shadowHover:"0 2px 4px rgba(0, 0, 0, 0.06), 0 12px 32px rgba(0, 0, 0, 0.08)"},n={bg:"#0a0a0a",surface:"#141414",surfaceAlt:"#1c1c1c",text:"#f5f5f5",textMuted:"#a3a3a3",textSubtle:"#6b6b6b",border:"#262626",borderStrong:"#383838",accent:"#1ed760",accentHover:"#33e673",accentAlt:"#ff7f50",accentAltHover:"#ff9670",shadow:"0 1px 2px rgba(0, 0, 0, 0.4), 0 4px 16px rgba(0, 0, 0, 0.4)",shadowHover:"0 2px 4px rgba(0, 0, 0, 0.5), 0 12px 32px rgba(0, 0, 0, 0.55)"},s=(0,r.DU)`
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
`},7706:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_9a8899",variable:"__variable_9a8899"}},8561:(e,t,a)=>{"use strict";a.d(t,{default:()=>l});var r=a(5155),o=a(2115),n=a(7260),s=a(2553);function l(e){let{children:t}=e,[a]=(0,o.useState)(()=>new s.E);return(0,n.useServerInsertedHTML)(()=>{let e=a.getStyleElement();return a.instance.clearTag(),(0,r.jsx)(r.Fragment,{children:e})}),(0,r.jsx)(r.Fragment,{children:t})}}},e=>{e.O(0,[350,553,441,255,358],()=>e(e.s=4446)),_N_E=e.O()}]);