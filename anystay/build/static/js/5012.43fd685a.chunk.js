"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="11fa8cdf-fb4a-5376-9cbb-b70f1c3229b5")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[5012],{9421:(i,t,e)=>{e.d(t,{A:()=>x});var n=e(2119),o=e(4936),a=e(6779);const s=n.Ay.div`
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
`,r=(0,n.Ay)(a.P.svg)`
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
`;var h=e(5043),g=e(6138),c=e(9856),p=e(65),m=e(579);const x=i=>{let{handleScroll:t,path:e}=i;const[n,o]=(0,h.useState)(!1),a=(0,h.useRef)(!1),x=(0,g.A)(),[f,u]=(0,p.A)(window);(0,h.useEffect)((()=>(window.Intercom("boot",{app_id:"njsfur2t"}),window.Intercom("onHide",(()=>{a.current&&(o(!1),a.current=!1)})),window.Intercom("onShow",(()=>{const i=document.querySelector(".intercom-messenger-frame");i&&setTimeout((()=>{i.style.cssText=x?"\n                        bottom: 88px !important;\n                        height: 90vh !important;\n                        ":"\n                        bottom: 0 !important;\n                        height: 100vh !important;\n                        "}),100)})),()=>{window.Intercom("shutdown")})),[x]);const $=()=>{n?(window.Intercom("hide"),a.current=!1,o(!1)):(window.Intercom("showNewMessage",""),o(!0),a.current=!0),setTimeout((()=>{const i=document.querySelector(".intercom-messenger-frame");i&&(i.style.cssText=x?"\n                        bottom: 88px !important;\n                        height: 90vh !important;\n                    ":"\n                        bottom: 0 !important;\n                        height: 100vh !important;\n                    ")}),500)},w=(0,c.A)(n,$,!0);return(0,m.jsxs)(s,{onClick:()=>{$()},ref:w,transition:t,path:e,children:[!n&&(0,m.jsx)(d,{children:(0,m.jsx)(l,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Question.svg",alt:"Support Icon"})}),n&&(0,m.jsx)(r,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",initial:{rotate:-60},animate:{rotate:0},transition:{duration:.2,ease:"easeInOut"},children:(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z",fill:"white"})})]})}},5246:(i,t,e)=>{e.r(t),e.d(t,{default:()=>bi});var n=e(5043),o=e(2119),a=e(5475),s=e(6779),r=e(4936);const d=o.Ay.div`
    position: relative;
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding-top: 146px;

    @media (min-width: 768px) {
        padding-top: 158px;
    }
`,l=o.Ay.div`
    width: calc(100% - 48px);
    align-content: flex-start;
    margin: ${r.dB.spacing_400.margin} auto;
    min-height: 100vh;
    gap: 24px;
    display: flex;
    flex-wrap: wrap;
    &::after {
        content: "";
        flex-grow: 999;
    }
    @media (max-width: 767px) {
        display: none;
    }
`,h=o.Ay.div`
    width: calc(100% - 16px);
    margin: ${r.dB.spacing_300.margin} auto ${r.dB.spacing_400.margin};
    display: flex;
    flex-direction: column;
    gap: ${r.dB.spacing_300.gap};
    justify-content: space-between;
    @media (min-width: 768px) {
        display: none;
    }
`,g=o.Ay.div`
    width: 100%;
    height: 72px;
    border: 1px solid ${r.J2.Grey2.color};
    border-radius: ${r.Qk.radius_12.borderRadius};
    display: flex;
    flex-direction: row;
    align-items: center;
`,c=o.Ay.div`
    margin: 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
`,p=o.Ay.div`
    font-size: ${r.$G.sans_300_semi.fontSize};
    line-height: ${r.$G.sans_300_semi.lineHeight};
    font-weight: ${r.$G.sans_300_semi.fontWeight};
`,m=o.Ay.div`
    font-size: ${r.$G.sans_200.fontSize};
    line-height: ${r.$G.sans_200.lineHeight};
    font-weight: ${r.$G.sans_200.fontWeight};
    color: ${r.J2.Grey.color};
`,x=o.Ay.button`
    width: 81px;
    height: 32px;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    border-radius: ${r.Qk.radius_100.borderRadius};
    font-size: ${r.$G.sans_300_semi.fontSize};
    line-height: ${r.$G.sans_300_semi.lineHeight};
    font-weight: ${r.$G.sans_300_semi.fontWeight};
    background-color: ${r.J2.Black.color};
    color: ${r.J2.White.color};
    margin-left: auto;
    margin-right: 16px;
`,f=o.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 8px;
`,u=o.Ay.div`
    max-width: calc(50% - 4px);
    display: flex;
    flex-direction: column;
    gap: ${r.dB.spacing_300.gap};
`;o.Ay.div`
    width: calc(100% - 48px);
    margin: 0 auto;
    height: 233px;
    background: ${r.J2.White.color};
    display: flex;
    align-items: center;
    padding: ${r.dB.spacing_250.padding};
    background-color: ${r.J2.Yellow.color};
    border-radius: ${r.Qk.radius_12.borderRadius};
    gap: ${r.dB.spacing_400.gap};
`,o.Ay.img`
    aspect-ratio: 1/1;
    height: 100%;
    border-radius: ${r.Qk.radius_12.borderRadius};
    object-fit: cover;
`,o.Ay.div``,o.Ay.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`,o.Ay.h1`
    font-size: ${r.$G.sans_1000_bold.fontSize};
    line-height: ${r.$G.sans_1000_bold.lineHeight};
    font-weight: ${r.$G.sans_1000_bold.fontWeight};
    color: ${r.J2.White.color};
    text-align: left;
    margin-bottom: 32px;
    max-width: 220px;
    margin-right: auto;

    @media (min-width: 768px) {
        font-size: ${r.$G.sans_1100_bold.fontSize};
        line-height: ${r.$G.sans_1100_bold.lineHeight};
        font-weight: ${r.$G.sans_1100_bold.fontWeight};
        max-width: 460px;
        margin-bottom: 0;
        // margin-left: 64px;
    }
