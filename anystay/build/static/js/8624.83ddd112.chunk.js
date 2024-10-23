"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="cfd693a9-5a72-553d-bf70-3bf669f07c1b")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[8624],{9820:(e,t,i)=>{i.d(t,{A:()=>l});var n=i(2119),o=i(4936);const s=n.Ay.button`
    height: ${e=>e.size?e.size:"80px"};
    border-radius: ${o.Qk.radius_100.borderRadius};
    width: ${e=>e.size?e.size:"80px"};
    position: relative;
    background: ${e=>e.disabled?o.J2.Grey1.color:"red"===e.background?o.J2.Red.color:"blue"===e.background?o.J2.Blue.color:"black"===e.background?o.J2.Black.color:"grey"===e.background?o.J2.Grey1.color:"white"===e.background?o.J2.White.color:void 0};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: ${o.Ox.sans_button_200.fontSize};
    font-weight: ${o.Ox.sans_button_200.fontWeight};
    color: ${e=>e.isLoading?"transparent":o.J2.White.color};
    margin-top: auto;
    line-height: ${o.Ox.sans_button_200.lineHeight};
    cursor: pointer;
    user-select: none;
    box-shadow: ${o.E_.shadow_100.boxShadow};
    transition:
        transform 0.2s,
        box-shadow 0.2s;
    &:hover {
        transform: ${e=>e.disabled?"none":"translateY(-5px)"};
        box-shadow: ${e=>e.disabled?"1px 3px 12px 0px rgba(0, 0, 0, 0.1)":"1px 3px 12px 0px rgba(0, 0, 0, 0.3)"};
    }

    &:active {
        transform: ${e=>e.disabled?"none":"translateY(0)"};
        box-shadow: ${e=>(e.disabled,"none")};
    }
`,a=n.Ay.img`
    width: ${e=>e.iconSize?e.iconSize:"40px"};
    display: flex;
    align-items: center;
    justify-content: center;
`;var r=i(308),d=i(579);const l=e=>{let{isLoading:t,children:i,disabled:n,background:o,src:l,iconSize:g,size:h,...p}=e;return(0,d.jsxs)(s,{...p,background:o,disabled:n,isLoading:t||!1,size:h,children:[t&&(0,d.jsx)(r.A,{height:"14px",color:"white",width:"32px",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),i,!t&&(0,d.jsx)(a,{src:l||"https://d292awxalydr86.cloudfront.net/Universal+icons/Next.svg",alt:"Arrow Btn",iconSize:g})]})}},6458:(e,t,i)=>{i.d(t,{A:()=>x});var n=i(5043),o=i(7950),s=i(4175),a=i(2119),r=i(4936);const d=a.Ay.p`
    margin-top: 32px;
    font-size: ${r.$G.sans_800_bold.fontSize};
    line-height: ${r.$G.sans_800_bold.lineHeight};
    font-weight: ${r.$G.sans_800_bold.fontWeight};
    margin-bottom: 24px;
`,l=a.Ay.p`
    margin: 0;
    font-size: ${r.$G.sans_400.fontSize};
    line-height: ${r.$G.sans_400.lineHeight};
    max-width: 270px;
    font-weight: ${r.$G.sans_400.fontWeight};
`,g=a.Ay.div`
    z-index: 102;
    left: 0;
    bottom: 0;
    width: 100%;
    height: calc(100vh - 120px);
    background: ${r.J2.White.color};
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    box-shadow: ${r.E_.shadow_300.boxShadow};

    @media (min-width: 768px) {
        width: 560px;
        height: 600px;
        left: 50%;
        bottom: 50%;
        transform: translate(-50%, 50%);
        border-radius: 14px;
    }
`,h=a.Ay.p`
    margin: 0;
    visibility: ${e=>e.waiting?"visible":"hidden"};
`;var p=i(579);const c=e=>{let{spinnerWidth:t,spinnerHeight:i,title:o,subtitle:a,waiting:r,timeout:c,guestMode:x}=e;const[u,m]=(0,n.useState)(!0);return(0,n.useEffect)((()=>{let e;return c&&(e=setTimeout((()=>{m(!1)}),c)),()=>{e&&clearTimeout(e)}}),[c]),(0,p.jsx)(p.Fragment,{children:u&&(0,p.jsx)("div",{style:{height:"100vh",width:"100vw",position:"fixed",left:0,top:0,zIndex:101,background:"rgba(0, 0, 0, 0.25)",backdropFilter:"blur(0px)"},id:"loading-full-page-small-modal",children:(0,p.jsxs)(g,{children:[(0,p.jsx)(s.A,{width:i,height:t,guestMode:x}),(0,p.jsx)(d,{children:o}),(0,p.jsx)(l,{children:a}),(0,p.jsx)(h,{waiting:r,children:"This may take a few seconds."})]})})})},x=e=>{let{spinnerWidth:t,spinnerHeight:i,title:n,subtitle:s,waiting:a,timeout:r,guestMode:d}=e;return(0,o.createPortal)((0,p.jsx)(c,{spinnerWidth:t,spinnerHeight:i,title:n,subtitle:s,waiting:a,timeout:r,guestMode:d}),document.getElementById("root"))}},7494:(e,t,i)=>{i.d(t,{A:()=>a});var n=i(9470),o=i(9697),s=i(579);const a=e=>{let{tryAgainFunc:t,closeModal:i}=e;return(0,s.jsx)(o.A,{children:(0,s.jsxs)(n.mO,{children:[(0,s.jsxs)("div",{style:{height:"90%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[(0,s.jsx)(n._0,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg",alt:"Unavailable feature icon"}),(0,s.jsx)(n.hE,{children:"Payment failed"}),(0,s.jsx)(n.Pd,{children:"Your payment method is invalid, please try again or change it."})]}),(0,s.jsxs)(n.mF,{children:[(0,s.jsx)(n.tB,{paymentType:"back",onClick:()=>{i()},children:"Back"}),t&&(0,s.jsx)(n.tB,{paymentType:"try-again",onClick:()=>{t()},children:"Try again"})]})]})})}},9470:(e,t,i)=>{i.d(t,{Pd:()=>a,_0:()=>g,hE:()=>s,mF:()=>d,mO:()=>r,tB:()=>l});var n=i(2119),o=i(4936);const s=n.Ay.p`
    margin-top: 40px;
    font-size: ${o.$G.sans_800_bold.fontSize};
    line-height: ${o.$G.sans_800_bold.lineHeight};
    font-weight: ${o.$G.sans_800_bold.fontWeight};
    margin-bottom: 16px;
`,a=n.Ay.p`
    margin: 0;
    font-size: ${o.$G.sans_400.fontSize};
    line-height: ${o.$G.sans_400.lineHeight};
    max-width: 270px;
    font-weight: ${o.$G.sans_400.fontWeight};
    text-align: center;
`,r=n.Ay.div`
    z-index: 102;
    left: 0;
    bottom: 0;
    width: 100%;
    height: calc(100vh - 120px);
    background: ${o.J2.White.color};
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    box-shadow: ${o.E_.shadow_300.boxShadow};
    padding: ${o.dB.spacing_400.padding} ${o.dB.spacing_400.padding} ${o.dB.spacing_300.padding};

    @media (min-width: 768px) {
        width: 560px;
        height: 600px;
        left: 50%;
        bottom: 50%;
        transform: translate(-50%, 50%);
        border-radius: 14px;
        padding: ${o.dB.spacing_400.padding};
    }
