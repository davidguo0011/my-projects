"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f913965c-00f6-5032-999e-f6a1438920a5")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[7358],{9421:(i,t,e)=>{e.d(t,{A:()=>x});var n=e(2119),o=e(4936),s=e(6779);const a=n.Ay.div`
    height: 44px;
    border-radius: 50%;
    width: 44px;
    position: fixed;
    right: 16px;
    bottom: ${i=>i.transition?"20px":"/"===i.path?"84px":"100px"};
    background-color: ${o.J2.Black.color};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: ${o.Ox.sans_button_200.fontSize};
    font-weight: ${o.Ox.sans_button_200.fontWeight};
    margin-top: auto;
    line-height: ${o.Ox.sans_button_200.lineHeight};
    cursor: pointer;
    user-select: none;
    box-shadow: ${o.E_.shadow_100.boxShadow};
    transition:
        transform 0.2s,
        box-shadow 0.2s,
        bottom 0.3s ease;
    z-index: 100;
    @media (min-width: 768px) {
        bottom: 24px;
        right: 24px;
    }
`,r=(0,n.Ay)(s.P.svg)`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`,d=n.Ay.div`
    width: 20px;
    height: 20px;
`,l=n.Ay.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;var h=e(5043),g=e(6138),p=e(9856),c=e(65),m=e(579);const x=i=>{let{handleScroll:t,path:e}=i;const[n,o]=(0,h.useState)(!1),s=(0,h.useRef)(!1),x=(0,g.A)(),[u,f]=(0,c.A)(window);(0,h.useEffect)((()=>(window.Intercom("boot",{app_id:"njsfur2t"}),window.Intercom("onHide",(()=>{s.current&&(o(!1),s.current=!1)})),window.Intercom("onShow",(()=>{const i=document.querySelector(".intercom-messenger-frame");i&&setTimeout((()=>{i.style.cssText=x?"\n                        bottom: 88px !important;\n                        height: 90vh !important;\n                        ":"\n                        bottom: 0 !important;\n                        height: 100vh !important;\n                        "}),100)})),()=>{window.Intercom("shutdown")})),[x]);const w=()=>{n?(window.Intercom("hide"),s.current=!1,o(!1)):(window.Intercom("showNewMessage",""),o(!0),s.current=!0),setTimeout((()=>{const i=document.querySelector(".intercom-messenger-frame");i&&(i.style.cssText=x?"\n                        bottom: 88px !important;\n                        height: 90vh !important;\n                    ":"\n                        bottom: 0 !important;\n                        height: 100vh !important;\n                    ")}),500)},y=(0,p.A)(n,w,!0);return(0,m.jsxs)(a,{onClick:()=>{w()},ref:y,transition:t,path:e,children:[!n&&(0,m.jsx)(d,{children:(0,m.jsx)(l,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Question.svg",alt:"Support Icon"})}),n&&(0,m.jsx)(r,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",initial:{rotate:-60},animate:{rotate:0},transition:{duration:.2,ease:"easeInOut"},children:(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z",fill:"white"})})]})}},65:(i,t,e)=>{e.d(t,{A:()=>o});var n=e(5043);const o=i=>{const t=(0,n.useRef)(i instanceof Window?i.scrollY:i.current?i.current.scrollTop:0),[e,o]=(0,n.useState)(["you have not scrolled yet",!1]),s=(0,n.useCallback)((()=>{if(i instanceof Window){const e=i.scrollY;t.current>e?o(["up",!1]):t.current<e&&e>100&&(e+i.innerHeight>=document.scrollingElement.scrollHeight-200?o(["down",!0]):o(["down",!1])),t.current=e}else if(i.current instanceof HTMLElement){const e=i.current.scrollTop;e>t.current&&e>400?e+i.current.clientHeight>=i.current.scrollHeight-200?o(["down",!0]):o(["down",!1]):t.current>e&&o(["up",!1]),t.current=e}}),[i,t]);return(0,n.useEffect)((()=>{if(i instanceof Window)return i.addEventListener("scroll",s),()=>i.removeEventListener("scroll",s);if(i.current){const t=i.current;return t.addEventListener("scroll",s),()=>{t.removeEventListener("scroll",s)}}}),[s,i]),e}},204:(i,t,e)=>{e.r(t),e.d(t,{default:()=>vi});var n=e(5043),o=e(2119),s=e(4192),a=e(4936);const r=o.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 60px;

    @media (min-width: 768px) {
        margin-top: 80px;
    }
`,d=o.Ay.div`
    width: 100%;
    margin: 0 auto;
    height: 554px;
    /* margin-bottom: 24px; */
    margin-top: 64px;
    background: url("https://d292awxalydr86.cloudfront.net/Midjourney+AI+/Outputs/HERO.png");
    background-size: cover;
    background-position: center;

    @media (min-width: 768px) {
        height: 80vh;
        padding: 0;
        margin-bottom: 0;
        margin-top: 0;
    }
`,l=o.Ay.div`
    padding: 0 24px;

    @media (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        max-width: 1120px;
        margin: 0 auto;
    }
`,h=o.Ay.div`
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (min-width: 768px) {
        padding-top: 128px;
    }

    @media (min-width: 1024px) {
        align-items: flex-start;
    }
`,g=o.Ay.h1`
    font-size: ${a.$G.sans_1100_semi.fontSize};
    line-height: ${a.$G.sans_1100_semi.lineHeight};
    font-weight: ${a.$G.sans_1100_semi.fontWeight};
    color: ${a.J2.Black.color};
    text-align: center;
    margin: 0;

    @media (min-width: 768px) {
        font-size: 60px;
        line-height: 68px;
    }
    @media (min-width: 1024px) {
        text-align: left;
    }
`,p=o.Ay.p`
    font-size: ${a.$G.sans_500.fontSize};
    line-height: ${a.$G.sans_500.lineHeight};
    font-weight: ${a.$G.sans_500.fontWeight};
    color: ${a.J2.Grey.color};
    margin-top: 12px;
    margin-bottom: 24px;

    @media (min-width: 768px) {
        font-size: ${a.$G.sans_700.fontSize};
        line-height: ${a.$G.sans_700.lineHeight};
    }
`,c=o.Ay.p`
    display: flex;
    gap: ${a.dB.spacing_400.gap};
`,m=(o.Ay.button`
    font-size: ${a.$G.sans_400_semi.fontSize};
    line-height: ${a.$G.sans_400_semi.lineHeight};
    font-weight: ${a.$G.sans_400_semi.fontWeight};
    text-decoration: underline;
    border: 0;
    background: transparent;
    cursor: pointer;
`,o.Ay.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    height: 54px;
    border-radius: 9px;
    border: 1px solid ${a.J2.Grey1.color};
    max-width: 600px;
    background: ${a.J2.White.color};
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;

    @media (min-width: 768px) {
        height: 60px;
        border: none;
        box-shadow: ${a.E_.shadow_100.boxShadow};
    }
`,o.Ay.img`
    grid-column: 1/2;
    grid-row: 1/2;
    width: 16px;
    height: 16px;
    align-self: center;
    margin-left: 16px;
    object-fit: cover;

    @media (min-width: 768px) {
        margin-left: 20px;
    }
`,o.Ay.button`
    width: calc(100% - 48px);
    margin: 0 auto;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${a.J2.Blue.color};
    border-radius: 9px;
    border: none;
    font-size: ${a.Ox.sans_button_100.fontSize};
    line-height: ${a.Ox.sans_button_100.lineHeight};
    font-weight: ${a.Ox.sans_button_100.fontWeight};
    color: ${a.J2.White.color};
    max-width: 600px;
    margin-top: 24px;
    cursor: pointer;

    @media (min-width: 768px) {
        height: 60px;
        margin: 0 auto;
        margin-top: 24px;
    }
`,o.Ay.p`
    font-size: ${a.$G.sans_800_bold.fontSize};
    line-height: ${a.$G.sans_800_bold.lineHeight};
    font-weight: ${a.$G.sans_800_bold.fontWeight};
    text-align: center;
    margin: 0 auto;
    margin-top: 0px;
    margin-bottom: 12px;

    @media (min-width: 768px) {
        font-size: ${a.$G.sans_1000_bold.fontSize};
        line-height: ${a.$G.sans_1000_bold.lineHeight};
        margin-top: 48px;
    }
`,o.Ay.p`
    font-size: ${a.$G.sans_1100_bold.fontSize};
    line-height: ${a.$G.sans_1100_bold.lineHeight};
    font-weight: ${a.$G.sans_1100_bold.fontWeight};
    text-align: center;
    margin: 0 auto;
    margin-bottom: 16px;

    @media (min-width: 768px) {
        font-size: ${a.$G.sans_1300_bold.fontSize};
        line-height: ${a.$G.sans_1300_bold.lineHeight};
    }
`,o.Ay.p`
    font-size: ${a.$G.sans_300_semi.fontSize};
    line-height: ${a.$G.sans_300_semi.lineHeight};
    font-weight: ${a.$G.sans_300_semi.fontWeight};
    margin: 0 auto;
    margin-bottom: 32px;
    text-align: center;

    span {
        font-weight: ${a.$G.sans_300_bold.fontWeight};
        text-decoration: underline;
    }
    @media (min-width: 768px) {
        font-size: ${a.$G.sans_400_semi.fontSize};
        line-height: ${a.$G.sans_400_semi.lineHeight};
    }
`,o.Ay.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`,(0,o.Ay)(s.Ay)`
    margin-bottom: 48px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
        max-width: 600px;
        margin-bottom: 64px;
    }

    @media (min-width: 1280px) {
    }

    .MuiSlider-rail {
        height: 8px;
        border-radius: ${a.Qk.radius_100.borderRadius};
        background: ${a.J2.Grey1.color};
    }
    .MuiSlider-track {
        height: 8px;
        border-radius: ${a.Qk.radius_100.borderRadius};
        background: ${a.mh.Red.background};
        border: none;
    }
    .MuiSlider-thumb {
        width: 32px;
        height: 32px;
        background: ${a.J2.White.color};
        box-shadow: 0px 1.3px 13px rgba(0, 0, 0, 0.1) !important;
    }
`,o.Ay.div`
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    padding: 0 24px;
    // padding-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        max-width: 1120px;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`),x=o.Ay.p`
    font-size: ${a.$G.sans_500_semi.fontSize};
    font-weight: ${a.$G.sans_500_semi.fontWeight};
    line-height: ${a.$G.sans_500_semi.lineHeight};
    margin: 0;
    margin-bottom: 12px;

    @media (min-width: 768px) {
        font-size: ${a.$G.sans_700_semi.fontSize};
        line-height: ${a.$G.sans_700_semi.lineHeight};
        padding: 0;
    }
`,u=(o.Ay.p`
    font-size: ${a.$G.sans_500_semi.fontSize};
    font-weight: ${a.$G.sans_500_semi.fontWeight};
    color: ${a.J2.White.color};
    line-height: ${a.$G.sans_500_semi.lineHeight};
    padding: 0 24px;
    margin: 0;
    margin-top: 48px;
    grid-row: 1/2;

    @media (min-width: 768px) {
        font-size: ${a.$G.sans_600_semi.fontSize};
        line-height: ${a.$G.sans_600_semi.lineHeight};
        padding: 0;
        margin: 0 auto;
        margin-bottom: 24px;
        margin-top: 80px;
        width: fit-content;
        justify-self: center;
    }
`,o.Ay.p`
    font-size: ${a.so.sans_text_300.fontSize};
    line-height: ${a.so.sans_text_300.lineHeight};
    font-weight: ${a.so.sans_text_300.fontWeight};
    color: ${a.J2.Grey.color};
    margin-bottom: 48px;

    @media (min-width: 768px) {
        padding: 0;
        font-size: ${a.so.sans_text_400.fontSize};
        line-height: ${a.so.sans_text_400.lineHeight};
        font-weight: ${a.so.sans_text_400.fontWeight};       
    }

    @media (min-width: 1024px) {
        margin-bottom: 0;
    }
`),f=(o.Ay.p`
    font-size: ${a.$G.sans_300.fontSize};
    font-weight: ${a.$G.sans_300.fontWeight};
    color: ${a.J2.White.color};
    padding: 0 24px;
    text-align: center;
    line-height: ${a.$G.sans_300.lineHeight};
    margin-top: 24px;
    margin-bottom: 48px;

    @media (min-width: 768px) {
        padding: 0;
        font-size: ${a.$G.sans_400.fontSize};
        line-height: ${a.$G.sans_400.lineHeight};
        margin: 0 auto;
        max-width: 1182px;
        margin-bottom: 85px;
    }
`,o.Ay.p`
    font-size: ${a.$G.sans_900_bold.fontSize};
    line-height: ${a.$G.sans_900_bold.lineHeight};
    font-weight: ${a.$G.sans_900_bold.fontWeight};
    text-align: center;
    margin: 0 auto;
    margin-bottom: 48px;

    @media (min-width: 768px) {
        font-size: ${a.$G.sans_1100_bold.fontSize};
        line-height: ${a.$G.sans_1100_bold.lineHeight};
        margin-bottom: 64px;
    }
`,o.Ay.p`
    font-size: ${a.$G.sans_900_semi.fontSize};
    line-height: ${a.$G.sans_900_semi.lineHeight};
    font-weight: ${a.$G.sans_900_semi.fontWeight};
    color: ${a.J2.Black.color};
    text-align: start;
    margin: 0 auto;
    padding-left: 24px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
        padding: 0;
        margin-bottom: 32px;
        font-size: ${a.$G.sans_1100_semi.fontSize};
        line-height: ${a.$G.sans_1100_semi.lineHeight};
        font-weight: ${a.$G.sans_1100_semi.fontWeight};
        display: flex;
        text-align: start;
        width: 600px;
        margin: 0 auto;
        margin-bottom: 64px;
    }

    @media (min-width: 1024px) {
        width: 100%;
        margin: 0;
    }
`),w=o.Ay.div`
    padding: ${a.dB.spacing_600.padding} 0 0;
    margin: 0 auto;
    width: 100%;

    @media (min-width: 768px) {
        margin: 0 auto;
        padding: ${a.dB.spacing_800.padding} ${a.dB.spacing_400.padding} ${a.dB.spacing_600.padding} ${a.dB.spacing_400.padding};
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        max-width: 1120px;
    }
`,y=(o.Ay.div`
    overflow-x: scroll;
    display: flex;
    justify-content: flex-start;
    gap: 40px;
    margin-bottom: 48px;
    padding-left: 24px;
    padding-right: 24px;

    @media (min-width: 768px) {
        width: 100%;
        justify-content: space-between;
        gap: unset;
        max-width: 1120px;
        overflow-x: unset;
        margin: 0 auto;
        margin-bottom: 48px;
    }
    @media (min-width: 1280px) {
        padding: 0;
    }
    //hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`,o.Ay.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 96px;
`,o.Ay.img`
    background: none;
    height: 96px;
    width: 96px;
    border-radius: ${a.Qk.radius_12.borderRadius};
    object-fit: cover;

    @media (min-width: 768px) {
        height: 64px;
        width: 64px;
    }

    @media (min-width: 1024px) {
        height: 96px;
        width: 96px;
    }
`,o.Ay.p`
    font-size: ${a.$G.sans_300_semi.fontSize};
    line-height: ${a.$G.sans_300_semi.lineHeight};
    font-weight: ${a.$G.sans_300_semi.fontWeight};
    margin: 0;
    margin-top: 12px;

    @media (min-width: 768px) {
        font-size: ${a.$G.sans_400_semi.fontSize};
        line-height: ${a.$G.sans_400_semi.lineHeight};
    }
`,o.Ay.div`
    padding: ${a.dB.spacing_600.padding} 0px;
    background-color: ${a.J2.Accent.color};

    @media (min-width: 768px) {
        padding: ${a.dB.spacing_700.padding} 0px;
    }
`,o.Ay.a`
    margin: 64px auto 0 auto;
    height: 48px;
    border: 1px solid ${a.J2.Black.color};
    border-radius: 9px;
    text-decoration: none;
    display: block;
    width: fit-content;
    padding: 0 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${a.$G.sans_400_semi.fontSize};
    font-weight: ${a.$G.sans_400_semi.fontWeight};
    line-height: ${a.$G.sans_400_semi.lineHeight};
    @media (max-width: 767px) {
        display: none;
    }
`,o.Ay.div`
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
`),$=(o.Ay.div`
    height: 1px;
    width: 90px;
    margin-bottom: 90px;
    background: ${a.J2.Grey2.color};

    @media (min-width: 768px) {
        width: 120px;
        margin-bottom: 120px;
    }
`,o.Ay.button`
    width: 100%;
    padding: ${a.dB.spacing_500.padding} 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${a.Ox.sans_button_200.fontSize};
    line-height: ${a.Ox.sans_button_200.lineHeight};
    font-weight: ${a.Ox.sans_button_200.fontWeight};
    background: none;
    border: none;
    cursor: pointer;

    @media (min-width: 768px) {
        font-size: ${a.$G.sans_700_semi.fontSize};
        line-height: ${a.$G.sans_700_semi.lineHeight};
        padding: ${i=>0===i.index?"0 0 32px 0":"32px 0"};
    }
`),_=o.Ay.p`
    font-size: ${a.so.sans_text_400.fontSize};
    font-weight: ${a.so.sans_text_400.fontWeight};
    line-height: ${a.so.sans_text_400.lineHeight};
    color: ${a.J2.Black.color};
    margin: 0;
    padding-bottom: 32px;
    margin-top: -8px;
    max-width: 767px;
`,b=o.Ay.img`
    width: 8px;
    height: 12px;
    transform: rotate(${i=>i.rotated?"90deg":"-90deg"});
    transition: 0.1s;
    object-fit: cover;
`,j=o.Ay.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 24px;
    @media (min-width: 768px) {
        padding: 0;
        max-width: 600px;
        width: 100%;
        margin: 0 auto;
    }

    @media (min-width: 1024px) {
        margin: 0;
    }
`,A=(o.Ay.div`
    width: 100%;
    background: ${a.J2.White.color};
`,o.Ay.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 25% 25%;
    grid-template-rows: auto auto auto auto;
    @media (min-width: 768px) {
        margin: 0 auto;
        max-width: 1120px;
        grid-template-columns: 1fr 1fr 1fr;
    }
`,o.Ay.div`
    grid-column: 1/4;
    width: 100%;
    height: 1px;
    background: ${a.J2.Grey2.color};
    align-self: flex-end;
`,o.Ay.p`
    font-size: ${a.$G.sans_400_semi.fontSize};
    font-weight: ${a.$G.sans_400_semi.fontWeight};
    line-height: ${a.$G.sans_400_semi.lineHeight};
    margin: 0;
    padding: ${a.dB.spacing_500.padding} 0;

    @media (min-width: 768px) {
        font-size: ${a.$G.sans_600_semi.fontSize};
        line-height: ${a.$G.sans_600_semi.lineHeight};
    }
`,o.Ay.p`
    font-size: ${a.$G.sans_300_semi.fontSize};
    font-weight: ${a.$G.sans_300_semi.fontWeight};
    line-height: ${a.$G.sans_300_semi.lineHeight};
    margin: 0;
    padding-bottom: 20px;

    @media (min-width: 768px) {
        font-size: ${a.$G.sans_600_semi.fontSize};
        line-height: ${a.$G.sans_600_semi.lineHeight};
        justify-self: flex-start;
        margin-top: -8px;
    }
`,o.Ay.img`
    width: calc(100% - 48px);
    border-radius: ${a.Qk.radius_12.borderRadius};
    background: ${a.J2.Grey2.color};
    height: 380px;
    margin: 0 24px;
    justify-self: center;
    margin-bottom: 48px;
    max-width: 1182px;
`,o.Ay.button`
    height: 55px;
    width: calc(100% - 48px);
    margin: 0 auto;
    margin-bottom: 60px;
    background: none;
    color: ${a.J2.White.color};
    font-size: ${a.Ox.sans_button_100.fontSize};
    line-height: ${a.Ox.sans_button_100.lineHeight};
    border: 1px solid ${a.J2.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: ${a.Ox.sans_button_100.fontWeight};
    border-radius: ${a.Qk.radius_100.borderRadius};
    max-width: 360px;
    cursor: pointer;

    @media (min-width: 768px) {
        margin-bottom: 100px;
    }
`,o.Ay.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;

    @media (min-width: 768px) {
        max-width: 1120px;
        gap: 0 48px;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`),G=o.Ay.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    justify-content: center;

    @media (min-width: 768px) {
        width: 352px;
    }

    @media (min-width: 1024px) {
        width: 100%;
    }
`,z=(o.Ay.button`
    height: 48px;
    padding: 0 32px;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${a.J2.White.color};
    font-size: ${a.Ox.sans_button_200.fontSize};
    line-height: ${a.Ox.sans_button_200.lineHeight};
    font-weight: ${a.Ox.sans_button_200.fontWeight};
    margin: 0 auto;
    margin-bottom: 64px;
    border: none;
    background: ${a.J2.Blue.color};
    border-radius: 9px;
    cursor: pointer;
`,o.Ay.img`
    height: 18px;
    object-fit: cover;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        height: 32px;
        margin-top: -8px;
    }
`,o.Ay.div`
    position: fixed;
    bottom: 0;
    left: 0;
    padding: ${a.dB.spacing_300.padding} ${a.dB.spacing_400.padding};
    width: 100%;
    background: ${a.J2.White.color};
    z-index: 100;
    transform: ${i=>i.hide?"none":"translateY(100%)"};
    transition: transform 0.3s ease-in-out;
`),v=(o.Ay.a`
    font-size: ${a.$G.sans_300_semi.fontSize};
    line-height: ${a.$G.sans_300_semi.lineHeight};
    font-weight: ${a.$G.sans_300_semi.fontWeight};
`,o.Ay.img`
    text-align: center;
    justify-content: center;
    width: 100%;
    object-fit: cover;
    background: ${a.J2.Grey4.color};
    margin: 64px 0 0;
    height: 140px;

    @media (min-width: 768px) {
        height: 360px;
    }

    @media (min-width: 1200px) {
        max-width: 1120px;
        margin: ${a.dB.spacing_900.margin} auto 0;
    }
`,o.Ay.div`
    font-size: ${a.$G.sans_300.fontSize};
    line-height: ${a.$G.sans_300.lineHeight};
    color: ${a.J2.Grey.color};
    font-weight: ${a.$G.sans_300.fontWeight};
    padding-top: 24px;
    justify-self: start;
    margin: 0 auto;
    width: 100%;
    overflow: wrap;

    @media (min-width: 768px) {
        max-width: 1120px;
    }
`,o.Ay.button`
    height: 48px;
    border-radius: 90px;
    width: 100%;
    min-width: 180px;
    position: relative;
    padding: 0 32px;
    background: ${i=>"red"===i.background?a.J2.Red.color:"blue"===i.background?a.J2.Blue.color:"black"===i.background?a.J2.Black.color:"grey"===i.background?a.J2.Grey1.color:void 0};
    background: ${i=>i.disabled&&a.J2.Grey1.color};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: ${a.Ox.sans_button_200.fontSize};
    font-weight: ${a.Ox.sans_button_200.fontWeight};
    color: ${i=>i.isLoading?"transparent":a.J2.White.color};
    margin-top: auto;
    line-height: ${a.Ox.sans_button_200.lineHeight};
    cursor: pointer;
    user-select: none;
`),k=o.Ay.svg`
    width: 16px;
    height: 16x;
    margin: ${a.dB.spacing_300.margin} ${a.dB.spacing_250.margin} ${a.dB.spacing_300.margin} 0;
`;var H=e(579);const S=i=>{let{question:t,answer:e,learnMoreLink:o,index:s,length:r}=i;const[d,l]=(0,n.useState)(!1);return(0,H.jsxs)(y,{style:{borderBottom:s===r-1?"none":`1px solid ${a.J2.Grey2.color}`},children:[(0,H.jsxs)($,{type:"button",onClick:()=>l(!d),index:s,children:[t,(0,H.jsx)(b,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg",rotated:d,alt:"Button icon"})]}),d&&(0,H.jsxs)(_,{children:[e," ",o&&(0,H.jsx)("a",{target:window.innerWidth<768?"":"_blank",href:o,rel:"noreferrer",style:{fontWeight:"600",color:a.J2.Black.color,textDecoration:"underline"},children:"Learn more"})]})]})},W=()=>{const i=[{question:"Can my place be listed?",answer:"You can list any type of accommodation that meets our guidelines for safety and cleanliness. This includes over 500 types of places from entire homes to shared rooms and beyond.",learnMoreLink:null},{question:"How do I get started?",answer:"Once you\u2019re ready to begin, simply click Create a listing to start listing your place. Whether it\u2019s your first time hosting or you\u2019re a seasoned host, there\u2019s a place here for you.",learnMoreLink:null},{question:"Do I have to host instant bookings?",answer:"Once you have created your listing, you can choose whether to accept instant bookings or requests from guests booking a stay with you.",learnMoreLink:null},{question:"Can I sync my calendar?",answer:"You\u2019ll be able to sync your calendar with Airbnb, Stayz, Hipcamp, and more. We\u2019ll help you connect your iCal calendar.",learnMoreLink:"https://help.anystay.com.au/en/articles/7010834-syncing-your-calendar/"},{question:"What can guests pay with?",answer:"Guests will be able to pay with any debit or credit card from Australia or around the world. In addition, you\u2019ll also be able to accept payments from Apple Pay, Google Pay, Klarna and more.",learnMoreLink:null},{question:"What do I have to pay?",answer:"Anystay is free to use - we take a small fee from your completed payouts to help us improve your experience and the Australian hosting community.",learnMoreLink:null},{question:"How do payouts work?",answer:"Payouts will be sent to you via our secure payout system to any bank account in Australia. You can learn more about how payouts work and how to connect your payout method after creating your first listing.",learnMoreLink:"https://help.anystay.com.au/en/articles/7016804-adding-payout-methods"}];return(0,H.jsxs)(w,{children:[(0,H.jsx)(f,{children:"Questions you asked"}),(0,H.jsx)(j,{children:i.map(((t,e)=>(0,H.jsx)(S,{question:t.question,answer:t.answer,learnMoreLink:t.learnMoreLink,index:e,length:i.length},t.question)))})]})};var B=e(4204);o.Ay.div`
    height: 24px;
    width: fit-content;
    padding: 0 12px;
    background: ${a.J2.White};
    border-radius: ${a.Qk.radius_100.borderRadius};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    color: ${a.J2.Grey.color};
    font-size: ${a.$G.sans_300.fontSize};
    font-style: normal;
    font-weight: ${a.$G.sans_300.fontWeight};
    line-height: ${a.$G.sans_300.lineHeight};

    @media (max-width: 767px) {
        display: none;
    }
`;const J=o.Ay.img`
    height: 48px;
    width: 100%;
    margin-bottom: 16px;
    object-fit: contain;
`,L=o.Ay.div`
    width: 100%;
    background-color: ${a.J2.White};
`,O=o.Ay.div`
    width: calc(100% - 48px);
    height: 1px;
    border-bottom: 1px solid ${a.J2.Grey2.color};
    padding: 0 24px;
    margin: 0 auto;

    @media (min-width: 768px) {
        max-width: 1072px;
    }
`,C=o.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${a.dB.spacing_600.padding} ${a.dB.spacing_400.padding};
    background-color: ${a.J2.White};
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        gap: 0;
        padding: ${a.dB.spacing_800.padding} ${a.dB.spacing_400.padding} ${a.dB.spacing_800.padding} ${a.dB.spacing_400.padding};
    }
`,F=o.Ay.h2`
    margin: 0;
    font-size: ${a.$G.sans_500_semi.fontSize};
    line-height: ${a.$G.sans_500_semi.lineHeight};
    font-weight: ${a.$G.sans_500_semi.fontWeight};
    color: ${a.J2.Black.color};
    margin-bottom: 12px;

    @media (min-width: 768px) {
        font-size: ${a.$G.sans_700_semi.fontSize};
        line-height: ${a.$G.sans_700_semi.lineHeight};
    }
`,I=o.Ay.p`
    margin: 0;
    font-size: ${a.so.sans_text_300.fontSize};
    line-height: ${a.so.sans_text_300.lineHeight};
    font-weight: ${a.so.sans_text_300.fontWeight};
    color: ${a.J2.Grey.color};

    @media (min-width: 768px) {
        font-size: ${a.so.sans_text_400.fontSize};
        line-height: ${a.so.sans_text_400.lineHeight};
        font-weight: ${a.so.sans_text_400.fontWeight};
        max-width: 487px;
    }
`,E=o.Ay.div`
    display: flex;
    justify-content: start;
`,R=o.Ay.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${a.dB.spacing_600.gap};

    @media (min-width: 768px) {
        padding-top: 16px;
    }
    @media (min-width: 1024px) {
        flex-direction: row;
    }
`,M=o.Ay.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
`,Q=o.Ay.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: ${a.$G.sans_1000_semi.fontSize};
    font-weight: ${a.$G.sans_1000_semi.fontWeight};
    line-height: ${a.$G.sans_1000_semi.lineHeight};
    color: ${a.J2.Black.color};
    margin-bottom: 48px;

    @media (min-width: 768px) {
        font-size: ${a.$G.sans_1200_semi.fontSize};
        font-weight: ${a.$G.sans_1200_semi.fontWeight};
        line-height: ${a.$G.sans_1200_semi.lineHeight};
    }
`,q=i=>(0,H.jsxs)(L,{children:[(0,H.jsxs)(C,{children:[(0,H.jsx)(Q,{children:"Unlock new earning opportunities"}),(0,H.jsxs)(R,{children:[(0,H.jsx)(E,{children:(0,H.jsxs)(M,{children:[(0,H.jsx)(J,{style:{width:"143px"},src:"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/Google.png",alt:"Google logo"}),(0,H.jsx)(F,{children:"Google Vacation Rentals"}),(0,H.jsx)(I,{children:"Get discovered on the world's largest search engine with automatic listing on Google Vacation Rentals. "})]})}),(0,H.jsx)(E,{children:(0,H.jsxs)(M,{children:[(0,H.jsx)(J,{style:{width:"48px"},src:"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/Fliggy.png",alt:"Fliggy logo"}),(0,H.jsx)(F,{children:"Access Fliggy\u2019s 300M+ users"}),(0,H.jsx)(I,{children:"Reach new guests in Asia and beyond with Fliggy, a leading online travel platform by Alibaba. "})]})}),(0,H.jsx)(E,{children:(0,H.jsxs)(M,{children:[(0,H.jsx)(J,{style:{width:"48px"},src:"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/Xiaozhu.png",alt:"Xiaozhu logo"}),(0,H.jsx)(F,{children:"Unlock Asia with Xiaozhu"}),(0,H.jsx)(I,{children:"Distribute directly to China's fastest growing short term accommodation platform. "})]})})]})]}),(0,H.jsx)(O,{})]});var P=e(9136),T=e(831),Y=e(3216),U=e(7607),D=e(8108),K=e(619),N=e(8306),V=e(9856);const X={"@context":"https://schema.org","@type":"WebPage",name:"Become a Host with Anystay",description:"List your property on Anystay and start earning. We make it easy to manage your short-term rental and maximize your income.",url:"https://www.anystay.com.au/list-your-place",isPartOf:{"@type":"WebSite",name:"Anystay",url:"https://www.anystay.com.au"},primaryImageOfPage:{"@type":"ImageObject",url:"https://d292awxalydr86.cloudfront.net/Midjourney+AI+/Outputs/HERO.png",width:"1522",height:"853"},audience:{"@type":"Audience",audienceType:"Property Owners"},keywords:"short-term rental, vacation rental, property management, host, Airbnb alternative",mainEntity:[{"@type":"Question",name:"Can my place be listed?",acceptedAnswer:{"@type":"Answer",text:"You can list any type of accommodation that meets our guidelines for safety and cleanliness. This includes over 500 types of places from entire homes to shared rooms and beyond."}},{"@type":"Question",name:"How do I get started?",acceptedAnswer:{"@type":"Answer",text:"Once you\u2019re ready to begin, simply click Create a listing to start listing your place. Whether it\u2019s your first time hosting or you\u2019re a seasoned host, there\u2019s a place here for you."}},{"@type":"Question",name:"Do I have to host instant bookings?",acceptedAnswer:{"@type":"Answer",text:"Once you have created your listing, you can choose whether to accept instant bookings or requests from guests booking a stay with you."}},{"@type":"Question",name:"Can I sync my calendar?",acceptedAnswer:{"@type":"Answer",text:"You\u2019ll be able to sync your calendar with Airbnb, Stayz, Hipcamp, and more. We\u2019ll help you connect your iCal calendar."}},{"@type":"Question",name:"What can guests pay with?",acceptedAnswer:{"@type":"Answer",text:"Guests will be able to pay with any debit or credit card from Australia or around the world. In addition, you\u2019ll also be able to accept payments from Apple Pay, Google Pay, Klarna and more."}},{"@type":"Question",name:"How do payouts work?",acceptedAnswer:{"@type":"Answer",text:"Payouts will be sent to you via our secure payout system to any bank account in Australia. You can learn more about how payouts work and how to connect your payout method after creating your first listing."}}],significantLink:["https://www.help.anystay.com.au/en/articles/7016728-how-to-start-hosting","https://help.anystay.com.au/en/collections/3862361-hosts"]},Z=o.Ay.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 48px;
    @media (min-width: 768px) {
        max-width: 1120px;
        padding-bottom: 80px;
    }
`,ii=o.Ay.div`
    width: 100%;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${a.$G.sans_1000_semi.fontSize};
    font-weight: ${a.$G.sans_1000_semi.fontWeight};
    line-height: ${a.$G.sans_1000_semi.lineHeight};
    color: ${a.J2.Black.color};
    padding-bottom: 48px;
    text-align: center;
    padding-top: 32px;

    @media (min-width: 768px) {
        padding-bottom: 0px;
        padding-top: 80px;
        font-size: ${a.$G.sans_1200_semi.fontSize};
        font-weight: ${a.$G.sans_1200_semi.fontWeight};
        line-height: ${a.$G.sans_1200_semi.lineHeight};
    }
    @media (min-width: 1024px) {
        padding-top: 128px;
    }
`,ti=o.Ay.div`
    width: 100%;
    margin: 0 auto;
    padding-top: 64px;
    padding: 0 24px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    overflow: scroll;
    gap: ${a.dB.spacing_400.gap};

    ::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }
    @media (min-width: 768px) {
        padding-top: 64px;
        max-width: 1120px;
    }
`,ei=o.Ay.div`
    min-width: 280px;
    width: 280px;
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: ${a.Qk.radius_16.borderRadius};
    background: none;
    text-align: left;
    padding: 0;

    @media (min-width: 768px) {
        width: calc(33.33% - 30px);
    }
`,ni=o.Ay.div`
    width: 100%;
    aspect-ratio: 1/1;
    background: ${a.J2.Grey1.color};
    border-radius: ${a.Qk.radius_12.borderRadius};
    overflow: hidden;
`,oi=o.Ay.img`
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
`,si=o.Ay.p`
    font-size: ${a.$G.sans_500_semi.fontSize};
    line-height: ${a.$G.sans_500_semi.lineHeight};
    font-weight: ${a.$G.sans_500_semi.fontWeight};
    color: ${a.J2.Black.color};
    margin-top: 24px;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media(min-width: 768px){
    font-size: ${a.$G.sans_700_semi.fontSize};
    line-height: ${a.$G.sans_700_semi.lineHeight};
    font-weight: ${a.$G.sans_700_semi.fontWeight};  
    }  
`,ai=o.Ay.div`
    width: 100%;
    margin-top: 12px;
    font-size: ${a.so.sans_text_300};
    line-height: ${a.so.sans_text_300};
    font-weight: ${a.so.sans_text_300};
    color: ${a.J2.Grey.color};

    @media(min-width: 768px){
    font-size: ${a.so.sans_text_400.fontSize};
    line-height: ${a.so.sans_text_400.lineHeight};
    font-weight: ${a.so.sans_text_400.fontWeight};  
    }  
`,ri=o.Ay.button`
    height: 48px;
    padding: 0 20px;
    margin-top: 64px;
    font-size: ${a.$G.sans_400_semi.fontSize};
    line-height: ${a.$G.sans_400_semi.lineHeight};
    font-weight: ${a.$G.sans_400_semi.fontWeight};
    border: 1px solid ${a.J2.Black.color};
    color: ${a.J2.Black.color};
    border-radius: 9px;
    background-color: ${a.J2.White.color};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    gap: ${a.dB.spacing_250.gap};
    cursor: pointer;
`,di=o.Ay.img`
    height: 24px;
    width: 24px;
    object-fit: cover;
`,li=i=>{let{imgUrl:t,title:e,description:n}=i;return(0,H.jsxs)(ei,{children:[(0,H.jsx)(ni,{children:(0,H.jsx)(oi,{src:t,alt:"Host image"})}),(0,H.jsx)(si,{children:e}),(0,H.jsx)(ai,{children:n})]})},hi=i=>{let{createListingBtnOnClick:t}=i;const[e,o]=(0,n.useState)(!1),s=(0,V.A)(e,t);return(0,H.jsxs)(Z,{children:[(0,H.jsx)(ii,{children:"Join hosts from around Australia"}),(0,H.jsxs)(ti,{children:[(0,H.jsx)(li,{title:"Cockatoo, VIC",description:"Trickle Hill is located on the edge of the Dandenong ranges, very close to Kurth Kiln and Bunyip National park.",imgUrl:"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/Listing+1.jpg"}),(0,H.jsx)(li,{title:"North Bondi, NSW",description:"Welcome to the ultimate Bondi Luxury stay. Simply the best view of the iconic Bondi Beach.",imgUrl:"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/Listing+2.jpg"}),(0,H.jsx)(li,{title:"Kalinga, NSW",description:"Our beautiful Kirribilli apartment has the best views of the Sydney Harbour Bridge you could possibly ask for.",imgUrl:"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/listing+3.jpg"})]}),(0,H.jsxs)(ri,{onClick:()=>t(),ref:s,children:[(0,H.jsx)(di,{src:"https://d292awxalydr86.cloudfront.net/Branding/Partners/Hostaway+icon.svg"}),"Sync with Hostaway"]})]})};var gi=e(9421);const pi=o.Ay.div`
    width: 100%;
    background-color: ${a.J2.Khaki.color};
    padding-top: 48px;
    padding-bottom: 48px;
    @media (min-width: 768px) {
        padding-top: 80px;
        padding-bottom: 0px;
    }
`,ci=o.Ay.p`
    padding: 0 24px;
    font-size: 32px;
    line-height: 36px;
    text-align: center;
    font-weight: ${a.$G.sans_1000_semi.fontWeight};

    @media (min-width: 768px) {
        font-size: ${a.$G.sans_1200_semi.fontSize};
        font-weight: ${a.$G.sans_1200_semi.fontWeight};
        line-height: ${a.$G.sans_1200_semi.lineHeight};
    }
`,mi=o.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${a.dB.spacing_600.padding} ${a.dB.spacing_400.padding} 0 ${a.dB.spacing_400.padding};

    @media (min-width: 768px) {
        padding: ${a.dB.spacing_700.padding} ${a.dB.spacing_400.padding} ${a.dB.spacing_500.padding} ${a.dB.spacing_400.padding};
        display: flex;
        margin: 0 auto;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 1120px;
    }
`,xi=o.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 48px;
    @media (min-width: 768px) {
        width: calc(50% - 22.5px);
    }
    @media (min-width: 1280px) {
        width: calc(33.33% - 30px);
    }
`,ui=o.Ay.img`
    height: 24px;
    width: 24px;
    margin-bottom: 24px;
    background: none;
`,fi=o.Ay.p`
    font-size: ${a.$G.sans_500_semi.fontSize};
    font-weight: ${a.$G.sans_500_semi.fontWeight};
    line-height: ${a.$G.sans_500_semi.lineHeight};
    color: ${a.J2.Black.color};
    margin-bottom: 12px;

    @media (min-width: 768px) {
        font-size: ${a.$G.sans_700_semi.fontSize};
        font-weight: ${a.$G.sans_700_semi.fontWeight};
        line-height: ${a.$G.sans_700_semi.lineHeight};
    }
`,wi=o.Ay.p`
    font-size: ${a.so.sans_text_300.fontSize};
    line-height: ${a.so.sans_text_300.lineHeight};
    font-weight: ${a.so.sans_text_300.fontWeight};
    color: ${a.J2.Grey.color};

    @media (min-width: 768px) {
        font-size: ${a.so.sans_text_400.fontSize};
        line-height: ${a.so.sans_text_400.lineHeight};
        font-weight: ${a.so.sans_text_400.fontWeight};
    }
`,yi=o.Ay.button`
    height: 48px;
    width: calc(100% - 48px);
    border-radius: 9px;
    border: 1px solid ${a.J2.Black.color};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;
    background: none;
    font-size: ${a.$G.sans_400_semi.fontSize};
    line-height: ${a.$G.sans_400_semi.lineHeight};
    font-weight: ${a.$G.sans_400_semi.fontWeight};

    @media (min-width: 768px) {
        display: none;
    }
`,$i=()=>{const[i,t]=(0,n.useState)(!1);return(0,H.jsxs)(pi,{children:[(0,H.jsx)(ci,{children:"Host with the tools you love"}),(0,H.jsxs)(mi,{children:[(0,H.jsxs)(xi,{children:[(0,H.jsx)(ui,{src:"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/%F0%9F%97%93%EF%B8%8F.jpg"}),(0,H.jsx)(fi,{children:"Sync your calendar"}),(0,H.jsx)(wi,{children:"You can use Anystay by itself or sync with your current platform to host short and long stays anywhere in Australia."})]}),(0,H.jsxs)(xi,{children:[(0,H.jsx)(ui,{src:"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/%F0%9F%86%98.jpg"}),(0,H.jsx)(fi,{children:"24/7 Australian support"}),(0,H.jsx)(wi,{children:"Enjoy peace of mind with 24/7 Australian-based support, ready to assist you anytime."})]}),(0,H.jsxs)(xi,{children:[(0,H.jsx)(ui,{src:"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/%F0%9F%9B%8E%EF%B8%8F.jpg"}),(0,H.jsx)(fi,{children:"Personal account manager"}),(0,H.jsx)(wi,{children:"Get dedicated support with your own personal account manager, we\u2019ll help you as your grow."})]}),window.innerWidth<768&&!i?null:(0,H.jsxs)(xi,{children:[(0,H.jsx)(ui,{src:"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/%E2%8F%B0.jpg"}),(0,H.jsx)(fi,{children:"Import your listings"}),(0,H.jsx)(wi,{children:"Use Hostaway to sync your listings, calendar and messages with Anystay instantly. "})]}),window.innerWidth<768&&!i?null:(0,H.jsxs)(xi,{children:[(0,H.jsx)(ui,{src:"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/%F0%9F%91%AE.jpg"}),(0,H.jsx)(fi,{children:"Active fraud detection"}),(0,H.jsx)(wi,{children:"Stay secure with advanced fraud detection, protecting your bookings from threats around the clock."})]}),window.innerWidth<768&&!i?null:(0,H.jsxs)(xi,{children:[(0,H.jsx)(ui,{src:"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/%E2%9C%85.jpg"}),(0,H.jsx)(fi,{children:"ID verification"}),(0,H.jsx)(wi,{children:"Whether you\u2019re hosting or booking, Anystay\u2019s secure ID verification ensures a safe experience for everyone."})]}),window.innerWidth<768&&!i?null:(0,H.jsxs)(xi,{children:[(0,H.jsx)(ui,{src:"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/%F0%9F%94%92.jpg"}),(0,H.jsx)(fi,{children:"Fast, secure payouts"}),(0,H.jsx)(wi,{children:"Enjoy automatic payouts direct to your bank account with our secure payment system.  "})]}),window.innerWidth<768&&!i?null:(0,H.jsxs)(xi,{children:[(0,H.jsx)(ui,{src:"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/%F0%9F%93%96.jpg"}),(0,H.jsx)(fi,{children:"Free hosting resources"}),(0,H.jsx)(wi,{children:"Access our library of hosting guides to help you navigate your hosting journey."})]}),window.innerWidth<768&&!i?null:(0,H.jsxs)(xi,{children:[(0,H.jsx)(ui,{src:"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/%F0%9F%87%A6%F0%9F%87%BA.jpg"}),(0,H.jsx)(fi,{children:"Aussie owned platform"}),(0,H.jsx)(wi,{children:"We\u2019re owned and built by a team around Australia with a mission to create experience driven stays."})]})]}),(0,H.jsx)(yi,{onClick:()=>t(!i),type:"button",children:i?"See less":"See more"})]})},_i=o.Ay.div`
    position: relative;
    background: ${a.J2.White.color};
    border-radius: ${a.Qk.radius_16.borderRadius};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: ${a.E_.shadow_300.boxShadow};
    margin-top: 40px;
    margin-left: auto;
    height: fit-content;
    @media (max-width: 1023px) {
        display: none;
    }
    @media (min-width: 1024px) {
        width: 400px;
        max-height: 566px;
    }

    @media (min-width: 1280px) {
        width: 480px;
        /* min-width: 400px;
        max-width: 480px; */
        max-height: 566px;
    }
`,bi=o.Ay.img`
    width: calc(100% - 32px);
    margin: ${a.dB.spacing_300.margin};
    object-fit: cover;
    border-radius: ${a.Qk.radius_12.borderRadius};
    aspect-ratio: 20/19;
`,ji=o.Ay.p`
    font-size: ${a.$G.sans_350_semi.fontSize};
    font-weight: ${a.$G.sans_350_semi.fontWeight};
    line-height: ${a.$G.sans_350_semi.lineHeight};
    margin: 0;
    padding-left: 16px;
    margin-bottom: 2px;
`,Ai=o.Ay.p`
    font-size: ${a.$G.sans_300.fontSize};
    font-weight: ${a.$G.sans_300.fontWeight};
    line-height: ${a.$G.sans_300.lineHeight};
    color: ${a.J2.Grey.color};
    margin: 0;
    padding-left: 16px;
    margin-bottom: 2px;
`,Gi=o.Ay.p`
    font-size: ${a.$G.sans_350_semi.fontSize};
    font-weight: ${a.$G.sans_350_semi.fontWeight};
    line-height: ${a.$G.sans_350_semi.lineHeight};
    margin: 0;
    padding-left: 16px;
    margin-top: 4px;
    text-decoration: underline;
    margin-bottom: 16px;
`,zi=()=>(0,H.jsxs)(_i,{children:[(0,H.jsx)(bi,{src:"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/Hero+listing.jpg"}),(0,H.jsx)(ji,{children:"House in Tambourine Mountains"}),(0,H.jsx)(Ai,{children:"Mountain Majesty with Poolside: Relaxing Gateway"}),(0,H.jsx)(Ai,{children:"4 - 12 Jan"}),(0,H.jsx)(Gi,{children:"$124 AUD"})]}),vi=()=>{const[i,t]=(0,T.useRecoilState)(K.B),[e,o]=(0,T.useRecoilState)(U.o),[s,f]=(0,T.useRecoilState)(P.c6),w=(0,Y.Zp)(),[y,$]=(0,n.useState)(!1),[_,b]=(0,n.useState)(!1),[j,S]=(0,n.useState)(!1),J=(0,Y.zy)(),L=()=>{window.scrollY>250?b(!0):b(!1)};(0,n.useEffect)((()=>(window.innerWidth<768&&window.addEventListener("scroll",L),()=>{window.innerWidth<768&&window.removeEventListener("scroll",L)})),[]);const O=async()=>{e?($(!0),w(`/create-listing/${e&&e.id}`)):(f(!0),t("create-listing"))};(0,V.A)(j,(()=>{j?(window.Intercom("hide"),S(!1)):(window.Intercom("showNewMessage",""),S(!0))}),!0);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(N.A,{title:"List your place | Anystay",jsonLd:X}),(0,H.jsxs)(r,{children:[(0,H.jsx)(d,{children:(0,H.jsxs)(l,{children:[(0,H.jsxs)(h,{children:[(0,H.jsxs)(g,{children:["You could earn",(0,H.jsx)("br",{})," $6046 monthly ",(0,H.jsx)("br",{}),"in Australia."]}),(0,H.jsx)(p,{children:"List & start earning with Anystay."}),(0,H.jsx)(c,{children:(0,H.jsxs)(v,{isLoading:y,background:"black",disabled:y,style:{width:"unset",padding:"0 24px 0 20px",marginTop:"0",height:"48px",fontSize:"16px"},onClick:O,children:[(0,H.jsxs)(k,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,H.jsx)("rect",{x:"10.5",width:"3",height:"24",rx:"1.5",fill:a.J2.White.color}),(0,H.jsx)("rect",{y:"13.5",width:"3",height:"24",rx:"1.5",transform:"rotate(-90 0 13.5)",fill:a.J2.White.color})]}),"Create a listing"]})})]}),(0,H.jsx)(zi,{})]})}),(0,H.jsx)(m,{children:(0,H.jsxs)(A,{children:[(0,H.jsxs)(G,{children:[(0,H.jsx)(x,{children:"Unlock a new revenue channel"}),(0,H.jsx)(u,{children:"You can use Anystay by itself or sync with your current platform to host short and long stays anywhere in Australia."})]}),(0,H.jsxs)(G,{children:[(0,H.jsx)(x,{children:"Earn more with every booking"}),(0,H.jsx)(u,{children:"Get paid more with every booking when you host flexible stays from a single night to many months."})]}),(0,H.jsxs)(G,{children:[(0,H.jsx)(x,{style:{padding:"0px"},children:"Get 24/7 Australian support"}),(0,H.jsx)(u,{style:{padding:"0px"},children:"We're from Brisbane, Australia! Anystay is proudly built by a passionate team of hosts from around Australia."})]})]})}),(0,H.jsx)(hi,{createListingBtnOnClick:O}),(0,H.jsx)($i,{}),(0,H.jsx)(q,{}),(0,H.jsx)(W,{}),(0,H.jsx)(z,{hide:window.innerWidth<768&&_,children:(0,H.jsx)(B.A,{background:"blue",isLoading:y,onClick:O,disabled:y,children:"Create a listing"})})]}),(0,H.jsx)(gi.A,{handleScroll:!_,path:J.pathname}),(0,H.jsx)(D.A,{})]})}},875:(i,t,e)=>{e.d(t,{I:()=>s});var n=e(5043);e(579);const o=n.createContext();const s=()=>{const i=n.useContext(o);return null!=i&&i}}}]);
//# sourceMappingURL=7358.2241f1ae.chunk.js.map
//# debugId=f913965c-00f6-5032-999e-f6a1438920a5