`,o.Ay.h2`
    font-size: ${r.$G.sans_300_semi.fontSize};
    margin-top: 0;
    line-height: ${r.$G.sans_300_semi.lineHeight};
    font-weight: ${r.$G.sans_300_semi.fontWeight};
    color: ${r.J2.White.color};
    text-align: center;

    @media (max-width: 1024px) {
        display: none;
    }
`,o.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;

    @media (min-width: 1024px) {
        width: calc(100% - 160px);
        max-width: 1440px;
        display: grid;
        grid-template-rows: auto auto auto auto auto;
        grid-template-columns: 50% 50%;
        /* padding: 0 116px; */
        margin: 0 auto;
    }
`,o.Ay.p`
    font-size: ${r.$G.sans_300_semi.fontSize};
    line-height: ${r.$G.sans_300_semi.lineHeight};
    font-weight: ${r.$G.sans_300_semi.fontWeight};
    margin: 0;
    margin-bottom: 8px;
    margin-top: 64px;

    @media (min-width: 768px) {
        font-size: ${r.$G.sans_400_semi.fontSize};
        line-height: ${r.$G.sans_400_semi.lineHeight};
        margin-top: 128px;
    }
    @media (min-width: 1024px) {
        grid-column: 1/3;
        justify-self: center;
    }
`,o.Ay.p`
    width: 100%;
    font-size: ${r.$G.sans_900_bold.fontSize};
    line-height: ${r.$G.sans_900_bold.lineHeight};
    font-weight: ${r.$G.sans_900_bold.fontWeight};
    text-align: center;
    margin: 0;
    margin-bottom: 40px;

    @media (min-width: 768px) {
        font-size: ${r.$G.sans_1000_bold.fontSize};
        line-height: ${r.$G.sans_1000_bold.lineHeight};
        margin-bottom: 64px;
        align-self: center;
    }

    @media (min-width: 1024px) {
        grid-column: 1/3;
        justify-self: center;
    }
`,o.Ay.img`
    height: 255px;
    width: calc(100% - 48px);
    object-fit: cover;
    border-radius: 15px 0px 0px 15px;
    align-self: flex-end;
    margin-bottom: 80px;
    @media (min-width: 768px) {
        height: 255px;
        width: calc(100% - 116px);
        margin-bottom: 118px;
    }
    @media (min-width: 1024px) {
        border-radius: ${r.Qk.radius_12.borderRadius};
        justify-self: flex-end;
        width: calc(100% - 16px);
    }
    @media (min-width: 1280px) {
        width: 630px;
    }
    @media (min-width: 1440px) {
        height: 242px;
        width: 740px;
        margin-bottom: 80px;
    }
    @media (min-width: 1920px) {
        width: 944px;
    }
`,o.Ay.img`
    height: 255px;
    width: calc(100% - 48px);
    object-fit: cover;
    border-radius: 0px 15px 15px 0px;
    align-self: flex-start;
    margin-bottom: 80px;
    @media (min-width: 768px) {
        height: 255px;
        width: calc(100% - 116px);
        margin-bottom: 144px;
    }
    @media (min-width: 1024px) {
        border-radius: ${r.Qk.radius_12.borderRadius};
        width: calc(100% - 16px);
    }
    @media (min-width: 1280px) {
        width: 630px;
    }
    @media (min-width: 1440px) {
        height: 242px;
        width: 740px;
    }
    @media (min-width: 1920px) {
        width: 944px;
    }
`,o.Ay.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-self: flex-start;
`,o.Ay.p`
    font-size: ${r.$G.sans_300_semi.fontSize};
    font-weight: ${r.$G.sans_300_semi.fontWeight};
    line-height: ${r.$G.sans_300_semi.lineHeight};
    margin: 0;
    margin-bottom: 16px;
    margin-left: ${i=>i.left?"48px":"0px"};
    margin-right: ${i=>i.left?"0px":"48px"};
    align-self: ${i=>i.left?"flex-start":"flex-end"};
    text-align: ${i=>i.left?"left":"right"};
    @media (min-width: 768px) {
        font-size: ${r.$G.sans_400_semi.fontSize};
        line-height: ${r.$G.sans_400_semi.lineHeight};
        margin-left: ${i=>i.left?"116px":"0px"};
        margin-right: ${i=>i.left?"0px":"116px"};
    }
    @media (min-width: 1024px) {
        margin: 0;
        margin-bottom: 16px;
    }
`,o.Ay.p`
    font-size: ${r.$G.sans_1000_bold.fontSize};
    font-weight: ${r.$G.sans_1000_bold.fontWeight};
    line-height: ${r.$G.sans_1000_bold.lineHeight};
    margin: 0;
    margin-bottom: 16px;
    margin-left: ${i=>i.left?"48px":"0px"};
    margin-right: ${i=>i.left?"0px":"48px"};
    max-width: 230px;
    align-self: ${i=>i.left?"flex-start":"flex-end"};
    text-align: ${i=>i.left?"left":"right"};

    @media (min-width: 768px) {
        font-size: ${r.$G.sans_1100_bold.fontSize};
        line-height: ${r.$G.sans_1100_bold.lineHeight};
        max-width: 260px;
        margin-left: ${i=>i.left?"116px":"0px"};
        margin-right: ${i=>i.left?"0px":"116px"};
    }

    @media (min-width: 1024px) {
        margin: 0;
        margin-bottom: 16px;
        max-width: 300px;
    }

    @media (min-width: 1440px) {
    }

    @media (min-width: 1920px) {
        max-width: 360px;
        font-size: ${r.$G.sans_1100_bold.fontSize};
        line-height: ${r.$G.sans_1100_bold.lineHeight};
    }