`,d=n.Ay.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: auto;
`,l=n.Ay.button`
    cursor: pointer;
    height: 48px;
    background-color: ${e=>"back"===e.paymentType?"transparent":o.J2.Red.color};
    border-radius: 9px;
    text-decoration: ${e=>"back"===e.paymentType?"underline":"none"};
    color: ${e=>"back"===e.paymentType?"black":"white"};
    border: none;
    width: ${e=>"back"===e.paymentType?"":"142px"};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${o.Ox.sans_button_100.fontWeight};
    font-size: ${o.Ox.sans_button_100.fontSize};
    padding: 0 !important;

    @media (min-width: 768px) {
        width: ${e=>"back"===e.paymentType?"50px":"120px"};
        font-size: ${o.Ox.sans_button_200.fontSize};
    }
`,g=n.Ay.img`
    width: 80px;
    height: 80px;
`},9317:(e,t,i)=>{i.d(t,{A:()=>a});var n=i(9470),o=i(9697),s=i(579);const a=e=>{let{closeModal:t}=e;return(0,s.jsx)(o.A,{children:(0,s.jsxs)(n.mO,{children:[(0,s.jsxs)("div",{style:{height:"90%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[(0,s.jsx)(n._0,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg",alt:"Unavailable feature icon"}),(0,s.jsx)(n.hE,{children:"Booking failed"}),(0,s.jsx)(n.Pd,{children:"The dates you selected are no longer available."})]}),(0,s.jsx)(n.mF,{children:(0,s.jsx)(n.tB,{paymentType:"back",onClick:()=>{t()},children:"Back"})})]})})}},8624:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Pe});var n=i(5043),o=i(2119),s=i(5073),a=i(1791),r=i(6442),d=i(4936);const l=o.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
        gap: ${d.dB.spacing_800.gap};
        max-width: 1200px;
        justify-content: center;
        padding: 0px 80px;
        margin: 0px auto;
        margin-top: 80px;
    }
`,g=(o.Ay.div``,o.Ay.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        height: fit-content;
        margin-top: 80px;
    }
`),h=o.Ay.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    padding-right: 24px;
    padding-left: 24px;

    @media (min-width: 768px) {
        padding-bottom: 100px;
        width: 560px;
    }
`,p=o.Ay.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    align-items: center;
    justify-content: center;
    padding-right: 24px;
    padding-left: 24px;

    @media (min-width: 768px) {
        padding-bottom: 100px;
    }
    @media (min-width: 1024px) {
        margin: 0 auto;
        max-width: 567px;
        padding-right: unset;
        padding-left: unset;
    }
    @media (min-width: 1280px) {
        margin: 0 auto;
    }
`,c=o.Ay.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding-top: 64px;
    padding-bottom: 24px;
    position: relative;

    @media (min-width: 768px) {
        padding-top: 48px;
        padding-bottom: 32px;
    }
`,x=o.Ay.h2`
    font-size: ${d.$G.sans_900_bold.fontSize};
    font-weight: ${d.$G.sans_900_bold.fontWeight};
    line-height: ${d.$G.sans_900_bold.lineHeight};
    margin: 0;

    @media (min-width: 768px) {
        border-top: none;
        font-size: ${d.$G.sans_1000_bold.fontSize};
        line-height: ${d.$G.sans_1000_bold.lineHeight};
        margin-left: 24px;
    }
`,u=(o.Ay.button`
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
`,o.Ay.img`
    height: 16px;
    width: 9px;
    object-fit: cover;
`,o.Ay.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding: ${d.dB.spacing_300.padding} 0;

    @media (min-width: 768px) {
        display: none;
    }
`),m=o.Ay.img`
    height: 100px;
    width: 116px;
    border-radius: 9px;
    object-fit: cover;
`,f=o.Ay.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    padding-right: 12px;
    height: 100px;
    overflow: hidden;
`,y=o.Ay.p`
    font-size: ${d.$G.sans_300.fontSize};
    font-weight: ${d.$G.sans_300.fontWeight};
    color: ${d.J2.Grey.color};
    line-height: ${d.$G.sans_300.lineHeight};
    margin: 0;
`,b=o.Ay.p`
    font-size: ${d.$G.sans_400.fontSize};
    font-weight: ${d.$G.sans_400.fontWeight};
    line-height: ${d.$G.sans_400.lineHeight};
    margin: 0;
    margin-top: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,$=o.Ay.p`
    font-size: ${d.$G.sans_400_semi.fontSize};
    font-weight: ${d.$G.sans_400_semi.fontWeight};
    line-height: ${d.$G.sans_400_semi.lineHeight};
    margin: 0;
    justify-self: flex-end;
    margin-top: auto;
`,w=o.Ay.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 32px;
`,_=o.Ay.div`
    width: 100%;
    height: 80px;
    position: fixed;
    left: 0;
    bottom: 126px;
    display: flex;
    justify-content: end;
    align-items: center;

    @media (max-width: 767px) {
        position: unset;
        left: unset;
        margin-top: auto;
        margin-bottom: 33px;
    }
`,j=(o.Ay.div`
    min-height: 260px;
    width: 100%;
    padding-top: 24px;
    position: fixed;
    bottom: -10vh;
    left: 0;
    background: ${d.J2.White.color};
    border-radius: 14px 14px 0 0;
    box-shadow: ${d.E_.shadow_100.boxShadow};
    z-index: 102;
    display: flex;
    flex-direction: column;
    height: fit-content;

    @media (min-width: 768px) {
        position: absolute;
        width: 410px;
        height: 541px;
        border-radius: 14px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: ${d.dB.spacing_500.padding};
    }
`,o.Ay.p`
    font-size: ${d.$G.sans_400_semi.fontSize};
    line-height: ${d.$G.sans_400_semi.lineHeight};
    font-weight: ${d.$G.sans_400_semi.fontWeight};
    width: 100%;
    text-align: center;
    margin-top: 0;
    margin-bottom: 16px;
`,o.Ay.p`
    position: relative;
    margin: 0 auto;
    margin-bottom: 24px;
    font-size: ${d.$G.sans_300.fontSize};
    line-height: ${d.$G.sans_300.lineHeight};
    font-weight: ${d.$G.sans_300.fontWeight};
    width: 210px;
    text-align: center;
    white-space: nowrap;

    @media (max-width: 767px) {
        display: none;
    }
`,o.Ay.p`
    margin: 0;
    padding-top: 32px;
    padding-bottom: 16px;
    font-size: ${d.$G.sans_400_semi.fontSize};
    line-height: ${d.$G.sans_400_semi.lineHeight};
    font-weight: ${d.$G.sans_400_semi.fontWeight};

    @media (min-width: 768px) {
        padding-top: 44px;
        padding-bottom: 20px;
    }
`),k=(o.Ay.div`
    display: grid;
    grid-template-columns: 50% 50%;
    height: 108px;
    border-radius: 9px;
    border: 1px solid ${d.J2.Grey2.color};

    @media (min-width: 768px) {
        height: 140px;
    }
`,o.Ay.div`
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    padding: ${d.dB.spacing_300.padding} ${d.dB.spacing_400.padding};
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
`,o.Ay.div`
    height: 100%;
    width: 1px;
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: flex-start;
    justify-self: flex-end;
    background: ${d.J2.Grey2.color};
`,o.Ay.p`
    font-size: ${d.$G.sans_300_semi.fontSize};
    font-weight: ${d.$G.sans_300_semi.fontWeight};
    line-height: ${d.$G.sans_300_semi.lineHeight};
    margin: 0;
`,o.Ay.p`
    font-size: ${d.$G.sans_300.fontSize};
    font-weight: ${d.$G.sans_300.fontWeight};
    line-height: ${d.$G.sans_300.lineHeight};
    margin: 0;
`,o.Ay.button`
    font-size: ${d.Ox.sans_button_100.fontSize};
    line-height: ${d.Ox.sans_button_100.lineHeight};
    font-weight: ${d.Ox.sans_button_100.fontWeight};
    height: 32px;
    color: ${d.J2.White.color};
    background: ${d.mh.Red.background};
    border: none;
    border-radius: ${d.Qk.radius_8.borderRadius};
    display: flex;
    padding: 0 20px;
    margin: 0;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`),v=o.Ay.div`
    position: relative;
    padding-top: 116px;
    flex: 1;

    @media (max-width: 1280px) {
        display: none;
    }
`,A=o.Ay.img`
    width: 100%;
    border-radius: 9px;
    margin: 0px 0px 16px;
    object-fit: cover;
    cursor: pointer;
    aspect-ratio: 1 / 1;
`,G=o.Ay.p`
    font-size: ${d.$G.sans_300.fontSize};
    font-weight: ${d.$G.sans_300.fontWeight};
    color: ${d.J2.Grey.color};
    line-height: ${d.$G.sans_300.lineHeight};
    margin: 0;
    margin-bottom: 24px;
    max-width: 384px;
`,D=o.Ay.div`
    display: flex;
    justify-content: space-between;
`,S=o.Ay.p`
    font-size: ${d.$G.sans_350_semi.fontSize};
    font-weight: ${d.$G.sans_350_semi.fontWeight};
    line-height: ${d.$G.sans_350_semi.lineHeight};
    span {
        color: ${d.J2.Grey.color};
        font-size: ${d.$G.sans_200.fontSize};
        font-weight: ${d.$G.sans_200.fontWeight};
        line-height: ${d.$G.sans_200.lineHeight};
    }
`,z=o.Ay.p`
    font-size: ${d.$G.sans_300.fontSize};
    font-weight: ${d.$G.sans_300.fontWeight};
    line-height: ${d.$G.sans_300.lineHeight};
    color: ${d.J2.Grey.color};
`,W=o.Ay.p`
    font-size: ${d.$G.sans_400_semi.fontSize};
    font-weight: ${d.$G.sans_400_semi.fontWeight};
    line-height: ${d.$G.sans_400_semi.lineHeight};
    margin: 0;
    max-width: 384px;
    margin-bottom: 4px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`,I=(o.Ay.div`
    height: 1px;
    width: 100%;
    background: ${d.J2.Grey2.color};
    margin-top: 9px;
    margin-bottom: 21px;
    max-width: 384px;
`,o.Ay.button`
    height: 48px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 216px;
    color: ${d.J2.White.color};
    max-width: 313px;
    font-size: ${d.Ox.sans_button_200.fontSize};
    line-height: ${d.Ox.sans_button_200.lineHeight};
    font-weight: ${d.Ox.sans_button_200.fontWeight};
    background: ${d.J2.Red.color};
    border: none;
    cursor: pointer;
`,o.Ay.div`
    padding: ${d.dB.spacing_500.padding} 0;
    display: flex;
    align-items: center;
    gap: ${d.dB.spacing_300.gap};
    border-bottom: 1px solid ${d.J2.Grey2.color};
    border-top: 1px solid ${d.J2.Grey2.color};
    margin-top: 32px;
`,o.Ay.img`
    width: 24px;
    height: 24px;
    object-fit: cover;
`,o.Ay.p`
    font-size: ${d.$G.sans_200.fontSize};
    font-weight: ${d.$G.sans_200.fontWeight};
    line-height: ${d.$G.sans_200.lineHeight};
    margin: 0;

    strong {
        font-weight: ${d.$G.sans_200_semi.fontWeight};
    }
`,o.Ay.p`
    font-size: ${d.$G.sans_700_semi.fontSize};
    line-height: ${d.$G.sans_700_semi.lineHeight};
    font-weight: ${d.$G.sans_700_semi.fontWeight};
    margin-top: 32px;
    margin-bottom: 24px;
`),R=o.Ay.p`
    font-size: ${d.$G.sans_400.fontSize};
    line-height: ${d.$G.sans_400.lineHeight};
    font-weight: ${d.$G.sans_400.fontWeight};
    margin: 0;
`,H=o.Ay.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
`,B=o.Ay.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 100px;
`,C=o.Ay.p`
    font-size: ${d.$G.sans_400.fontSize};
    font-weight: ${d.$G.sans_400.fontWeight};
    line-height: ${d.$G.sans_400.lineHeight};
    margin: 0;
    margin-bottom: 12px;
    cursor: ${e=>e.showBreakdown?"pointer":"default"};
    text-decoration: ${e=>e.showBreakdown?"underline":"none"};
`,T=o.Ay.div`
    width: 100%;
    height: 1px;
    background: ${d.J2.Grey2.color};
    margin: ${d.dB.spacing_200.margin} auto;
    margin-bottom: 20px;
`,q=(o.Ay.p`
    font-size: ${d.$G.sans_300_semi.fontSize};
    font-weight: ${d.$G.sans_300_semi.fontWeight};
    line-height: ${d.$G.sans_300_semi.lineHeight};
    margin: 0;
    margin-bottom: 12px;
`,o.Ay.button`
    height: 55px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    border-radius: 9px;
    border: 1px solid ${d.J2.Grey2.color};
    background: none;
    text-decoration: none;
    cursor: pointer;
`,o.Ay.p`
    font-size: ${d.$G.sans_300.fontSize};
    line-height: ${d.$G.sans_300.lineHeight};
    font-weight: ${d.$G.sans_300.fontWeight};
    margin: 0;
`,o.Ay.img`
    width: 12px;
    object-fit: cover;
    transform: rotate(270deg);
`,o.Ay.div`
    width: calc(100% - 48px);
    margin-top: 8px;
    display: grid;
    align-items: center;
    grid-template-columns: 16px 1fr;

    @media (min-width: 768px) {
        width: calc(100% - 64px);
    }
`,o.Ay.p`
    font-size: ${d.$G.sans_300_semi.fontSize};
    font-weight: ${d.$G.sans_300_semi.fontWeight};
    line-height: ${d.$G.sans_300_semi.lineHeight};
    justify-self: center;
    padding-right: 16px;
    margin: 0;
`,o.Ay.img`
    height: 16px;
    object-fit: cover;
    align-self: flex-start;
`,o.Ay.p`
    font-size: ${d.$G.sans_200.fontSize};
    font-weight: ${d.$G.sans_200.fontWeight};
    line-height: ${d.$G.sans_200.lineHeight};
    margin: 0 auto;
    margin-top: 20px;
    max-width: 210px;
    text-align: center;