`,o.Ay.p`
    font-size: ${r.$G.sans_600.fontSize};
    font-weight: ${r.$G.sans_600.fontWeight};
    color: ${r.J2.Grey.color};
    line-height: ${r.$G.sans_600.lineHeight};
    margin: 0;
    margin-bottom: 80px;
    margin-left: ${i=>i.left?"48px":"0px"};
    margin-right: ${i=>i.left?"0px":"48px"};
    align-self: ${i=>i.left?"flex-start":"flex-end"};
    text-align: ${i=>i.left?"left":"right"};

    @media (min-width: 768px) {
        font-size: ${r.$G.sans_800.fontSize};
        line-height: ${r.$G.sans_800.lineHeight};
        max-width: 270px;
        margin-left: ${i=>i.left?"116px":"0px"};
        margin-right: ${i=>i.left?"0px":"116px"};
        margin-bottom: 118px;
    }

    @media (min-width: 1024px) {
        margin: 0;
    }

    @media (min-width: 1440px) {
        margin-bottom: 80px;
    }
`,(0,o.Ay)(a.N_)`
    position: relative;
    text-decoration: none;
    width: calc(100% - 48px);
    height: 450px;
    margin: 64px auto;
    margin-top: 54px;
    border-radius: ${r.Qk.radius_12.borderRadius};
    background: grey;
    padding: ${r.dB.spacing_400.padding};
    display: flex;
    gap: 36px;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    flex-direction: column;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url("https://d292awxalydr86.cloudfront.net/Home+page/V2+assets/Bottom+Hero");
    background-size: cover;
    background-position: center;
    box-shadow: ${r.E_.shadow_100.boxShadow};
    cursor: pointer;

    @media (min-width: 768px) {
        padding: 85px;
        width: calc(100% - 64px);
    }
    @media (min-width: 1643px) {
        max-width: 1579px;
        margin: 64px auto;
        margin-top: 54px;
    }
    @media (min-width: 1920px) {
        max-width: 1760px;
        margin: 64px auto;
        margin-top: 54px;
    }
`,o.Ay.h4`
    width: 100%;
    font-weight: ${r.$G.sans_1000_bold.fontWeight};
    font-size: ${r.$G.sans_1000_bold.fontSize};
    line-height: ${r.$G.sans_1000_bold.lineHeight};
    color: ${r.J2.White.color};
    text-align: left;
    margin: 0;
    margin-top: 40px;
    max-width: 360px;

    @media (min-width: 768px) {
        font-size: ${r.$G.sans_1100_bold.fontSize};
        line-height: ${r.$G.sans_1100_bold.lineHeight};
        font-weight: ${r.$G.sans_1100_bold.fontWeight};
        max-width: 275px;
        margin: 0;
    }
`,o.Ay.div`
    margin-top: 8px;
    width: calc(100% - 16px);
    max-width: 575px;
    height: 55px;
    background: ${r.J2.White.color};
    border-radius: ${r.Qk.radius_100.borderRadius};
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.5);
`,o.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    margin-left: 16px;
    line-height: ${r.$G.sans_300.lineHeight};
    font-weight: ${r.$G.sans_300.fontWeight};
`,o.Ay.button`
    font-size: ${r.Ox.sans_button_100.fontSize};
    line-height: ${r.Ox.sans_button_100.lineHeight};
    font-weight: ${r.Ox.sans_button_100.fontWeight};
    color: ${r.J2.White.color};
    text-decoration: none;
    background: ${r.J2.Red.color};
    border: none;
    border-radius: ${r.Qk.radius_100.borderRadius};
    width: 75px;
    height: 40px;
    margin-right: 8px;
    cursor: pointer;
`,o.Ay.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-row: 1/2;
    grid-column: 1/2;
    width: 100%;
`,o.Ay.button`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: ${r.J2.Grey3.color};
    display: flex;
    align-items: center;
    justify-content: center;
    grid-row: 1/2;
    grid-column: 1/2;
    border: none;
    align-self: center;
    margin-left: auto;
    margin-right: 24px;
    cursor: pointer;
`,(0,o.Ay)(s.P.div)`
    position: absolute;
    z-index: 4;
    margin: auto;
    left: 0;
    right: 0;
    margin-left: 50%;
    margin-right: auto;
    top: calc(50% - 240px);
    width: 400px;
    padding: 0 32px;
    border-radius: ${r.Qk.radius_32.borderRadius};
    background: ${r.J2.White.color};
    box-shadow: ${r.E_.shadow_100.boxShadow};
    display: flex;
    flex-direction: column;
    min-height: 400px;

    @media (min-width: 1280px) {
        width: 800px;
        margin-left: auto;
    }
`,o.Ay.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: ${r.dB.spacing_500.gap};
`,o.Ay.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    gap: ${r.dB.spacing_200.gap};
`,o.Ay.p`
    font-size: ${r.$G.sans_300_semi.fontSize};
    line-height: ${r.$G.sans_300_semi.lineHeight};
    font-weight: ${r.$G.sans_300_semi.fontWeight};
    color: ${i=>i.selected?"hsla(0, 0%, 15%, 1)":"hsla(0, 0%, 41%, 1)"};
    margin: 0;
    transition: 0.3s;
`,o.Ay.div`
    background: hsla(0, 0%, 15%, 1);
    width: 20px;
    height: 3px;
    opacity: ${i=>i.selected?1:0};
    transition: 0.3s;
`,(0,o.Ay)(s.P.div)`
    width: 100%;
    background: ${r.J2.White.color};
    border-radius: 14px 14px 0 0;
    position: fixed;
    box-shadow: ${r.E_.shadow_300.boxShadow};
    display: flex;
    flex-direction: column;
    left: 0;
    bottom: 0;
    z-index: 10;
    height: fit-content;

    @media (min-width: 768px) {
        box-shadow: ${r.E_.shadow_300.boxShadow};
        width: 500px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        top: 30vh;
        border-radius: 25px;
    }
`,o.Ay.div`
    display: flex;
    flex-direction: column;
    padding: ${r.dB.spacing_400.padding};
    @media (min-width: 768px) {
        padding: ${r.dB.spacing_500.padding};
    }
`,o.Ay.div`
    width: 100%;
    align-items: center;
    gap: ${r.dB.spacing_300.gap};
    display: flex;
`,o.Ay.img`
    height: 24px;
    width: 24px;
    object-fit: cover;
    border-radius: 50%;
    @media (min-width: 768px) {
        height: 32px;
        width: 32px;
    }
`,o.Ay.p`
    font-size: ${r.$G.sans_400_bold.fontSize};
    line-height: ${r.$G.sans_400_bold.lineHeight};
    font-weight: ${r.$G.sans_400_bold.fontWeight};
    color: hsla(0, 0%, 15%, 1);
    margin: 0;
    @media (min-width: 768px) {
        font-size: ${r.$G.sans_600_bold.fontSize};
    }
`,o.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    font-weight: ${r.$G.sans_300.fontWeight};
    line-height: ${r.$G.sans_300.lineHeight};
    color: hsla(0, 0%, 15%, 1);
    margin-bottom: 24px;
    @media (min-width: 768px) {
        font-size: ${r.$G.sans_400.fontSize};
        margin-bottom: 32px;
    }
`,o.Ay.button`
    height: 48px;
    width: calc(100% - 48px);
    margin: 0 24px;
    border: none;
    border-radius: 9px;
    background: ${r.J2.Red.color};
    font-size: ${r.Ox.sans_button_100.fontSize};
    line-height: ${r.Ox.sans_button_100.lineHeight};
    color: ${r.J2.White.color};
    font-weight: ${r.Ox.sans_button_100.fontWeight};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    cursor: pointer;

    @media (min-width: 768px) {
        width: calc(100% - 64px);
        margin: 0 32px;
        margin-bottom: 16px;
    }
`,o.Ay.button`
    height: 48px;
    width: 100%;
    border: 1px solid hsla(0, 0%, 15%, 1);
    border-radius: 9px;
    background: none;
    font-size: ${r.Ox.sans_button_100.fontSize};
    line-height: ${r.Ox.sans_button_100.lineHeight};
    color: hsla(0, 0%, 15%, 1);
    font-weight: ${r.Ox.sans_button_100.fontWeight};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,o.Ay.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 50% 50%;
        align-items: center;
        min-width: 600px;
        margin-bottom: 144px;
    }
`,(0,o.Ay)(a.N_)`
    background: ${r.J2.White.color};
    border: none;
    border-radius: 9px;
    box-shadow: ${r.E_.shadow_100.boxShadow};
    margin: 0;
    margin-bottom: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    cursor: pointer;

    @media (min-width: 768px) {
        height: 192px;
        width: 192px;
    }
    @media (min-width: 1024px) {
        margin-right: 80px;
        margin-bottom: 0;
    }
`,(0,o.Ay)(s.P.div)`
    display: grid;
    gap: 22px;

    position: absolute;
    top: calc(50% - 240px);
    right: 0;
    left: 0;
    z-index: 4;
    padding: ${r.dB.spacing_500.padding};
    border-radius: ${r.Qk.radius_32.borderRadius};
    background: ${r.J2.White.color};
    box-shadow: ${r.E_.shadow_100.boxShadow};
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    margin-left: auto;
    margin-right: auto;
    width: 800px;
`,o.Ay.button`
    background: blue;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${i=>i.url});
    background-size: cover;
    background-position: center center;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${r.Qk.radius_12.borderRadius};
    width: 100%;
    padding: ${r.dB.spacing_600.padding} 0;
    font-size: ${r.Ox.sans_button_200.fontSize};
    line-height: ${r.Ox.sans_button_200.lineHeight};
    color: ${r.J2.White.color};
    font-weight: ${r.$G.sans_400_bold.fontWeight};
    cursor: pointer;
`,o.Ay.div`
    display: flex;
    flex-direction: column;
    gap: ${r.dB.spacing_300.gap};
    align-self: flex-start !important;
    margin-left: 24px;
    margin-top: 16vh;
    margin-right: auto;
    grid-row: 1/2;
    grid-column: 1/2;

    @media (min-width: 768px) {
        margin-left: 80px;
        margin-top: calc(50vh / 2);
    }
`,o.Ay.p`
    font-size: ${r.$G.sans_350_semi.fontSize};
    line-height: ${r.$G.sans_350_semi.lineHeight};
    color: ${r.J2.White.color};
    font-weight: ${r.$G.sans_350_semi.fontWeight};
    margin: 0;
    margin-bottom: 8px;
`,o.Ay.p`
    font-size: ${r.$G.sans_1200_bold.fontSize};
    line-height: ${r.$G.sans_1200_bold.lineHeight};
    color: ${r.J2.White.color};
    font-weight: ${r.$G.sans_1200_bold.fontWeight};
    margin: 0;
    margin-bottom: 12px;
`,o.Ay.p`
    font-size: ${r.$G.sans_500.fontSize};
    line-height: ${r.$G.sans_500.lineHeight};
    font-weight: ${r.$G.sans_500.fontWeight};
    color: ${r.J2.White.color};
    margin: 0;
    margin-bottom: 24px;
`,o.Ay.p`
    font-size: ${r.$G.sans_400.fontSize};
    line-height: ${r.$G.sans_400.lineHeight};
    color: ${r.J2.Grey.color};
    font-weight: ${r.$G.sans_400.fontWeight};
    margin: 0;
    margin-bottom: 20px;
`,o.Ay.button`
    width: 171px;
    height: 48px;
    color: ${r.J2.White.color};
    border: 2px solid ${r.J2.White.color};
    border-radius: ${r.Qk.radius_100.borderRadius};
    padding: 14px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    font-size: ${r.Ox.sans_button_200.fontSize};
    font-weight: ${r.Ox.sans_button_200.fontWeight};
    line-height: ${r.Ox.sans_button_200.lineHeight};
    cursor: pointer;
`;var $=e(831),w=e(7013),b=e(8108);const y=o.Ay.div`
    @media (min-width: 768px) {
        flex: 1 1 auto;
    }
`,_=(0,o.Ay)(a.N_)`
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    position: relative;
`,v=o.Ay.div`
    min-width: 100%;
    border-radius: ${r.Qk.radius_16.borderRadius};
    margin-bottom: 8px;
    background-color: ${r.J2.Grey2.color};
    aspect-ratio: 4/5;
    overflow: hidden;
    @media (min-width: 768px) {
        aspect-ratio: ${i=>i.aspectRatio>1.33?1.33:`${i.aspectRatio}`};
        height: 180px;
        /* max-width: 484px; //max aspect ratio 2/1 */
        min-width: 180px; // min aspect ratio 1/1
        margin-bottom: 12px;
    }
`,G=o.Ay.img`
    height: 100%;
    width: 100%;
    vertical-align: middle;
    border-radius: ${r.Qk.radius_16.borderRadius};
    background-color: ${r.J2.Grey2.color};
    object-fit: cover;

    @media (min-width: 768px) {
        border-radius: ${r.Qk.radius_12.borderRadius};
    }
`,A=o.Ay.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    @media (min-width: 768px) {
        min-width: 180px;
        max-width: 320px;
        overflow: hidden;
    }