`,o.Ay.div`
    display: flex;
    gap: ${d.dB.spacing_500.gap};
    padding-right: 16px;
    margin: 0 auto;
    margin-bottom: 8px;
`,o.Ay.p`
    font-size: ${d.$G.sans_400_semi.fontSize};
    line-height: ${d.$G.sans_400_semi.lineHeight};
    font-weight: ${d.$G.sans_400_semi.fontWeight};
    color: ${e=>e.selected?d.J2.Black.color:d.J2.Grey.color};
    margin: 0;
    margin-bottom: ${e=>e.selected?"12px":"15px"};
`,o.Ay.div`
    width: calc(100% - 48px);
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${d.J2.Grey2.color};
    margin-top: 24px;
    margin-bottom: 24px;

    @media (min-width: 768px) {
        width: calc(100% - 64px);
    }
`,o.Ay.div`
    height: 100px;
    width: 100%;
    border-bottom: 1px solid ${d.J2.Grey2.color};
    display: flex;
    align-items: center;
    justify-content: space-between;
`,o.Ay.div`
    display: flex;
    flex-direction: column;
    gap: ${d.dB.spacing_200.gap};
`,o.Ay.p`
    font-size: ${d.$G.sans_300_semi.fontSize};
    font-weight: ${d.$G.sans_300_semi.fontWeight};
    margin: 0;
    line-height: ${d.$G.sans_300_semi.lineHeight};
`,o.Ay.p`
    font-size: ${d.$G.sans_200.fontSize};
    font-weight: ${d.$G.sans_200.fontWeight};
    color: ${d.J2.Grey.color};
    margin: 0;
    line-height: ${d.$G.sans_200.lineHeight};
`,o.Ay.div`
    width: 105px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`,o.Ay.button`
    height: 32px;
    width: 32px;
    border-radius: 50%;
    box-shadow: ${d.E_.shadow_300.boxShadow};
    background: ${d.J2.White.color};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    cursor: pointer;
`,o.Ay.img`
    width: 16px;
    height: 16px;
    object-fit: cover;
`,o.Ay.p`
    font-size: ${d.$G.sans_400_semi.fontSize};
    font-weight: ${d.$G.sans_400_semi.fontWeight};
    line-height: ${d.$G.sans_400_semi.lineHeight};
    margin: 0;
`,o.Ay.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${d.dB.spacing_300.gap};
    margin-top: 32px;

    @media (min-width: 768px) {
        margin: 0 auto;
        margin-top: 32px;
        width: 100%;
    }
`),J=o.Ay.img`
    height: 64px;
    width: 64px;
    border-radius: 50%;
    object-fit: cover;
`,O=o.Ay.p`
    font-size: ${d.$G.sans_400_semi.fontSize};
    font-weight: ${d.$G.sans_400_semi.fontWeight};
    line-height: ${d.$G.sans_400_semi.lineHeight};
    margin: 0;
`,P=o.Ay.p`
    font-size: ${d.$G.sans_200_semi.fontSize};
    font-weight: ${d.$G.sans_200_semi.fontWeight};
    line-height: ${d.$G.sans_200_semi.lineHeight};
    margin: 0;
`,M=o.Ay.p`
    font-size: ${d.$G.sans_400.fontSize};
    font-weight: ${d.$G.sans_400.fontWeight};
    line-height: ${d.$G.sans_400.lineHeight};
    margin-top: 24px;
    margin-bottom: 32px;
    width: 100%;

    strong {
        font-weight: ${d.$G.sans_400_semi.fontWeight};
    }

    @media (min-width: 768px) {
        margin: ${d.dB.spacing_400.margin} 0 ${d.dB.spacing_500.margin} 0;
        width: 100%;
    }
`,E=o.Ay.textarea`
    height: 250px;
    width: 100%;
    border-radius: ${d.Qk.radius_12.borderRadius};
    padding: ${d.dB.spacing_300.padding};
    font-size: ${d.$G.sans_300.fontSize};
    font-weight: ${d.$G.sans_300.fontWeight};
    line-height: ${d.$G.sans_300.lineHeight};
    margin-bottom: 90px;
    border: 1px solid ${d.J2.Grey1.color};
    outline: none;
    resize: none;

    @media (min-width: 768px) {
        height: 300px;
        padding: 21px;
        margin: 0 0 24px 0;
        width: 100%;
        font-size: ${d.$G.sans_400.fontSize};
        line-height: ${d.$G.sans_400.lineHeight};
    }
`,U=o.Ay.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 32px;
`,F=o.Ay.div`
    display: flex;
    flex-direction: column;
    gap: ${d.dB.spacing_200.gap};
`,L=o.Ay.p`
    font-size: ${d.$G.sans_300.fontSize};
    line-height: ${d.$G.sans_300.lineHeight};
    font-weight: ${d.$G.sans_300.fontWeight};
    margin: 0;
`,N=o.Ay.div`
    display: flex;
    gap: ${d.dB.spacing_300.gap};
    padding: ${d.dB.spacing_400.padding} 0px;
    align-items: center;
    width: 100%;

    @media (min-width: 768px) {
        padding: ${d.dB.spacing_500.padding} 0;
    }
`,Y=o.Ay.p`
    font-size: ${d.$G.sans_300.fontSize};
    font-weight: ${d.$G.sans_300.fontWeight};
    line-height: ${d.$G.sans_300.lineHeight};
    padding-right: 32px;
    margin: 0;

    strong {
        font-weight: ${d.$G.sans_300_semi.fontWeight};
    }
`,Q=o.Ay.img`
    height: 24px;
    width: 24px;
    object-fit: cover;

    @media (min-width: 768px) {
        height: 32px;
        width: 32px;
    }
`,V=o.Ay.div`
    width: calc(100% + 48px);
    margin-left: -24px;
    height: 8px;
    background: ${d.J2.White.color};
    box-shadow: inset 0px 1.5px 8px rgba(0, 0, 0, 0.115);

    @media (min-width: 768px) {
        width: 100%;
        margin: 0 auto;
        background: ${d.J2.Grey2.color};
        box-shadow: none;
        height: 1px;
    }
`,Z=(o.Ay.p`
    width: calc(100% - 48px);
    margin: 0 auto;
    margin-top: 24px;
    font-size: ${d.$G.sans_200.fontSize};
    font-weight: ${d.$G.sans_200.fontWeight};
    line-height: ${d.$G.sans_200.lineHeight};
    padding-right: 16px;

    a {
        text-decoration: underline;
        padding: 0;
        background: none;
    }

    @media (min-width: 768px) {
        width: calc(100% - 64px);
        margin: 0 auto;
        margin-top: 32px;
    }
`,o.Ay.div`
    padding: ${d.dB.spacing_500.padding} 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`),K=o.Ay.p`
    font-size: ${d.$G.sans_200.fontSize};
    font-weight: ${d.$G.sans_200.fontWeight};
    line-height: ${d.$G.sans_200.lineHeight};
    margin: 0;
    margin-top: 24px;
`,X=o.Ay.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`,ee=(o.Ay.button`
    height: 50px;
    width: 100%;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${d.Ox.sans_button_100.fontSize};
    line-height: ${d.Ox.sans_button_100.lineHeight};
    font-weight: ${d.Ox.sans_button_100.fontWeight};
    color: ${d.J2.White.color};
    background: ${d.J2.Red.color};
    border: none;
    cursor: pointer;
    margin-top: 24px;

    @media (min-width: 768px) {
    }
`,o.Ay.div`
    width: calc(100% - 48px);
    margin: 0 24px;
    margin-top: 32px;
    margin-bottom: auto;
    display: grid;
    grid-template-columns: calc(50% - 8px) calc(50% - 8px);
    grid-template-rows: auto auto auto auto;
    gap: ${d.dB.spacing_300.gap};

    @media (min-width: 768px) {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 32px;
        margin-bottom: 90px;
    }
`),te=(o.Ay.img`
    width: 32px;
    height: 32px;
    object-fit: cover;
`,o.Ay.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
`),ie=o.Ay.div`
    height: 55px;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 9px;
    border: 1px solid ${d.J2.Grey1.color};
    justify-content: space-between;
    background: none;
    margin: 0 auto;
    margin-bottom: 16px;
    grid-column: 1/3;
    grid-row: 1/2;
`,ne=o.Ay.p`
    font-size: ${d.$G.sans_300.fontSize};
    font-weight: ${d.$G.sans_300.fontWeight};
    line-height: ${d.$G.sans_300.lineHeight};
    color: ${d.J2.Grey.color};
    margin: 0;
    margin-left: 20px;
`,oe=o.Ay.button`
    height: 40px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${d.Ox.sans_button_100.fontSize};
    line-height: ${d.Ox.sans_button_100.lineHeight};
    font-weight: ${d.Ox.sans_button_100.fontWeight};
    text-decoration: underline;
    margin-right: 8px;
    cursor: pointer;
    border: none;
    border-radius: ${d.Qk.radius_8.borderRadius};
`,se=o.Ay.img`
    height: 32px;
    width: 32px;
    border-radius: 5px;
    object-fit: cover;
`,ae=(0,o.Ay)(s.A)`
    height: 55px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${d.E_.shadow_100.boxShadow};
    background: ${d.J2.White.color};
    display: flex;
    align-items: center;
    gap: ${d.dB.spacing_300.gap};
    padding-left: 16px !important;
`,re=(0,o.Ay)(a.A)`
    height: 55px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${d.E_.shadow_100.boxShadow};
    background: ${d.J2.White.color};
    display: flex;
    align-items: center;
    gap: ${d.dB.spacing_300.gap};
    padding-left: 16px !important;
`,de=(0,o.Ay)(r.A)`
    height: 55px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${d.E_.shadow_100.boxShadow};
    background: ${d.J2.White.color};
    display: flex;
    align-items: center;
    gap: ${d.dB.spacing_300.gap};
    padding-left: 16px !important;
`,le=o.Ay.p`
    font-size: ${d.Ox.sans_button_100.fontSize};
    font-weight: ${d.Ox.sans_button_100.fontWeight};
    line-height: ${d.Ox.sans_button_100.lineHeight};
    margin: 0;
`,ge=(o.Ay.p`
    font-size: ${d.$G.sans_400_semi.fontSize};
    line-height: ${d.$G.sans_400_semi.lineHeight};
    font-weight: ${d.$G.sans_400_semi.fontWeight};
    margin: 0;
`,o.Ay.div`
    width: calc(100% - 48px);
    margin: ${d.dB.spacing_400.margin};
    margin-bottom: calc(24px + 10vh);
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
        width: 100%;
        margin: 44px 0 0 0;
    }
`,o.Ay.button`
    font-size: ${d.Ox.sans_button_200.fontSize};
    font-weight: ${d.Ox.sans_button_200.fontWeight};
    line-height: ${d.Ox.sans_button_200.lineHeight};
    margin: 0;
    text-decoration: underline;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
`,o.Ay.button`
    font-size: ${d.Ox.sans_button_100.fontSize};
    font-weight: ${d.Ox.sans_button_100.fontWeight};
    color: ${d.J2.White.color};
    line-height: ${d.Ox.sans_button_100.lineHeight};
    margin: 0;
    border-radius: 9px;
    border: none;
    background: ${d.J2.Red.color};
    height: 50px;
    width: 160px;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
`,o.Ay.button`
    height: 50px;
    border-radius: 10px;
    background: ${e=>e.disabled?d.J2.Grey1.color:d.J2.Red.color};
    border: none;
    font-size: ${d.$G.sans_300_bold.fontSize};
    line-height: ${d.$G.sans_300_bold.lineHeight};
    color: ${d.J2.White.color};
    font-weight: ${d.$G.sans_300_bold.fontWeight};
    width: 100%;
    margin-top: 16px;
    cursor: pointer;
    @media (min-width: 768px) {
        font-size: ${d.Ox.sans_button_200.fontSize};
        line-height: ${d.Ox.sans_button_200.lineHeight};
        font-weight: ${d.Ox.sans_button_200.fontWeight};
    }