`,z=o.Ay.p`
    font-size: ${r.$G.sans_300_semi.fontSize};
    font-weight: ${r.$G.sans_300_semi.fontWeight};
    line-height: ${r.$G.sans_300_semi.lineHeight};
    margin-left: 2px;
    margin-bottom: 1px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media (min-width: 768px) {
        margin-left: 0;
        margin-bottom: 2px;
    }
`,k=o.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    line-height: ${r.$G.sans_300.lineHeight};
    font-weight: ${r.$G.sans_300.fontWeight};
    color: ${r.J2.Grey.color};
    margin-left: 2px;
    padding-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (min-width: 768px) {
        margin-left: 0;
        padding-bottom: 8px;
    }
`,S=o.Ay.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0;
`,j=o.Ay.p`
    width: fit-content;
    font-size: ${r.$G.sans_300_semi.fontSize};
    line-height: ${r.$G.sans_300_semi.lineHeight};
    font-weight: ${r.$G.sans_300_semi.fontWeight};
    margin: 0;
    margin-left: 2px;

    text-decoration: underline;

    span {
        font-size: ${r.$G.sans_300.fontSize};
        font-weight: ${r.$G.sans_300.fontWeight};
    }

    strong {
        color: ${r.J2.Grey.color};
        text-decoration: line-through;
    }

    @media (min-width: 768px) {
        margin-left: 0;
    }
`,W=o.Ay.p`
    font-size: ${r.$G.sans_300.fontSize};
    font-weight: ${r.$G.sans_300.fontWeight};
    line-height: ${r.$G.sans_300.lineHeight};
    color: ${r.J2.Grey.color};
    margin-left: 2px;
    padding-bottom: 1px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media (min-width: 768px) {
        margin-left: 0;
        margin-bottom: 2px;
    }
`,R=o.Ay.button`
    border-radius: ${r.Qk.radius_8.borderRadius};
    border: none;
    z-index: 2;
    background: transparent;
    margin: ${r.dB.spacing_250.margin};
    position: absolute;
    top: 0;
    right: 0;
    height: 28px;
    cursor: pointer;

    @media (min-width: 768px) {
        margin: ${r.dB.spacing_300.margin};
        opacity: ${i=>i.hover?"1":"0"};
        transition: opacity 0.2s;
    }
`,C=o.Ay.svg`
    height: 24px;
    width: 24px;
    stroke: ${r.J2.White.color} !important;
    transition: 0.2s;

    &:hover {
        transform: scale(1.1);
    }

    path {
        stroke-width: 1.8;
        box-shadow: ${r.E_.shadow_100.boxShadow};
    }

    @media (min-width: 768px) {
        height: 28px;
        width: 28px;
    }
`;var H=e(579);const J=i=>{let{url:t,aspectRatio:e}=i;const[o,a]=(0,n.useState)(!1);return(0,H.jsx)(v,{aspectRatio:e,children:(0,H.jsx)(G,{src:t,onLoad:()=>{a(!0)},alt:"Featured Listing",style:{display:o?"block":"none"}})})};var B=e(6879);const I=o.Ay.div`
    width: 100%;
    height: 100%;
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`,E=o.Ay.div`
    min-width: 100%;
    border-radius: ${r.Qk.radius_12.borderRadius};
    margin-bottom: 8px;
    background-color: ${r.J2.Grey2.color};
    aspect-ratio: ${i=>i.aspectRatio>1.33?1.33:`${i.aspectRatio}`};
    height: 100%;

    @media (min-width: 768px) {
        width: 100%;
        height: 180px;
        /* max-width: 484px; //max aspect ratio 2/1 */
        min-width: 180px; // min aspect ratio 1/1
        margin-bottom: 12px;
    }
`,L=o.Ay.div`
    background-color: ${r.J2.Grey2.color};
    width: 60%;
    height: 17px;
    margin-bottom: 4px;
`,O=o.Ay.div`
    background-color: ${r.J2.Grey2.color};
    width: 40%;
    height: 17px;
    margin-bottom: 4px;
`,F=o.Ay.div`
    background-color: ${r.J2.Grey2.color};
    width: 50%;
    height: 17px;
    margin-bottom: 4px;
`,Q=o.Ay.div`
    background-color: ${r.J2.Grey2.color};
    width: 30%;
    height: 17px;