`);var he=i(2565),pe=i(4677),ce=i(2342),xe=i(9047),ue=i(3216),me=i(4204),fe=i(9317),ye=i(1972),be=i(3393),$e=i(6458),we=i(7494),_e=i(1869),je=i(831),ke=i(7426),ve=i(579);const Ae=e=>{let{startDate:t,listingID:i,endDate:o,originalBeginDate:s,originalEndDate:a,submitChangeBookingRequest:r}=e;const d=(0,be.useStripe)(),l=(0,be.useElements)(),[g,h]=(0,je.useRecoilState)(_e.e),[p,c]=(0,n.useState)("");(0,n.useEffect)((()=>{if(!d)return;new URLSearchParams(window.location.search).get("payment_intent_client_secret")}),[d]);const x=async e=>{if(null===e||void 0===e||e.preventDefault(),!g)return;if(!t||!o)return;if(!d||!l)return;await c("processing");const n=t.toString(),h=o.toString();try{if(!(await(0,ke.p)("post","dev-anystay-booking","checkbookingavailability",{body:{id:i,beginDate:n,endDate:h,originalBeginDate:s,originalEndDate:a}})).body.available)return void c("notAvailable")}catch(p){return console.log(p),void c("failed")}await d.confirmPayment({elements:l,confirmParams:{return_url:"http://localhost:3000",receipt_email:g.email},redirect:"if_required"}).then((async e=>{var t,i,n;if(e.error)throw new Error;if("succeeded"===(null===(t=e.paymentIntent)||void 0===t?void 0:t.status)||"requires_capture"===(null===(i=e.paymentIntent)||void 0===i?void 0:i.status))await r(e.paymentIntent.id);else{if("processing"!==(null===(n=e.paymentIntent)||void 0===n?void 0:n.status))throw new Error;c("processing")}})).catch((e=>{console.log(e),c("failed")}))};return(0,ve.jsxs)("form",{id:"payment-form",onSubmit:x,children:[(0,ve.jsx)(be.PaymentElement,{id:"payment-element"}),(0,ve.jsx)(ge,{disabled:"processing"===p||!d||!l,id:"submit",children:"Request change"}),"processing"===p&&(0,ve.jsx)($e.A,{spinnerWidth:"96",spinnerHeight:"96",title:"Preparing your stay",subtitle:"",waiting:!1,timeout:null,guestMode:!0}),"failed"===p&&(0,ve.jsx)(we.A,{tryAgainFunc:x,closeModal:()=>{c("")}}),"notAvailable"===p&&(0,ve.jsx)(fe.A,{closeModal:()=>{c("")}})]})},Ge=(0,ye.c)("pk_test_SSNwwcCynpo8Nkm7ELYKnEVU"),De=e=>{let{clientSecret:t,listingID:i,startDate:n,endDate:o,submitChangeBookingRequest:s,originalBeginDate:a,originalEndDate:r}=e;return(0,ve.jsx)("div",{className:"App",children:t&&(0,ve.jsx)(be.Elements,{options:{clientSecret:t},stripe:Ge,children:(0,ve.jsx)(Ae,{listingID:i,startDate:n,endDate:o,submitChangeBookingRequest:s,originalBeginDate:a,originalEndDate:r})})})};var Se=i(6879),ze=i(1852);const We=e=>{let{getPlaceType:t,bookingRequestListing:i,startDate:o,endDate:s,guests:a,bookingDetails:r,toggleNightlyPriceBreakdownPopup:d,bookingRequest:l,clientSecret:g,originalBeginDate:h,originalEndDate:p,setPageIndex:_,accessToken:v,toggleDatepicker:A,toggleGuestsPopup:G}=e;const[D,S]=(0,n.useState)(!1),z=(0,ue.Zp)(),[W,B]=(0,n.useState)(!1),q=async e=>{if(o&&s)try{let t={newArrivalDate:o.toString(),newDepartureDate:s.toString(),newGuests:a.guests,newAdults:a.adults,newChildren:a.children,newInfants:a.infants,newPets:a.pets,listingModelId:l.listingmodelID,bookingRequestId:l.id,bookingRequestVersion:l._version,paymentIntentId:e||null};await(0,ke.p)("put","dev-anystay-booking","booking/change",{headers:{Authorization:v,bookingId:l.id},body:t}).then((async e=>{e.success?(_(1),window.scrollTo(0,0)):S(!0)})).catch((e=>console.log(e)))}catch(t){console.log(t)}};return(0,ve.jsxs)(n.Fragment,{children:[D&&(0,ve.jsx)(fe.A,{closeModal:()=>{S(!1)}}),(0,ve.jsxs)(c,{children:[(0,ve.jsx)(ze.A,{onClick:()=>{z(-1)},type:"Arrow",mobileTop:24}),(0,ve.jsx)(x,{children:"Change your stay"})]}),(0,ve.jsxs)(u,{children:[(0,ve.jsx)(m,{src:(0,Se.A)(JSON.parse(i.listingImages[0]).key,500),alt:"featured listing image"}),(0,ve.jsxs)(f,{children:[(0,ve.jsx)(y,{children:t()}),(0,ve.jsx)(b,{children:i?i.propertyTitle:null}),(0,ve.jsx)($,{children:"Confirmed"})]})]}),(0,ve.jsx)(V,{}),(0,ve.jsxs)(U,{style:{border:"none"},children:[(0,ve.jsxs)(F,{children:[(0,ve.jsx)(j,{style:{padding:0},children:"Dates"}),(0,ve.jsx)(L,{children:(()=>{const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return o&&s?`${o.getDate()} ${e[o.getMonth()]} - ${s.getDate()} ${e[s.getMonth()]}`:"-"})()})]}),(0,ve.jsx)(k,{type:"button",onClick:A,children:"Edit"})]}),(0,ve.jsxs)(U,{style:{border:"none",paddingBottom:"32px"},children:[(0,ve.jsxs)(F,{children:[(0,ve.jsx)(j,{style:{padding:0},children:"Guests"}),(0,ve.jsx)(L,{children:(()=>{let e=[];return a.adults>0&&e.push(`${a.adults} ${a.adults>1?"Adults":"Adult"}`),a.children>0&&e.push(`${a.children} ${a.children>1?"Children":"Child"}`),a.infants>0&&e.push(`${a.infants} ${a.infants>1?"Infants":"Infant"}`),a.pets>0&&e.push(`${a.pets} ${a.pets>1?"Pets":"Pet"}`),e.join(", ")})()})]}),(0,ve.jsx)(k,{type:"button",onClick:G,children:"Edit"})]}),(0,ve.jsx)(V,{}),(0,ve.jsx)(ve.Fragment,{children:0!==r.displayItems.priceDiffItems.length&&r.displayItems.priceDiffItems.map(((e,t)=>(0,ve.jsxs)(n.Fragment,{children:[(0,ve.jsxs)(Z,{children:[(0,ve.jsx)(I,{style:{margin:0},children:e.label}),(0,ve.jsx)(R,{children:e.amountFormatted})]}),(0,ve.jsx)(T,{style:{marginTop:0,marginBottom:0}})]},e.label)))}),(0,ve.jsxs)(N,{children:[(0,ve.jsx)(Q,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg",alt:"Info icon"}),(0,ve.jsxs)(Y,{children:[(0,ve.jsx)("strong",{children:"Your host will review your request."})," Changes will not apply until your host accepts them."]})]}),window.innerWidth<768&&(0,ve.jsx)(V,{}),(0,ve.jsxs)(te,{children:[(0,ve.jsx)(I,{children:"Price details"}),r.displayItems.priceItems.filter((e=>"Deposit"!==e.label)).map(((e,t)=>{const i=0===t;return(0,ve.jsxs)(H,{onClick:()=>{i&&d()},children:[(0,ve.jsx)(C,{showBreakdown:i,children:e.label}),(0,ve.jsx)(C,{children:e.amountFormatted})]},e.label)})),r.displayItems.subTotalItems.map(((e,t)=>(0,ve.jsxs)(H,{children:[(0,ve.jsx)(C,{style:{fontWeight:0===t?"600":"400"},children:e.label}),(0,ve.jsx)(C,{style:{fontWeight:0===t?"600":"400"},children:e.amountFormatted})]},e.label)))]}),(0,ve.jsx)(V,{}),r.displayItems.priceDiffItems.length>0&&r.displayItems.priceDiffItems[2].amount>0?(0,ve.jsx)(X,{children:(0,ve.jsxs)(w,{children:[(0,ve.jsxs)(j,{style:{paddingBottom:"24px"},children:["Pay ",r.priceDiffFormatted," AUD"]}),g&&(0,ve.jsx)(De,{submitChangeBookingRequest:q,clientSecret:g,startDate:o,endDate:s,listingID:i.id,originalBeginDate:h,originalEndDate:p})]})}):(0,ve.jsxs)(X,{children:[(0,ve.jsxs)(K,{children:["By continuing, you accept our"," ",(0,ve.jsx)("a",{href:"/terms-and-conditions",target:window.innerWidth>768?"_blank":"",children:"Terms of Service"}),", ",(0,ve.jsx)("br",{}),(0,ve.jsx)("a",{href:"/privacy-policy",target:window.innerWidth>768?"_blank":"",children:"Privacy Policy"})," ","and the"," ",(0,ve.jsx)("a",{href:"https://stripe.com/en-au/legal/connect-account",target:window.innerWidth>768?"_blank":"",rel:"noreferrer",children:"Stripe Connected Account Agreement"})]}),(0,ve.jsx)(w,{children:(0,ve.jsx)(me.A,{style:{marginTop:window.innerWidth<768?"24px":"32px"},isLoading:W,background:"red",disabled:W||!(()=>{let e=!1;if(l){const t=new Date(new Date(l.arrivalDate).getUTCFullYear(),new Date(l.arrivalDate).getUTCMonth(),new Date(l.arrivalDate).getUTCDate()),i=new Date(new Date(l.departureDate).getUTCFullYear(),new Date(l.departureDate).getUTCMonth(),new Date(l.departureDate).getUTCDate());o&&s&&(o.getTime()===t.getTime()&&s.getTime()===i.getTime()&&a.guests===l.guests||(e=!0)),l.adults===a.adults&&l.children===a.children&&l.infants===a.infants&&l.pets===a.pets||(e=!0)}return e})(),onClick:async()=>{B(!0),await q(""),B(!1)},children:"Request change"})})]})]})};var Ie=i(5475),Re=i(9820);const He=e=>{let{bookingRequest:t,listingOwnerProfilePictureURL:i,listingOwnerData:o,accessToken:s,setPageIndex:a}=e;const[r,d]=(0,je.useRecoilState)(_e.e),[l,g]=(0,n.useState)(""),[h,p]=(0,n.useState)(!1);return(0,ve.jsxs)(n.Fragment,{children:[(0,ve.jsxs)(c,{children:[(0,ve.jsx)(Ie.N_,{to:`/your-booking/${t?t.id:""}`,children:(0,ve.jsx)(ze.A,{onClick:()=>{a(0)},type:"Arrow",mobileTop:24,mobileLeft:0})}),(0,ve.jsx)(x,{children:"Your changes have been requested"})]}),(0,ve.jsxs)(q,{children:[(0,ve.jsx)(J,{src:i,alt:""}),(0,ve.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[(0,ve.jsx)(O,{children:o?o.firstName:null}),(0,ve.jsx)(P,{children:"Verified host"})]})]}),(0,ve.jsxs)(M,{children:[(0,ve.jsx)("strong",{children:"You made a change request!"})," You can send your host a message to introduce yourself. Let them know why you're staying and any special requests."]}),(0,ve.jsx)(E,{value:l,onChange:e=>g(e.target.value),placeholder:"Type your message"}),(0,ve.jsx)(_,{children:(0,ve.jsx)(Re.A,{style:{marginRight:window.innerWidth>768?"32px":"",marginBottom:window.innerWidth<768?"16px":""},background:"red",isLoading:h,disabled:h,onClick:async()=>{""!==l?(p(!0),await(async()=>{r&&await(0,ke.p)("put","dev-anystay-booking","conversation/guest/message",{headers:{Authorization:s,conversationID:t.conversationmodelID},body:{author:r.id,body:l,conversationModelId:t.conversationmodelID,userHostModelId:t.userhostmodelID}}).then((()=>{a(2)}))})()):a(2)}})})]})};var Be=i(3546),Ce=i(1743);const Te=e=>{let{bookingRequest:t,bookingRequestListing:i}=e;const o=(0,ue.Zp)(),[s,a]=(0,n.useState)(!1);return(0,ve.jsxs)(n.Fragment,{children:[(0,ve.jsx)(c,{style:{paddingLeft:window.innerWidth<768?"24px":""},children:(0,ve.jsx)(x,{style:{marginLeft:"0"},children:"Share us"})}),(0,ve.jsxs)(ee,{children:[(0,ve.jsxs)(ie,{children:[(0,ve.jsx)(ne,{children:`Anystay.com.au/listing/${t.listingmodelID}`.slice(0,26)+"..."}),(0,ve.jsx)(oe,{type:"button",onClick:()=>{a(!0),setTimeout((()=>{a(!1)}),2e3),navigator.clipboard.writeText(`https://anystay.com.au/listing/${t.listingmodelID}`)},children:s?"Copied":"Copy"}),(0,ve.jsx)(Be.N,{children:s&&(0,ve.jsx)(Ce.A,{})})]}),(0,ve.jsxs)(ae,{quote:"Check out Anystay!",url:"https://anystay.com.au",hashtag:"#anystay",children:[(0,ve.jsx)(se,{src:"https://d292awxalydr86.cloudfront.net/Social-Icons/Facebook.svg",alt:"Icon"}),(0,ve.jsx)(le,{children:"Facebook"})]}),(0,ve.jsxs)(re,{url:"https://anystay.com.au",subject:i?`Come check out: ${i.propertyTitle}!`:"",separator:" ",body:"Come check out the listing i will be staying at!",children:[(0,ve.jsx)(se,{src:"https://d292awxalydr86.cloudfront.net/Social-Icons/Email.svg",alt:"Icon"}),(0,ve.jsx)(le,{children:"Email"})]}),(0,ve.jsxs)(de,{title:"Check out Anystay!",url:"https://anystay.com.au",hashtags:["#anystay"],children:[(0,ve.jsx)(se,{src:"https://d292awxalydr86.cloudfront.net/Social-Icons/Twitter+3.svg",alt:"Icon"}),(0,ve.jsx)(le,{children:"Twitter"})]})]}),(0,ve.jsx)(_,{children:(0,ve.jsx)(Re.A,{style:{marginRight:window.innerWidth>768?"32px":"",marginBottom:window.innerWidth<768?"16px":""},background:"red",onClick:()=>o(`/your-booking/${t?t.id:""}`)})})]})};var qe=i(9082),Je=i(8306),Oe=i(8069);function Pe(){const{id:e}=(0,ue.g)(),[t,i]=(0,je.useRecoilState)(_e.e),[o,s]=(0,je.useRecoilState)(qe.H),a=(0,ue.Zp)(),[r,d]=(0,n.useState)(0),[c,x]=(0,n.useState)(null),[u,m]=(0,n.useState)(!1),[f,y]=(0,n.useState)(!1),[b,$]=(0,n.useState)(null),[w,_]=(0,n.useState)(null),[j,k]=(0,n.useState)({guests:0,adults:0,children:0,infants:0,pets:0}),[I,R]=(0,n.useState)(null),[H,C]=(0,n.useState)(null),[T,q]=(0,n.useState)(""),[J,O]=(0,n.useState)(""),[P,M]=(0,n.useState)(null),[E,U]=(0,n.useState)("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png"),[F,L]=(0,n.useState)([]),[N,Y]=(0,n.useState)(null),[Q,V]=(0,n.useState)(!1),[Z,K]=(0,n.useState)(""),X=(0,n.useCallback)((async(e,t,i)=>{let n=await(0,ke.p)("get","dev-anystay-booking",`getunavailabledates/${i.id}?beginDate=${e}&endDate=${t}`);L(n.body.unavailableDates)}),[]),ee=(0,n.useCallback)((async e=>{const t=await(0,ke.p)("get","dev-anystay-booking",`booking/${e}`,{headers:{Authorization:o}});if(t.body.bookingRequest.UserHostModel.UserModel.profilePicture){const e=(0,Oe.A)(t.body.bookingRequest.UserHostModel.UserModel.profilePicture,t.body.bookingRequest.UserHostModel.UserModel.identityID,100);U(e)}const i=new Date(new Date(t.body.bookingRequest.arrivalDate).getUTCFullYear(),new Date(t.body.bookingRequest.arrivalDate).getUTCMonth(),new Date(t.body.bookingRequest.arrivalDate).getUTCDate()),n=new Date(new Date(t.body.bookingRequest.departureDate).getUTCFullYear(),new Date(t.body.bookingRequest.departureDate).getUTCMonth(),new Date(t.body.bookingRequest.departureDate).getUTCDate()),s=i.toString(),a=n.toString();return $(t.body.bookingRequest),_(t.body.bookingRequest.ListingModel),M(t.body.bookingRequest.UserHostModel.UserModel),k({guests:t.body.bookingRequest.guests,adults:t.body.bookingRequest.adults,children:t.body.bookingRequest.children,infants:t.body.bookingRequest.infants,pets:t.body.bookingRequest.pets}),R(i),C(n),q(s),O(a),{formattedStartDate:s,formattedEndDate:a,startDate:i,endDate:n,listingModelId:t.body.bookingRequest.ListingModel.id,guestsNum:t.body.bookingRequest.guests,oldPrice:t.body.bookingRequest.bookingAmountIncludingServiceFee,bookingRequestListing:t.body.bookingRequest.ListingModel}}),[o]),te=(0,n.useCallback)((async(e,i,n,s)=>{t&&await(0,ke.p)("put","dev-anystay-booking","booking/change/payment",{headers:{Authorization:o,bookingID:s},body:{receiptEmail:t.email,newArrivalDate:e,newDepartureDate:i,newGuests:n,bookingRequestID:s}}).then((async e=>{console.log(e),e.refund||(x(e.paymentIntent),K(e.paymentIntent.client_secret))})).catch((e=>console.log(e)))}),[o,t]),ie=(0,n.useCallback)((async(e,t,i,n,s)=>{await(0,ke.p)("post","dev-anystay-booking","booking/change/payment",{headers:{Authorization:o,bookingId:s},body:{newGuests:i,newArrivalDate:e,newDepartureDate:t,bookingRequestID:s,paymentIntentID:n}}).then((async e=>{console.log(e),e.refund||(x(e.paymentIntent),K(e.clientSecret))})).catch((e=>console.log(e)))}),[o]),ne=(0,n.useCallback)((async(e,t,i,n,s,a,r,d)=>{try{const l=await(0,ke.p)("post","dev-anystay-booking",`/booking/change/details/${r}`,{headers:{Authorization:o},body:{coupon:e,listingmodelID:t,arrivalDate:i.toString(),departureDate:n.toString(),guests:s,oldPrice:a,bookingRequestId:r}});return Y(l.bookingDetails),l.bookingDetails.displayItems.priceDiffItems.length>0&&l.bookingDetails.displayItems.priceDiffItems[2].amount>0&&(d?await ie(i,n,s,d.id,r):await te(i,n,s,r)),!0}catch(l){return console.log(l),!1}}),[te,o,ie]);(0,n.useEffect)((()=>{(async()=>{if(e){const{formattedStartDate:t,formattedEndDate:i,startDate:n,endDate:o,listingModelId:s,guestsNum:a,oldPrice:r,bookingRequestListing:d}=await ee(e);await X(t,i,d),await ne(null,s,n,o,a,r,e,null)}})()}),[ne,ee,X,e]);const oe=()=>{let e="";if(w&&null!==w.suburb)switch(w.typeOfPlace){case"entire-place":e=w.propertyType+" in "+w.suburb.toLowerCase(),e=e[0].toUpperCase()+e.substring(1);break;case"hotel-room":e="Hotel room in "+w.propertyType,e=e[0].toUpperCase()+e.substring(1);break;case"private-room":e="Private room in "+w.propertyType,e=e[0].toUpperCase()+e.substring(1);break;case"shared-room":e="Shared room in "+w.propertyType,e=e[0].toUpperCase()+e.substring(1)}return e},se=()=>{m((e=>!e))},ae=()=>{y((e=>!e))},re=()=>{V(!Q)};return b&&N&&w&&P?(0,ve.jsxs)(ve.Fragment,{children:[(0,ve.jsx)(Je.A,{title:"Change your stay | Anystay"}),0===r&&(0,ve.jsxs)(l,{children:[(0,ve.jsx)(h,{children:(0,ve.jsx)(We,{getPlaceType:oe,bookingRequestListing:w,startDate:I,endDate:H,guests:j,accessToken:o,bookingDetails:N,toggleNightlyPriceBreakdownPopup:re,bookingRequest:b,clientSecret:Z,originalBeginDate:T,originalEndDate:J,setPageIndex:d,toggleGuestsPopup:ae,toggleDatepicker:se})}),0===r&&(0,ve.jsx)(v,{children:(0,ve.jsxs)(B,{children:[(0,ve.jsx)(A,{src:(0,Se.A)(JSON.parse(w.listingImages[0]).key,500),alt:"Featured listing image",onClick:()=>{a(-1)}}),(0,ve.jsxs)(D,{children:[(0,ve.jsx)(W,{children:w?w.propertyTitle:null}),w.overallAverage>0?(0,ve.jsxs)(S,{children:[(w.overallAverage/10).toFixed(1)," ",(0,ve.jsxs)("span",{children:["(",w.ReviewStayModels.items.length,")"]})]}):(0,ve.jsx)(z,{children:"New"})]}),(0,ve.jsx)(G,{children:oe()})]})})]}),(1===r||2===r)&&(0,ve.jsx)(g,{children:(0,ve.jsxs)(p,{children:[1===r&&(0,ve.jsx)(He,{bookingRequest:b,listingOwnerProfilePictureURL:E,listingOwnerData:P,accessToken:o,setPageIndex:d}),2===r&&(0,ve.jsx)(Te,{bookingRequest:b,bookingRequestListing:w})]})}),window.innerWidth<768&&Q&&(0,ve.jsx)(xe.A,{bookingDetails:N,toggleModal:re}),u&&(0,ve.jsx)(he.A,{startDate:I,endDate:H,unavailableDates:F,cancelFunc:se,handleClickOutside:se,listing:w,saveFunc:async t=>{if(!w||!b)return;const i=j.adults+j.children;if(e){await ne(null,w.id,t[0],t[1],i,b.bookingAmountIncludingServiceFee,e,c)&&(R(t[0]),C(t[1]))}}}),f&&(0,ve.jsx)(ce.A,{adults:j.adults,infants:j.infants,children:j.children,pets:j.pets,listingOwnerData:P,listing:w,toggleGuests:ae,updateGuests:async t=>{if(!w||!b)return;const i=t.adults+t.children;if(I&&H&&e){await ne(null,w.id,I,H,i,b.bookingAmountIncludingServiceFee,e,c)&&k({guests:t.adults+t.children,adults:t.adults,children:t.children,infants:t.infants,pets:t.pets})}}})]}):(0,ve.jsx)(pe.A,{guestMode:!0,reverse:!1})}}}]);
//# sourceMappingURL=8624.83ddd112.chunk.js.map
//# debugId=cfd693a9-5a72-553d-bf70-3bf669f07c1b