`,D=i=>{let{aspectRatio:t}=i;return(0,H.jsxs)(I,{children:[(0,H.jsx)(E,{aspectRatio:t}),(0,H.jsx)(L,{}),(0,H.jsx)(O,{}),(0,H.jsx)(F,{}),(0,H.jsx)(Q,{})]})};var N=e(9082),U=e(1869),M=e(9136),P=e(8190);const T=i=>{var t,e,o,a;let{listing:d,delay:l,cache:h,clickedListingEvent:g}=i;const[c,p]=(0,$.useRecoilState)(U.e),[m,x]=(0,$.useRecoilState)(N.H),[f,u]=(0,n.useState)(!1),[w,b]=(0,n.useState)(!1),[v,G]=(0,$.useRecoilState)(M.c6),I=(0,n.useRef)(!1),E=(0,n.useRef)(!1);(0,n.useEffect)((()=>{E.current||c&&c.savedListings.includes(d.id)&&(u(!0),E.current=!0)}),[d.id,c]);return(0,H.jsx)(y,{children:(0,H.jsxs)(_,{to:`/listing/${d.id}`,onClick:()=>g(d.id),target:window.innerWidth>768?"_blank":"",rel:"noopener noreferrer",onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),children:[(0,H.jsx)(s.P.div,{initial:{display:"none"},animate:{display:"block"},transition:{duration:.5},children:(0,H.jsx)(R,{onClick:async i=>{if(i.preventDefault(),i.stopPropagation(),c){if(I.current)return;try{u((i=>!i)),I.current=!0,await(0,P.C)(d.id,c,m)}catch(t){console.log(t),u((i=>!i))}finally{I.current=!1}}else G(!0)},hover:w||f,children:(0,H.jsx)(C,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",onClick:()=>{},children:(0,H.jsx)("path",{d:"M2.26061 13.3918C5.07331 17.4376 8.89663 20.4197 12.8238 23.2792C12.9722 23.3873 13.373 23.3224 13.5518 23.1927C16.4106 21.1187 19.1902 18.9466 21.5963 16.3436C23.5642 14.2148 25.3072 11.9361 26.0237 9.04917C26.8138 5.86965 25.4788 2.5114 22.8246 0.914431C20.2484 -0.634975 16.9311 -0.189611 14.4629 2.05451L14.4198 2.09405C14.1243 2.36677 13.8509 2.66287 13.5765 2.96004C13.443 3.10465 13.3093 3.2495 13.1726 3.39204C13.0119 3.23609 12.8591 3.08852 12.7119 2.94629C12.4578 2.7008 12.2197 2.47076 11.9833 2.23899C11.949 2.20545 11.9146 2.17227 11.8799 2.13945C9.70682 0.0822306 6.68254 -0.554266 4.17227 0.529602C1.6306 1.62644 -0.0576046 4.36492 0.00150402 7.35708C0.0461959 9.62714 1.00058 11.5816 2.26061 13.3918Z",fill:f?`${r.J2.Red.color}`:`${r.J2.Black.opacityColor}`,transform:"translate(1, 1)"})})})}),(0,H.jsx)(s.P.div,{style:{width:"100%",height:"100%",display:"flex",position:"absolute",top:0},initial:{opacity:h?0:1},animate:{opacity:0},transition:{duration:.5,delay:l},children:(0,H.jsx)(D,{aspectRatio:(d&&null!==d&&void 0!==d&&null!==(t=d.listingImages[0])&&void 0!==t&&t.width?d.listingImages[0].width:16)/(d&&null!==d&&void 0!==d&&null!==(e=d.listingImages[0])&&void 0!==e&&e.height?d.listingImages[0].height:9)})}),(0,H.jsxs)(s.P.div,{style:{width:"100%",height:"100%",zIndex:1,display:"flex",flexDirection:"column"},initial:{opacity:h?1:0},animate:{opacity:1},transition:{duration:.5,delay:l},children:[(0,H.jsx)(J,{url:(0,B.A)(null===d||void 0===d||null===(o=d.listingImages[0])||void 0===o?void 0:o.key,500),aspectRatio:(null===d||void 0===d?void 0:d.listingImages[0]).width/(null===d||void 0===d||null===(a=d.listingImages[0])||void 0===a?void 0:a.height)}),(0,H.jsxs)(A,{children:[(0,H.jsx)(z,{children:(()=>{let i="";if(d&&null!==d.suburb){const t=d.suburb.toLowerCase().replace(/\b\w/g,(i=>i.toUpperCase()));switch(d.typeOfPlace){case"entire-place":i=d.propertyType+" in "+t,i=i[0].toUpperCase()+i.substring(1);break;case"hotel-room":i="Hotel in "+t,i=i[0].toUpperCase()+i.substring(1);break;case"private-room":i="Private room in "+t,i=i[0].toUpperCase()+i.substring(1);break;case"shared-room":i="Shared room in "+t,i=i[0].toUpperCase()+i.substring(1)}}return i})()}),(0,H.jsx)(W,{children:d.propertyTitle}),(0,H.jsx)(k,{children:function(i,t){const e=new Date(i),n=new Date(t),o={day:"2-digit",month:"short"},a=e.toLocaleDateString("en-GB",o).replace(/ /g," "),s=n.toLocaleDateString("en-GB",o).replace(/ /g," ");if(e.getMonth()===n.getMonth()&&e.getFullYear()===n.getFullYear()){const i={day:"2-digit"};return`${e.toLocaleDateString("en-GB",i).replace(/ /g," ")} - ${n.toLocaleDateString("en-GB",i).replace(/ /g," ")} ${e.toLocaleDateString("en-GB",{month:"short"})}`}return`${a} - ${s}`}(d.startDate,d.endDate)}),(0,H.jsx)(S,{children:(0,H.jsxs)(j,{children:["$",Number(d.totalPrice/100).toFixed(0)," AUD"]})})]})]})]})})},Z=i=>{let{listings:t,cache:e,clickedListingEvent:n}=i;return(0,H.jsx)(l,{children:t&&t.map(((i,t)=>(0,H.jsx)(T,{clickedListingEvent:n,listing:i,delay:.05*t,cache:e},i.id)))})},q=i=>{let{listings:t,cache:e,clickedListingEvent:o,loggedIn:a}=i;const[s,r]=(0,n.useState)([[],[]]),[d,l]=(0,$.useRecoilState)(M.c6),w=(0,n.useCallback)((i=>{const t=[[],[]],e=[0,0];i&&i.forEach((i=>{const n=e[0]<=e[1]?0:1;t[n].push(i),i.listingImages[0].height||i.listingImages[0].width?e[n]+=i.listingImages[0].height/i.listingImages[0].width:e[n]+=.75})),r(t)}),[]);return(0,n.useEffect)((()=>{w(t)}),[t,w]),(0,H.jsxs)(h,{children:[!a&&(0,H.jsxs)(g,{children:[(0,H.jsxs)(c,{children:[(0,H.jsx)(p,{children:"Sign up for 10% off"}),(0,H.jsx)(m,{children:"Unlock exclusive member rates"})]}),(0,H.jsx)(x,{onClick:()=>l(!0),children:"Sign up"})]}),(0,H.jsxs)(f,{children:[(0,H.jsx)(u,{children:s[0].map(((i,t)=>(0,H.jsx)(T,{clickedListingEvent:o,listing:i,delay:.05*t,cache:e},i.id)))}),(0,H.jsx)(u,{children:s[1].map(((i,t)=>(0,H.jsx)(T,{clickedListingEvent:o,listing:i,delay:.05*t,cache:e},i.id)))})]})]})};var K=e(6036),Y=e(7426),V=e(394),X=e(3927);const ii=o.Ay.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20vh;
`,ti=o.Ay.img`
    width: 64px;
    height: 64px;
    margin-bottom: 32px;
`,ei=o.Ay.p`
    font-size: ${r.$G.sans_700_semi.fontSize};
    font-weight: ${r.$G.sans_700_semi.fontWeight};
    line-height: ${r.$G.sans_700_semi.lineHeight};
    margin-bottom: 8px;
`,ni=o.Ay.p`
    font-size: ${r.$G.sans_400.fontSize};
    font-weight: ${r.$G.sans_400.fontWeight};
    line-height: ${r.$G.sans_400.lineHeight};
    color: ${r.J2.Grey.color};
    margin-bottom: 32px;
`,oi=o.Ay.button`
    font-size: ${r.Ox.sans_button_200.fontSize};
    font-weight: ${r.Ox.sans_button_200.fontWeight};
    line-height: ${r.Ox.sans_button_200.lineHeight};
    color: ${r.J2.White.color};
    background: ${r.J2.Black.color};
    border-radius: 100px;
    padding: ${r.dB.spacing_250.padding} ${r.dB.spacing_350.padding};
    cursor: pointer;
    border: none;
`;var ai=e(3216);const si=()=>{const[i,t]=(0,$.useRecoilState)(V.hq),e=(0,ai.Zp)();return(0,H.jsxs)(ii,{children:[(0,H.jsx)(ti,{src:"https://d292awxalydr86.cloudfront.net/Home+page/Noresults.svg",alt:"no results"}),(0,H.jsx)(ei,{children:"Uh oh..."}),(0,H.jsx)(ni,{children:"There are no results in your area"}),(0,H.jsx)(oi,{onClick:async()=>{t(X.s),e("/search")},children:"Explore nearby"})]})},ri=o.Ay.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;var di=e(308);const li=()=>(0,H.jsx)(ri,{children:(0,H.jsx)(di.A,{})});var hi=e(8306),gi=e(65),ci=e(9421),pi=e(8530),mi=e(2204),xi=e(6450),fi=e(6750),ui=e(4204);const $i={"@context":"https://schema.org","@type":"WebSite",name:"Anystay",description:"Book the perfect Australian stay at the best prices with Anystay. Find amazing deals on the biggest range of accommodation in Australia.",url:"https://www.anystay.com.au",logo:"https://www.anystay.com.au/logo192.png",potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:"https://www.anystay.com.au/search?location={search_term_string}"},"query-input":"required name=search_term_string"},sameAs:["https://www.instagram.com/anystay.com.au","https://www.facebook.com/anystay.com.au","https://www.tiktok.com/@anystay.com.au"],audience:{"@type":"Audience",audienceType:"Travelers"},areaServed:{"@type":"Country",name:"Australia"},offers:[{"@type":"Offer",description:"Get 5% off your first stay in Australia",priceCurrency:"AUD",availabilityStarts:"2024-09-01",availabilityEnds:"2024-12-31"}]},wi=(0,xi.Ay)({app:"Anystay",plugins:[(0,fi.A)({writeKey:"2zz3NP7VoxNPsFN0hwpZ9JvF3mxUUjct"})]}),bi=()=>{const[i,t]=(0,n.useState)(null),[e,o]=(0,n.useState)(!1),[a,s]=(0,gi.A)(window),[r,l]=(0,$.useRecoilState)(V.hq),[h,g]=(0,$.useRecoilState)(pi.N),[c,p]=(0,$.useRecoilState)(U.e),[m,x]=(0,$.useRecoilState)(mi.Z),[f,u]=(0,$.useRecoilState)(V.IO),[y,_]=(0,n.useState)(!1),v=(0,n.useRef)({}),G=(0,n.useRef)({}),[A,z]=(0,n.useState)(!1),k=(0,ai.zy)(),[S,j]=(0,n.useState)({}),[W,R]=(0,n.useState)(!1);(0,n.useEffect)((()=>{u(X.C)}),[u]);const C=(0,n.useCallback)((async(i,e,n,a)=>{_(!1),a&&l({...n,priceRange:{min:0,max:0}});const s=await(0,Y.p)("post","dev-anystay-search","search",{body:{placeId:i,startDate:"anyArrival",endDate:"anyDeparture",currentDate:(new Date).toString(),searchFilters:n,page:e,size:50,isMapRequest:!1,identifier:m?null===c||void 0===c?void 0:c.username:h}});if(s&&s.success&&(z(!1),a?(v.current[n.category]=Math.ceil(s.total/50),t((i=>({...i,[n.category]:s.listings})))):1!==e?t((i=>i?{...i,[n.category]:[...i[n.category],...s.listings]}:{[n.category]:s.listings})):(v.current={all:Math.ceil(s.total/50)},t({all:s.listings})),o(!1),s.distribution))return j(s.distribution),s.distribution}),[]);(0,n.useEffect)((()=>{o(!0),G.current.all=1;const i=JSON.parse(JSON.stringify(r));i.priceRange={min:0,max:0},C("ChIJ38WHZwf9KysRUhNblaFnglM",1,i,!0)}),[C]),(0,n.useEffect)((()=>{window.scrollTo(0,0)}),[]);const J=i=>{wi.track("ClickedListingFromHomepage",{userId:m?null===c||void 0===c?void 0:c.id:h,listingId:i})},B=()=>"down"===a&&!s,I=(0,n.useCallback)((()=>{if(i&&i.all&&i.all.length>0){const t=i.all.map((i=>i.minimumPrice/100));return Math.max(...t)}return 1e3}),[i]);return(0,n.useEffect)((()=>{I()}),[I]),(0,n.useEffect)((()=>{(async()=>{if("all"===r.category&&S){const i={...X.C.searchFilters};i.category=r.category;const t=await C("ChIJ38WHZwf9KysRUhNblaFnglM",1,i,!1);t&&(i.priceRange={min:t.min,max:t.max},l(i)),R(!0)}else R(!1)})()}),[r.category]),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(hi.A,{jsonLd:$i}),(0,H.jsxs)(d,{children:[(0,H.jsx)(K.A,{updateFilter:t=>{if(t.category!==r.category){const e={...X.C.searchFilters};if(e.category=t.category,l(e),i&&i[t.category])return void _(!0);C("ChIJ38WHZwf9KysRUhNblaFnglM",1,e,!0)}else C("ChIJ38WHZwf9KysRUhNblaFnglM",1,t,!1)},distribution:S}),e?(0,H.jsx)(li,{}):null===i||i[r.category]&&0===i[r.category].length?(0,H.jsx)(si,{}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(q,{listings:i[r.category],cache:y,clickedListingEvent:J,loggedIn:m}),(0,H.jsx)(Z,{listings:i[r.category],cache:y,clickedListingEvent:J}),G.current[r.category]<v.current[r.category]&&(0,H.jsx)(ui.A,{background:"black",style:{width:"unset",margin:"48px auto"},disabled:!1,isLoading:A,onClick:async()=>{z(!0),G.current[r.category]+=1,await C("ChIJ38WHZwf9KysRUhNblaFnglM",G.current[r.category],r,!1)},children:"Show more"})]})]}),(0,H.jsx)(w.A,{hide:B()}),(0,H.jsx)(ci.A,{handleScroll:B(),path:k.pathname}),(0,H.jsx)(b.A,{})]})}},875:(i,t,e)=>{e.d(t,{I:()=>a});var n=e(5043);e(579);const o=n.createContext();const a=()=>{const i=n.useContext(o);return null!=i&&i}}}]);
//# sourceMappingURL=5012.43fd685a.chunk.js.map
//# debugId=11fa8cdf-fb4a-5376-9cbb-b70f1c3229b5
