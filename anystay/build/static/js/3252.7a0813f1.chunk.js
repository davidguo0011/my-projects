"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c78add22-b4d2-569f-aa57-5c5eb976296e")}catch(e){}}();
(self.webpackChunkanystay_dev=self.webpackChunkanystay_dev||[]).push([[3252],{9820:(e,t,i)=>{i.d(t,{A:()=>d});var n=i(2119),s=i(4936);const o=n.Ay.button`
    height: ${e=>e.size?e.size:"80px"};
    border-radius: ${s.Qk.radius_100.borderRadius};
    width: ${e=>e.size?e.size:"80px"};
    position: relative;
    background: ${e=>e.disabled?s.J2.Grey1.color:"red"===e.background?s.J2.Red.color:"blue"===e.background?s.J2.Blue.color:"black"===e.background?s.J2.Black.color:"grey"===e.background?s.J2.Grey1.color:"white"===e.background?s.J2.White.color:void 0};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: ${s.Ox.sans_button_200.fontSize};
    font-weight: ${s.Ox.sans_button_200.fontWeight};
    color: ${e=>e.isLoading?"transparent":s.J2.White.color};
    margin-top: auto;
    line-height: ${s.Ox.sans_button_200.lineHeight};
    cursor: pointer;
    user-select: none;
    box-shadow: ${s.E_.shadow_100.boxShadow};
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
`;var r=i(308),l=i(579);const d=e=>{let{isLoading:t,children:i,disabled:n,background:s,src:d,iconSize:c,size:g,...h}=e;return(0,l.jsxs)(o,{...h,background:s,disabled:n,isLoading:t||!1,size:g,children:[t&&(0,l.jsx)(r.A,{height:"14px",color:"white",width:"32px",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),i,!t&&(0,l.jsx)(a,{src:d||"https://d292awxalydr86.cloudfront.net/Universal+icons/Next.svg",alt:"Arrow Btn",iconSize:c})]})}},6458:(e,t,i)=>{i.d(t,{A:()=>u});var n=i(5043),s=i(7950),o=i(4175),a=i(2119),r=i(4936);const l=a.Ay.p`
    margin-top: 32px;
    font-size: ${r.$G.sans_800_bold.fontSize};
    line-height: ${r.$G.sans_800_bold.lineHeight};
    font-weight: ${r.$G.sans_800_bold.fontWeight};
    margin-bottom: 24px;
`,d=a.Ay.p`
    margin: 0;
    font-size: ${r.$G.sans_400.fontSize};
    line-height: ${r.$G.sans_400.lineHeight};
    max-width: 270px;
    font-weight: ${r.$G.sans_400.fontWeight};
`,c=a.Ay.div`
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
`,g=a.Ay.p`
    margin: 0;
    visibility: ${e=>e.waiting?"visible":"hidden"};
`;var h=i(579);const p=e=>{let{spinnerWidth:t,spinnerHeight:i,title:s,subtitle:a,waiting:r,timeout:p,guestMode:u}=e;const[x,f]=(0,n.useState)(!0);return(0,n.useEffect)((()=>{let e;return p&&(e=setTimeout((()=>{f(!1)}),p)),()=>{e&&clearTimeout(e)}}),[p]),(0,h.jsx)(h.Fragment,{children:x&&(0,h.jsx)("div",{style:{height:"100vh",width:"100vw",position:"fixed",left:0,top:0,zIndex:101,background:"rgba(0, 0, 0, 0.25)",backdropFilter:"blur(0px)"},id:"loading-full-page-small-modal",children:(0,h.jsxs)(c,{children:[(0,h.jsx)(o.A,{width:i,height:t,guestMode:u}),(0,h.jsx)(l,{children:s}),(0,h.jsx)(d,{children:a}),(0,h.jsx)(g,{waiting:r,children:"This may take a few seconds."})]})})})},u=e=>{let{spinnerWidth:t,spinnerHeight:i,title:n,subtitle:o,waiting:a,timeout:r,guestMode:l}=e;return(0,s.createPortal)((0,h.jsx)(p,{spinnerWidth:t,spinnerHeight:i,title:n,subtitle:o,waiting:a,timeout:r,guestMode:l}),document.getElementById("root"))}},7494:(e,t,i)=>{i.d(t,{A:()=>a});var n=i(9470),s=i(9697),o=i(579);const a=e=>{let{tryAgainFunc:t,closeModal:i}=e;return(0,o.jsx)(s.A,{children:(0,o.jsxs)(n.mO,{children:[(0,o.jsxs)("div",{style:{height:"90%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[(0,o.jsx)(n._0,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg",alt:"Unavailable feature icon"}),(0,o.jsx)(n.hE,{children:"Payment failed"}),(0,o.jsx)(n.Pd,{children:"Your payment method is invalid, please try again or change it."})]}),(0,o.jsxs)(n.mF,{children:[(0,o.jsx)(n.tB,{paymentType:"back",onClick:()=>{i()},children:"Back"}),t&&(0,o.jsx)(n.tB,{paymentType:"try-again",onClick:()=>{t()},children:"Try again"})]})]})})}},9470:(e,t,i)=>{i.d(t,{Pd:()=>a,_0:()=>c,hE:()=>o,mF:()=>l,mO:()=>r,tB:()=>d});var n=i(2119),s=i(4936);const o=n.Ay.p`
    margin-top: 40px;
    font-size: ${s.$G.sans_800_bold.fontSize};
    line-height: ${s.$G.sans_800_bold.lineHeight};
    font-weight: ${s.$G.sans_800_bold.fontWeight};
    margin-bottom: 16px;
`,a=n.Ay.p`
    margin: 0;
    font-size: ${s.$G.sans_400.fontSize};
    line-height: ${s.$G.sans_400.lineHeight};
    max-width: 270px;
    font-weight: ${s.$G.sans_400.fontWeight};
    text-align: center;
`,r=n.Ay.div`
    z-index: 102;
    left: 0;
    bottom: 0;
    width: 100%;
    height: calc(100vh - 120px);
    background: ${s.J2.White.color};
    border-radius: 14px 14px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    box-shadow: ${s.E_.shadow_300.boxShadow};
    padding: ${s.dB.spacing_400.padding} ${s.dB.spacing_400.padding} ${s.dB.spacing_300.padding};

    @media (min-width: 768px) {
        width: 560px;
        height: 600px;
        left: 50%;
        bottom: 50%;
        transform: translate(-50%, 50%);
        border-radius: 14px;
        padding: ${s.dB.spacing_400.padding};
    }
`,l=n.Ay.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: auto;
`,d=n.Ay.button`
    cursor: pointer;
    height: 48px;
    background-color: ${e=>"back"===e.paymentType?"transparent":s.J2.Red.color};
    border-radius: 9px;
    text-decoration: ${e=>"back"===e.paymentType?"underline":"none"};
    color: ${e=>"back"===e.paymentType?"black":"white"};
    border: none;
    width: ${e=>"back"===e.paymentType?"":"142px"};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${s.Ox.sans_button_100.fontWeight};
    font-size: ${s.Ox.sans_button_100.fontSize};
    padding: 0 !important;

    @media (min-width: 768px) {
        width: ${e=>"back"===e.paymentType?"50px":"120px"};
        font-size: ${s.Ox.sans_button_200.fontSize};
    }
`,c=n.Ay.img`
    width: 80px;
    height: 80px;
`},9317:(e,t,i)=>{i.d(t,{A:()=>a});var n=i(9470),s=i(9697),o=i(579);const a=e=>{let{closeModal:t}=e;return(0,o.jsx)(s.A,{children:(0,o.jsxs)(n.mO,{children:[(0,o.jsxs)("div",{style:{height:"90%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[(0,o.jsx)(n._0,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.svg",alt:"Unavailable feature icon"}),(0,o.jsx)(n.hE,{children:"Booking failed"}),(0,o.jsx)(n.Pd,{children:"The dates you selected are no longer available."})]}),(0,o.jsx)(n.mF,{children:(0,o.jsx)(n.tB,{paymentType:"back",onClick:()=>{t()},children:"Back"})})]})})}},3252:(e,t,i)=>{i.r(t),i.d(t,{default:()=>jt});var n=i(2119),s=i(1791),o=i(5073),a=i(6442),r=i(7811),l=i(4936);const d=n.Ay.div`
    position: "relative";
    display: flex;
    justify-content: center;

    @media (min-width: 1280px) {
        gap: ${e=>0===e.pageIndex&&"80px"};
        max-width: ${e=>0===e.pageIndex&&"1360px"};
        padding: ${e=>0===e.pageIndex&&"0 80px"};
        margin: ${e=>0===e.pageIndex&&"0 auto"};
    }
`,c=n.Ay.div`
    overflow: scroll;
    height: fit-content;
    padding: 0 24px;
    justify-content: center;
    @media (min-width: 768px) {
        height: 100vh;
        display: flex;
        overflow: unset;
        margin-top: 80px;
        height: ${e=>2===e.pageIndex?"calc(100vh - 80px)":"unset"};
        min-height: ${e=>0===e.pageIndex?"100vh":"unset"};
        padding: 0;
    }
    @media (min-width: 1281px) {
        justify-content: ${e=>0===e.pageIndex&&"right"};
    }
`,g=n.Ay.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        width: ${e=>1===e.pageIndex?"640px":"520px"};
    }
`,h=n.Ay.p`
    font-size: ${l.$G.sans_300.fontSize};
    line-height: ${l.$G.sans_300.lineHeight};
    font-weight: ${l.$G.sans_300.fontWeight};
    color: ${l.J2.Grey.color};
    margin: 0;
    text-transform: capitalize;
`,p=n.Ay.div`
    display: flex;
    justify-content: space-between;
`,u=n.Ay.p`
    font-size: ${l.$G.sans_350_semi.fontSize};
    font-weight: ${l.$G.sans_350_semi.fontWeight};
    line-height: ${l.$G.sans_350_semi.lineHeight};
    span {
        color: ${l.J2.Grey.color};
        font-size: ${l.$G.sans_200.fontSize};
        font-weight: ${l.$G.sans_200.fontWeight};
        line-height: ${l.$G.sans_200.lineHeight};
    }
`,x=n.Ay.p`
    font-size: ${l.$G.sans_300.fontSize};
    font-weight: ${l.$G.sans_300.fontWeight};
    line-height: ${l.$G.sans_300.lineHeight};
    color: ${l.J2.Grey.color};
`,f=n.Ay.p`
    font-size: ${l.$G.sans_400_semi.fontSize};
    line-height: ${l.$G.sans_400_semi.lineHeight};
    font-weight: ${l.$G.sans_400_semi.fontWeight};
    margin: 0;
    margin-bottom: 4px;
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,m=n.Ay.div`
    margin-top: 80px;
    position: relative;
    padding-top: 116px;

    @media (max-width: 1280px) {
        display: none;
    }
`,y=n.Ay.div`
    max-width: 520px;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 100px;
`,b=n.Ay.div`
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: ${e=>e.border?`1px solid ${l.J2.Grey2.color}`:"none"};
    padding: 48px 0 32px;
    position: relative;

    @media (min-width: 768px) {
        border-top: none;
        border: none;
    }
`,$=n.Ay.h2`
    font-size: ${e=>e.checkoutPage?l.$G.sans_400_semi.fontSize:l.$G.sans_900_semi.fontSize};
    line-height: ${e=>e.checkoutPage?l.$G.sans_400_semi.lineHeight:l.$G.sans_900_semi.lineHeight};
    font-weight: ${e=>e.checkoutPage?l.$G.sans_400_semi.fontWeight:l.$G.sans_900_semi.fontWeight};
    justify-self: left;
    margin: 0 auto;

    @media (min-width: 768px) {
        justify-self: flex-start;
        margin: 0;
        font-size: ${l.$G.sans_1000_semi.fontSize};
        line-height: ${l.$G.sans_1000_semi.lineHeight};
        font-weight: ${l.$G.sans_1000_semi.fontWeight};
        color: ${l.J2.Black.color};
        margin-left: 24px;
    }
`,w=n.Ay.div`
    font-size: ${l.$G.sans_900_semi.fontSize};
    line-height: ${l.$G.sans_900_semi.lineHeight};
    font-weight: ${l.$G.sans_900_semi.fontWeight};
    justify-self: left;
    margin: 0;
    @media (min-width: 768px) {
        justify-self: flex-start;
        margin: 0;
        font-size: ${l.$G.sans_1000_semi.fontSize};
        line-height: ${l.$G.sans_1000_semi.lineHeight};
        font-weight: ${l.$G.sans_1000_semi.fontWeight};
    }
`,_=(n.Ay.button`
    height: 16px;
    border: none;
    background: none;
    padding: 0;
    margin-right: 24px;
    cursor: pointer;
`,n.Ay.img`
    position: relative;
    height: 16px;
    width: 16px;
    margin: 0;
    padding: 0;
    justify-self: flex-start;
    margin-right: auto;
    object-fit: contain;
`,n.Ay.div`
    height: 116px;
    margin: ${l.dB.spacing_300.margin} 0;
    margin-bottom: 0;
    padding-bottom: 16px;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 100%;
    border-bottom: 1px solid ${l.J2.Grey2.color};

    @media (min-width: 768px) {
        display: none;
    }
`),j=n.Ay.img`
    grid-row: 1/2;
    grid-column: 1/2;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${l.Qk.radius_8.borderRadius};
`,v=n.Ay.div`
    height: 100%;
    width: 100%;
    grid-row: 1/2;
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    margin-left: 16px;
`,k=n.Ay.div`
    font-size: ${l.$G.sans_300.fontSize};
    line-height: ${l.$G.sans_300.lineHeight};
    font-weight: ${l.$G.sans_300.fontWeight};
    color: ${l.J2.Grey.color};
    margin: 0;
    text-transform: capitalize;
`,A=n.Ay.p`
    font-size: ${l.$G.sans_300.fontSize};
    font-weight: ${l.$G.sans_300.fontWeight};
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    span {
        font-weight: ${l.$G.sans_400_semi.fontWeight};
        line-height: ${l.$G.sans_400.lineHeight};
    }
`,S=n.Ay.img`
    width: 100%;
    border-radius: ${l.Qk.radius_12.borderRadius};
    margin: 0;
    object-fit: cover;
    margin-bottom: 16px;
    cursor: pointer;
    aspect-ratio: 1/1;
`,G=n.Ay.div`
    width: 100%;
    padding: ${l.dB.spacing_500.padding} 0;
    border-bottom: 1px solid ${l.J2.Grey2.color};

    @media (min-width: 768px) {
        padding: 40px 0;
        border-top: 1px solid ${l.J2.Grey2.color};
        border-bottom: 1px solid ${l.J2.Grey2.color};
    }
`,D=n.Ay.div`
    background: ${l.J2.White.color};
    box-shadow: inset 0px 1.5px 8px 0px rgba(0, 0, 0, 0.12);
    margin-left: -24px;
    width: calc(100% + 48px);
    min-height: 8px;
    @media (min-width: 768px) {
        display: none;
    }
`,z=(n.Ay.button`
    height: 50px;
    border-radius: 10px;
    background: ${e=>e.disabled?l.J2.Grey1.color:l.mh.Red.background};
    border: none;
    font-size: ${l.$G.sans_300_bold.fontSize};
    line-height: ${l.$G.sans_300_bold.lineHeight};
    color: ${l.J2.White.color};
    font-weight: ${l.$G.sans_300_bold.fontWeight};
    width: 100%;
    cursor: pointer;
    @media (min-width: 768px) {
        font-size: ${l.Ox.sans_button_200.fontSize};
        line-height: ${l.Ox.sans_button_200.lineHeight};
        font-weight: ${l.Ox.sans_button_200.fontWeight};
    }
`,n.Ay.div`
    width: 100%;
    padding: ${l.dB.spacing_500.padding} 0px;

    @media (min-width: 768px) {
        padding: 40px 0px;
    }
`),I=n.Ay.div`
    font-size: ${l.$G.sans_700_semi.fontSize};
    font-weight: ${l.$G.sans_700_semi.fontWeight};
    line-height: ${l.$G.sans_700_semi.lineHeight};
    margin: 0;
    margin-bottom: 24px;
`,C=n.Ay.div`
    width: 100%;
    margin: 0px;
    display: flex;
    align-items: center;
`,W=n.Ay.div`
    display: flex;
    flex-direction: column;
    gap: ${l.dB.spacing_200.gap};
`,B=n.Ay.p`
    font-size: ${l.$G.sans_400_semi.fontSize};
    line-height: ${l.$G.sans_400_semi.lineHeight};
    font-weight: ${l.$G.sans_400_semi.fontWeight};
    margin: 0;
`,R=n.Ay.p`
    font-size: ${l.$G.sans_400.fontSize};
    line-height: ${l.$G.sans_400.lineHeight};
    font-weight: ${l.$G.sans_400.fontWeight};
    margin: 0;
`,T=n.Ay.button`
    height: 32px;
    margin: 0;
    padding: 0 20px;
    border-radius: ${l.Qk.radius_8.borderRadius};
    background: ${l.mh.Red.background};
    border: none;
    font-size: ${l.Ox.sans_button_100.fontSize};
    line-height: ${l.Ox.sans_button_100.lineHeight};
    font-weight: ${l.Ox.sans_button_100.fontWeight};
    justify-self: flex-end;
    margin-left: auto;
    position: relative;
    color: ${l.J2.White.color};
    cursor: pointer;
`,H=n.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${l.dB.spacing_250.gap};
`,P=n.Ay.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`,N=n.Ay.p`
    font-size: ${l.$G.sans_400.fontSize};
    line-height: ${l.$G.sans_400.lineHeight};
    font-weight: ${l.$G.sans_400.fontWeight};
    margin: 0;
    cursor: ${e=>e.showBreakdown?"pointer":"default"};
    text-decoration: ${e=>e.showBreakdown?"underline":"none"};

    span {
        text-decoration: none;
    }
`,O=(n.Ay.button`
    font-size: ${l.Ox.sans_button_200.fontSize};
    line-height: ${l.Ox.sans_button_200.lineHeight};
    font-weight: ${l.Ox.sans_button_200.fontWeight};
    margin: 0;
    text-decoration: underline;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;

    @media (min-width: 768px) {
        font-size: ${l.Ox.sans_button_300.fontSize};
        line-height: ${l.Ox.sans_button_300.lineHeight};
    }
`,n.Ay.p`
    margin: 0;
    font-size: ${l.$G.sans_300.fontSize};
    line-height: ${l.$G.sans_300.lineHeight};
    font-weight: ${l.$G.sans_300.fontWeight};
`),J=n.Ay.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${l.dB.spacing_100.gap};
    height: 105px;
    border-bottom: 1px solid ${l.J2.Grey2.color};
    padding: ${l.dB.spacing_500.padding} 0;

    @media (min-width: 768px) {
        display: grid;
        height: 74px;
        border-radius: ${l.Qk.radius_12.borderRadius};
        background: ${l.J2.White.color};
        box-shadow: ${l.E_.shadow_100.boxShadow};
        padding: ${l.dB.spacing_300.padding};
        text-align: left;
        grid-template-columns: 32px 1fr;
        grid-template-rows: 100%;
        border: none;
        gap: 0;
    }
`,U=n.Ay.img`
    height: 24px;
    width: 24px;
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: flex-start;

    @media (max-width: 767px) {
        display: none;
    }
`,E=n.Ay.p`
    font-size: ${l.$G.sans_400_semi.fontSize};
    line-height: ${l.$G.sans_400_semi.lineHeight};
    font-weight: ${l.$G.sans_400_semi.fontWeight};
    margin: 0;
    grid-column: 1/2;
    grid-row: 1/2;
    @media (min-width: 768px) {
        align-self: flex-start;
        grid-column: 2/3;
        padding-left: 16px;
    }
`,q=n.Ay.p`
    font-size: ${l.$G.sans_300.fontSize};
    line-height: ${l.$G.sans_300.lineHeight};
    font-weight: ${l.$G.sans_300.fontWeight};
    color: ${l.J2.Grey.color};
    margin: 0;
    grid-column: 1/2;
    grid-row: 1/2;
    @media (min-width: 768px) {
        align-self: flex-end;
        grid-column: 2/3;
        padding-left: 16px;
    }
`,M=n.Ay.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    flex-direction: column;
    flex: 1;
`,F=n.Ay.div`
    height: 80px;
    position: fixed;
    right: 24px;
    bottom: 24px;
    display: flex;
    justify-content: end;
    align-items: center;

    @media (min-width: 768px) {
        right: 32px;
        bottom: 32px;
    }
`,L=n.Ay.div`
    width: 100%;
    display: flex;
    padding: 0;
    margin-bottom: 32px;
    position: relative;

    @media (min-width: 768px) {
        width: 640px;
        margin-bottom: 48px;
    }
`,Q=n.Ay.img`
    width: 100%;
    object-fit: cover;
    aspect-ratio: 20/19;
    border-radius: ${l.Qk.radius_12.borderRadius};

    @media (min-width: 768px) {
        width: 640px;
        aspect-ratio: 3/2;
    }
`,Y=(n.Ay.div`
    display: flex;
    flex-direction: column;
    gap: ${l.dB.spacing_200.gap};
`,n.Ay.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid ${l.J2.White.color};
`),K=n.Ay.div`
    width: 64px;
    position: absolute;
    height: 64px;
    bottom: 20px;
    right: 20px;

    @media (min-width: 768px) {
        width: 80px;
        height: 80px;
        bottom: 24px;
        right: 24px;
    }
`,Z=n.Ay.img`
    grid-row: 1/2;
    grid-column: 1/2;
    height: 16px;
    width: 16px;
    object-fit: cover;
    align-self: flex-end;
    justify-self: flex-end;
`,V=n.Ay.p`
    font-size: ${l.$G.sans_500_semi.fontSize};
    line-height: ${l.$G.sans_500_semi.lineHeight};
    font-weight: ${l.$G.sans_500_semi.fontWeight};
    margin-bottom: 16px;

    @media (min-width: 768px) {
        margin-bottom: 24px;
        font-size: ${l.$G.sans_700_semi.fontSize};
        line-height: ${l.$G.sans_700_semi.lineHeight};
        font-weight: ${l.$G.sans_700_semi.fontWeight};
    }
`,X=n.Ay.textarea`
    min-height: 128px;
    width: 100%;
    padding: ${l.dB.spacing_300.padding};
    outline: none;
    font-size: ${l.$G.sans_400.fontSize};
    line-height: ${l.$G.sans_400.lineHeight};
    font-weight: ${l.$G.sans_400.fontWeight};
    border-radius: 9px;
    border: none;
    margin-bottom: 160px;
    resize: none;
    box-shadow: ${l.E_.shadow_100.boxShadow};

    &::placeholder {
        color: ${l.J2.Grey1.color};
    }
    @media (min-width: 768px) {
        margin: 0;
        width: 640px;
        min-height: 130px;
        margin-bottom: 80px;
    }
`,ee=n.Ay.button`
    width: 100%;
    margin-bottom: 16px;
    margin-top: 16px;
    height: 52px;
    border-radius: 9px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${l.mh.Red.background};
    color: ${l.J2.White.color};
    font-size: ${l.Ox.sans_button_200.fontSize};
    line-height: ${l.Ox.sans_button_200.lineHeight};
    font-weight: ${l.Ox.sans_button_100.fontWeight};
    cursor: pointer;
    margin-bottom: 24px;

    @media (min-width: 768px) {
        margin-bottom: 160px;
    }
`,te=n.Ay.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: ${l.dB.spacing_300.gap};
    padding-top: 24px;
    margin-top: 24px;
    border-top: 1px solid ${l.J2.Grey2.color};

    @media (min-width: 1280px) {
        gap: ${l.dB.spacing_350.gap};
    }
`,ie=n.Ay.img`
    width: 24px;
    height: 24px;
    object-fit: cover;

    @media (min-width: 1280px) {
        width: 32px;
        height: 32px;
    }
`,ne=n.Ay.p`
    font-size: ${l.$G.sans_300.fontSize};
    font-weight: ${l.$G.sans_300.fontWeight};
    line-height: ${l.$G.sans_300.lineHeight};
    padding-right: 20px;
    margin: 0;

    strong {
        font-weight: ${l.$G.sans_200_semi.fontWeight};
    }

    @media (min-width: 768px) {
        font-size: ${l.$G.sans_300.fontSize};
        line-height: ${l.$G.sans_300.lineHeight};
    }
`,se=n.Ay.input`
    width: 100%;
    height: 54px;
    border-radius: 9px;
    padding: ${l.dB.spacing_300.padding};
    padding-right: 48px;
    background: none;
    border: 1px solid ${l.J2.Grey1.color};
    font-size: ${l.$G.sans_400.fontSize};
    line-height: ${l.$G.sans_400.lineHeight};
    font-weight: ${l.$G.sans_400.fontWeight};
    margin: 0 auto;
    outline: none;

    &::placeholder {
        color: ${l.J2.Grey1.color};
    }
`,oe=n.Ay.div`
    margin-top: 32px;
    padding-bottom: 32px;
    border-bottom: 1px solid ${l.J2.Grey2.color};
`,ae=n.Ay.p`
    font-size: ${l.$G.sans_300.fontSize};
    line-height: ${l.$G.sans_300.lineHeight};
    color: ${l.J2.Red.color};
    font-weight: ${l.$G.sans_300.fontWeight};
`,re=n.Ay.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 17px;
    align-items: baseline;
`,le=n.Ay.div`
    position: relative;
`,de=n.Ay.img`
    width: 16px;
    height: 16px;
    position: absolute;
    top: 18px;
    right: 16px;
`,ce=n.Ay.p`
    font-size: ${l.$G.sans_700_semi.fontSize};
    font-weight: ${l.$G.sans_700_semi.fontWeight};
    line-height: ${l.$G.sans_700_semi.lineHeight};
    color: ${l.J2.Black.color};
`,ge=n.Ay.a`
    margin: 0;
    font-size: ${l.$G.sans_400_semi.fontSize};
    font-weight: ${l.$G.sans_400_semi.fontWeight};
    line-height: ${l.$G.sans_400_semi.lineHeight};
    text-decoration: underline;
`,he=(0,n.Ay)(s.A)`
    height: 54px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${l.E_.shadow_100.boxShadow};
    background: ${l.J2.White.color};
    display: flex;
    align-items: center;
    gap: ${l.dB.spacing_300.gap};
    padding-left: 16px !important;
`,pe=(0,n.Ay)(o.A)`
    height: 54px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${l.E_.shadow_100.boxShadow};
    background: ${l.J2.White.color};
    display: flex;
    align-items: center;
    gap: ${l.dB.spacing_300.gap};
    padding-left: 16px !important;
`,ue=(0,n.Ay)(a.A)`
    height: 54px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${l.E_.shadow_100.boxShadow};
    background: ${l.J2.White.color};
    display: flex;
    align-items: center;
    gap: ${l.dB.spacing_300.gap};
    padding-left: 16px !important;
`,xe=((0,n.Ay)(r.A)`
    height: 54px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${l.E_.shadow_100.boxShadow};
    background: ${l.J2.White.color};
    display: flex;
    align-items: center;
    gap: ${l.dB.spacing_300.gap};
    padding-left: 16px !important;
`,n.Ay.div`
    height: 54px;
    width: 100%;
    border-radius: 9px;
    box-shadow: ${l.E_.shadow_100.boxShadow};
    background: ${l.J2.White.color};
    display: flex;
    align-items: center;
    gap: ${l.dB.spacing_300.gap};
    padding-left: 16px;
    cursor: pointer;
`,n.Ay.img`
    height: 32px;
    width: 32px;
    border-radius: 5px;
    object-fit: cover;
`),fe=n.Ay.p`
    font-size: ${l.Ox.sans_button_100.fontSize};
    font-weight: ${l.Ox.sans_button_100.fontWeight};
    line-height: ${l.Ox.sans_button_100.lineHeight};
    margin: 0;
`,me=n.Ay.div`
    height: 54px;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 9px;
    border: 1px solid ${l.J2.Grey1.color};
    justify-content: space-between;
    background: none;
    margin: 0 auto;
    margin-bottom: 16px;
    grid-column: 1/3;
    grid-row: 1/2;
`,ye=n.Ay.button`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${l.Ox.sans_button_200.fontSize};
    line-height: ${l.Ox.sans_button_200.lineHeight};
    font-weight: ${l.Ox.sans_button_200.fontWeight};
    background: none;
    text-decoration: underline;
    margin-right: 8px;
    cursor: pointer;
    border: none;
    border-radius: ${l.Qk.radius_8.borderRadius};
`,be=n.Ay.p`
    font-size: ${l.$G.sans_400_semi.fontSize};
    font-weight: ${l.$G.sans_400_semi.fontWeight};
    line-height: ${l.$G.sans_400_semi.lineHeight};
    margin: 0;
    margin-left: 20px;
`,$e=n.Ay.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: calc(50% - 8px) calc(50% - 8px);
    grid-template-rows: auto auto auto auto 1fr;
    gap: ${l.dB.spacing_300.gap};
`,we=n.Ay.div`
    width: 100%;
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: ${e=>0===e.pageIndex?"0 24px":"0 32px"};
    display: flex;
    justify-content: space-between;
    @media (max-width: 767px) {
        display: none;
    }
`,_e=n.Ay.div`
    z-index: 10;
    margin: ${l.dB.spacing_500.margin} 0 ${l.dB.spacing_200.margin} 0;
`,je=n.Ay.div`
    z-index: 10;
    display: flex;
    align-items: center;
`,ve=n.Ay.img`
    height: 40px;
    width: 40px;
    object-fit: cover;
`,ke=n.Ay.img`
    width: 140px;
    height: 38px;
    object-fit: cover;
`,Ae=n.Ay.a`
    height: 40px;
    font-size: ${l.$G.sans_400_semi.fontSize};
    line-height: ${l.$G.sans_400_semi.lineHeight};
    font-weight: ${l.$G.sans_400_semi.fontWeight};
    border: 1px solid ${l.J2.Grey1.color};
    padding: 9px 24px;
    border-radius: ${l.Qk.radius_100.borderRadius};
    margin: ${l.dB.spacing_500.margin} 0 ${l.dB.spacing_200.margin} 0;
    cursor: pointer;
    text-decoration: none;
`,Se=n.Ay.p`
    font-size: ${l.$G.sans_300.fontSize};
    font-weight: ${l.$G.sans_300.fontWeight};
    line-height: ${l.$G.sans_300.lineHeight};
    margin: 26px 0;

    a {
        font-size: ${l.$G.sans_300_semi.fontSize};
        font-weight: ${l.$G.sans_300_semi.fontWeight};
        line-height: ${l.$G.sans_300_semi.lineHeight};
        text-decoration: underline;
    }
`;var Ge=i(7668),De=i(4348),ze=i.n(De),Ie=i(4677),Ce=i(3216),We=i(6879),Be=i(579);function Re(e){let{listing:t,imageKey:i}=e;const n=(0,Ce.Zp)();return(0,Be.jsx)(m,{children:(0,Be.jsxs)(y,{children:[(0,Be.jsx)(S,{src:(0,We.A)(i,800),alt:"Featured image",onClick:()=>{n(`/listing/${t.id}`)}}),(0,Be.jsxs)(p,{children:[(0,Be.jsx)(f,{children:t.propertyTitle}),t.overallAverage>0?(0,Be.jsxs)(u,{children:[(t.overallAverage/10).toFixed(1)," ",(0,Be.jsxs)("span",{children:["(",t.ReviewStayModels.items.length,")"]})]}):(0,Be.jsx)(x,{children:"New"})]}),(0,Be.jsx)(h,{children:(()=>{if(t)switch(t.typeOfPlace){case"entire-place":return`${t.propertyType}`;case"private-room":return"Private room";case"hotel-room":return"Hotel room";case"shared-room":return"Shared room";default:return""}})()})]})})}var Te=i(3546),He=i(5043),Pe=i(1743),Ne=i(9820),Oe=i(1869),Je=i(831);function Ue(e){let{bookingRequest:t,listing:i,pageIndex:n}=e;const[s,o]=(0,He.useState)(!1),[a,r]=(0,Je.useRecoilState)(Oe.e),l=(0,Ce.Zp)();return(0,Be.jsx)(c,{pageIndex:n,children:(0,Be.jsxs)(g,{pageIndex:n,children:[(0,Be.jsx)(b,{children:(0,Be.jsx)($,{style:{marginLeft:0},children:"Share us for 10% off your next stay"})}),(0,Be.jsxs)($e,{children:[(0,Be.jsxs)(me,{children:[(0,Be.jsx)(be,{children:"t.ly/UejTz"}),(0,Be.jsx)(ye,{type:"button",onClick:()=>{o(!0),setTimeout((()=>{o(!1)}),2e3),navigator.clipboard.writeText("https://anystay.com.au/listing")},children:s?"Copied":"Copy"}),(0,Be.jsx)(Te.N,{children:s&&(0,Be.jsx)(Pe.A,{})})]}),(0,Be.jsxs)(pe,{quote:"Check out Anystay!",url:"https://anystay.com.au",hashtag:"#anystay",children:[(0,Be.jsx)(xe,{src:"https://d292awxalydr86.cloudfront.net/Social-Icons/Facebook.svg",alt:"Icon"}),(0,Be.jsx)(fe,{children:"Facebook"})]}),(0,Be.jsxs)(he,{url:"https://anystay.com.au",subject:`Come check out: ${i.propertyTitle}!`,separator:" ",body:"Come check out the listing i will be staying at!",children:[(0,Be.jsx)(xe,{src:"https://d292awxalydr86.cloudfront.net/Social-Icons/Email.svg",alt:"Icon"}),(0,Be.jsx)(fe,{children:"Email"})]}),(0,Be.jsxs)(ue,{title:"Check out Anystay!",url:"https://anystay.com.au",children:[(0,Be.jsx)(xe,{src:"https://d292awxalydr86.cloudfront.net/Social-Icons/Twitter+3.svg",alt:"Icon"}),(0,Be.jsx)(fe,{children:"Twitter"})]})]}),window.innerWidth<768?(0,Be.jsx)(F,{children:(0,Be.jsx)(Ne.A,{background:"red",onClick:()=>l(`/your-stays/${a.id}`),style:{marginBottom:"16px"}})}):(0,Be.jsx)(F,{children:(0,Be.jsx)(Ne.A,{background:"red",onClick:()=>l(`/your-stays/${a.id}`)})})]})})}var Ee=i(7426);function qe(e){let{listingOwnerProfilePictureURL:t,listingOwnerData:i,accessToken:n,bookingRequest:s,setPageIndex:o,listing:a,pageIndex:r,imageKey:l}=e;const[d,h]=(0,He.useState)(!1),[p,u]=(0,Je.useRecoilState)(Oe.e),[x,f]=(0,He.useState)("");return s?(0,Be.jsx)(c,{pageIndex:r,children:(0,Be.jsxs)(g,{pageIndex:r,children:[(0,Be.jsx)(b,{children:(0,Be.jsx)(w,{children:a.instantBookEnabled?`Your stay in ${a.city}, ${a.stateShort} has been confirmed!`:`Your stay in ${a.city}, ${a.stateShort} has been requested!`})}),(0,Be.jsxs)(M,{children:[(0,Be.jsxs)(L,{children:[(0,Be.jsx)(Q,{src:(0,We.A)(l,800),alt:"Listing Cover Image"}),(0,Be.jsxs)(K,{children:[(0,Be.jsx)(Y,{src:t,alt:"Photo of host"}),i.userIDConfirmed&&(0,Be.jsx)(Z,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Vector.png",alt:"Verified tick"})]})]}),(0,Be.jsxs)(V,{children:["Message your host, ",i.firstName]}),(0,Be.jsx)(X,{value:x,onChange:e=>{f(e.target.value)},placeholder:"Type your message"}),(0,Be.jsx)(F,{children:(0,Be.jsx)(Ne.A,{onClick:async()=>{h(!0),await(async()=>{""!==x&&null!==x?await(0,Ee.p)("put","dev-anystay-booking","conversation/guest/message",{headers:{Authorization:n,conversationId:s.conversationmodelID},body:{author:p.id,body:x,conversationModelId:s.conversationmodelID,userHostModelId:s.userhostmodelID,message:x}}).then((async e=>{o(2)})):o(2)})(),h(!1)},disabled:d,background:"red",isLoading:d})})]})]})}):null}var Me=i(1972),Fe=i(3393),Le=i(5475),Qe=i(6458),Ye=i(7494),Ke=i(9317),Ze=i(474),Ve=i(6138);function Xe(e){let{startDate:t,cancellationPolicy:i,listing:n}=e;const s=(0,Ve.A)();return(0,Be.jsxs)(G,{style:s?{marginTop:"40px"}:{},children:[(0,Be.jsx)(I,{children:"Guest policy"}),(0,Be.jsx)(O,{children:(()=>{const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let n=new Date,s=new Date(t),o=s.setUTCDate(s.getUTCDate()-1),a=new Date(t),r=a.setUTCDate(a.getUTCDate()-7),l=n.setUTCDate(n.getUTCDate()+2),d=new Date(t),c=d.setUTCDate(d.getUTCDate()-28),g=`${new Date(o).getUTCDate()} ${e[new Date(o).getUTCMonth()]}`,h=`${new Date(r).getUTCDate()} ${e[new Date(r).getUTCMonth()]}`,p=`${new Date(l).getUTCDate()} ${e[new Date(l).getUTCMonth()]}`,u=`${new Date(c).getUTCDate()} ${e[new Date(c).getUTCMonth()]}`;switch(i){case"flexible":return(0,Be.jsxs)(Ze.o0Q,{style:{margin:0,maxWidth:"unset"},children:[(0,Be.jsxs)("strong",{style:{fontWeight:575},children:["Free cancellation ","NaN undefined"===g?"until 24 hours before arrival":`before ${g}`,"."]})," After that, you will receive a full refund of unspent nights minus service fee."," ",(0,Be.jsx)(ge,{target:"_blank",href:"https://help.anystay.com.au/en/articles/7007340-cancellations",children:"Learn more"})]});case"moderate":return(0,Be.jsxs)(Ze.o0Q,{style:{margin:0},children:[(0,Be.jsxs)("strong",{style:{fontWeight:575},children:["Free cancellation ","NaN undefined"===h?"until 7 days before arrival":`before ${h}`,"."]})," After that, you will receive a 50% refund of unspent nights minus service fee."," ",(0,Be.jsx)(ge,{target:"_blank",href:"https://help.anystay.com.au/en/articles/7007340-cancellations",children:"Learn more"})]});case"strict":return(0,Be.jsxs)(Ze.o0Q,{style:{margin:0},children:[(0,Be.jsxs)("strong",{style:{fontWeight:575},children:["Free cancellation before ",p,"."]})," If you cancel"," ","NaN undefined"===u?"28 days before arrival":`before ${u}`," you will receive a 50% refund minus service fees. After that, you won't be Refunded."," ",(0,Be.jsx)(ge,{target:"_blank",href:"https://help.anystay.com.au/en/articles/7007340-cancellations",children:"Learn more"})]});default:return""}})()}),n.deposit>0&&(0,Be.jsx)(O,{children:(0,Be.jsxs)(Ze.o0Q,{style:{margin:0,maxWidth:"unset"},children:[(0,Be.jsxs)("strong",{style:{fontWeight:575},children:[(0,Be.jsx)("br",{}),"Your host may charge a $",Number(n.deposit/100).toFixed(2)," deposit."]})," ","This is usually processed at check-in."," ",(0,Be.jsx)(ge,{target:"_blank",href:"https://help.anystay.com.au/en/articles/7007403-deposits",children:"Learn more"})]})}),!n.instantBookEnabled&&(0,Be.jsxs)(te,{children:[(0,Be.jsx)(ie,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Interface+Time+Rewind.svg",alt:""}),(0,Be.jsxs)(ne,{children:[(0,Be.jsx)("strong",{children:"Your host has 24 hours to confirm your request."})," You won't be charged until then."]})]})]})}var et=i(4204);function tt(e){let{listing:t,createBookingRequest:i,startDate:n,endDate:s,cancellationPolicy:o}=e;const a=(0,Fe.useStripe)(),r=(0,Fe.useElements)(),[l,d]=(0,Je.useRecoilState)(Oe.e),[c,g]=(0,He.useState)("");(0,He.useEffect)((()=>{if(!a)return;new URLSearchParams(window.location.search).get("payment_intent_client_secret")}),[a]);const h=async e=>{if(null===e||void 0===e||e.preventDefault(),!a||!r)return;g("processing");const o=n.toString(),d=s.toString();try{if(!(await(0,Ee.p)("post","dev-anystay-booking","checkbookingavailability",{body:{id:t.id,beginDate:o,endDate:d}})).body.available)return void g("notAvailable")}catch(c){return console.log(c),void g("failed")}await a.confirmPayment({elements:r,confirmParams:{return_url:"http://localhost:3000",receipt_email:l.email},redirect:"if_required"}).then((async e=>{if(e.error)throw new Error;if(e.paymentIntent)if("succeeded"===e.paymentIntent.status||"requires_capture"===e.paymentIntent.status)await i(e);else{if("processing"!==e.paymentIntent.status)throw new Error;g("processing")}})).catch((e=>{console.log(e),g("failed")}))};return(0,Be.jsxs)("form",{id:"payment-form",children:[(0,Be.jsx)(Fe.PaymentElement,{id:"payment-element"}),(0,Be.jsx)(D,{style:{marginTop:"32px"}}),(0,Be.jsx)(Xe,{listing:t,startDate:n,cancellationPolicy:o}),(0,Be.jsxs)(Se,{children:["By pressing the button below you are agreeing to our ",(0,Be.jsx)(Le.N_,{to:"/terms-and-conditions",children:"Terms of Service"}),", our ",(0,Be.jsx)(Le.N_,{to:"/privacy-policy",children:"Privacy Policy"})," and"," ",(0,Be.jsx)(Le.N_,{to:"/payment-policy",children:"Payment Policy"}),"."]}),(0,Be.jsx)(et.A,{disabled:"processing"===c||!a||!r,onClick:h,isLoading:"processing"===c||!a||!r,background:"red",children:"Confirm and book"}),"processing"===c&&(0,Be.jsx)(Qe.A,{spinnerWidth:"64",spinnerHeight:"64",title:"Preparing your stay...",subtitle:"",waiting:!1,timeout:null,guestMode:!0}),"failed"===c&&(0,Be.jsx)(Ye.A,{tryAgainFunc:h,closeModal:()=>{g("")}}),"notAvailable"===c&&(0,Be.jsx)(Ke.A,{closeModal:()=>{g("")}})]})}const it=(0,Me.c)("pk_test_SSNwwcCynpo8Nkm7ELYKnEVU");function nt(e){let{clientSecret:t,createBookingRequest:i,startDate:n,endDate:s,listing:o,cancellationPolicy:a}=e;return(0,Be.jsx)("div",{className:"App",children:t&&(0,Be.jsx)(Fe.Elements,{options:{clientSecret:t,appearance:{}},stripe:it,children:(0,Be.jsx)(tt,{listing:o,createBookingRequest:i,startDate:n,endDate:s,cancellationPolicy:a})})})}var st=i(2565),ot=i(2342),at=i(9136),rt=i(9047);function lt(e){let{instantBookEnabled:t}=e;const[i,n]=(0,Je.useRecoilState)(Oe.e),[s,o]=(0,He.useState)(!1);return s?(0,Be.jsxs)(J,{children:[(0,Be.jsx)(U,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/alert+circle.png",alt:"notice icon"}),(0,Be.jsx)(E,{children:"$129 off with HELLOAUS"}),(0,Be.jsx)(q,{children:"Be the first to review this place."})]}):(0,Be.jsxs)(J,{children:[(0,Be.jsx)(U,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Wave.svg",alt:"wave icon"}),(0,Be.jsxs)(E,{children:["Book now",i?`, ${i.firstName}`:null,"!"]}),(0,Be.jsx)(q,{children:"Secure this place before anyone else."})]})}var dt=i(1852);const ct=e=>/^[a-zA-Z0-9]+$/.test(e);function gt(e){let{updateCoupon:t}=e;const[i,n]=(0,He.useState)(""),[s,o]=(0,He.useState)(!1),[a,r]=(0,He.useState)(!1),l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;const[i,n]=(0,He.useState)(e);return(0,He.useEffect)((()=>{const i=setTimeout((()=>{n(e)}),t);return()=>{clearTimeout(i)}}),[e,t]),i}(i,1e3);return(0,He.useEffect)((()=>{(async()=>{if(l.length>=6)try{(await t(l)).success?r(!0):o(!0)}catch(e){o(!0)}})()}),[l]),(0,Be.jsxs)(oe,{children:[(0,Be.jsxs)(re,{children:[(0,Be.jsx)(ce,{children:"Got a coupon?"}),s&&(0,Be.jsx)(ae,{children:"Coupon expired or used"})]}),(0,Be.jsxs)(le,{children:[(0,Be.jsx)(se,{type:"text",placeholder:"Add coupon code",value:i,onChange:async e=>{r(!1),o(!1);const t=e.target.value;(ct(t)||""===t)&&n(t.toUpperCase())}}),a&&(0,Be.jsx)(de,{src:"https://d292awxalydr86.cloudfront.net/Universal+icons/Approval+tick.svg",alt:"Tick icon"})]})]})}function ht(e){let{pageIndex:t,listing:i,imageKey:n,bookingDetails:s,guests:o,startDate:a,endDate:r,listingOwnerData:l,updateGuests:d,updateDates:h,updateCoupon:p,clientSecret:u,createBookingRequest:x,cancellationPolicy:f}=e;const[m,y]=(0,Je.useRecoilState)(Oe.e),[w,S]=(0,Je.useRecoilState)(at.c6),[O,J]=(0,He.useState)(!1),[U,E]=(0,He.useState)(!1),[q,M]=(0,He.useState)([]),[F,L]=(0,He.useState)(!1),Q=(0,Ce.Zp)(),Y=(0,He.useCallback)((async()=>{let e=await(0,Ee.p)("get","dev-anystay-booking",`getunavailabledates/${i.id}`);M(e.body.unavailableDates)}),[i]),K=()=>{L(!F)};return(0,He.useEffect)((()=>{Y()}),[Y]),i?(0,Be.jsx)(c,{pageIndex:t,children:(0,Be.jsxs)(g,{pageIndex:t,children:[(0,Be.jsxs)(b,{border:0===t,children:[0===t&&(0,Be.jsx)(dt.A,{onClick:()=>{Q(-1)},type:"Arrow",mobileLeft:0,mobileTop:22}),(0,Be.jsx)($,{checkoutPage:!0,children:0===t&&i?i.instantBookEnabled?"Confirm your stay":"Request to stay":i?i.instantBookEnabled?"Your stay has been confirmed!":"Your stay has been requested!":null})]}),(0,Be.jsxs)(_,{children:[(0,Be.jsx)(j,{src:(0,We.A)(n,800),alt:"Listing image"}),(0,Be.jsxs)(v,{children:[(0,Be.jsx)(k,{children:(()=>{switch(i.typeOfPlace){case"entire-place":return`${i.propertyType}`;case"private-room":return"Private room";case"hotel-room":return"Hotel room";case"shared-room":return"Shared room";default:return""}})()}),(0,Be.jsx)(A,{style:{marginTop:"4px"},children:i.propertyTitle}),(0,Be.jsxs)(A,{style:{position:"relative",marginTop:"auto"},children:[(0,Be.jsxs)("span",{children:["$",Number(i.minimumPrice/100).toFixed(2)," AUD"]})," / night"]})]})]}),(0,Be.jsx)(lt,{instantBookEnabled:i.instantBookEnabled}),(0,Be.jsxs)(G,{style:{borderTop:"0"},children:[(0,Be.jsxs)(C,{style:{marginBottom:"32px"},children:[(0,Be.jsxs)(W,{children:[(0,Be.jsx)(B,{children:"Dates"}),(0,Be.jsx)(R,{children:isNaN(a.valueOf())||isNaN(r.valueOf())?isNaN(a.valueOf())?"Please select dates":`${a.toDateString().split(" ")[2]} ${a.toDateString().split(" ")[1]} - `:`${a.toDateString().split(" ")[2]} ${a.toDateString().split(" ")[1]} - ${r.toDateString().split(" ")[2]} ${r.toDateString().split(" ")[1]}`})]}),(0,Be.jsx)(T,{type:"button",onClick:()=>J(!0),children:"Edit"})]}),(0,Be.jsxs)(C,{children:[(0,Be.jsxs)(W,{children:[(0,Be.jsx)(B,{children:"Guests"}),(0,Be.jsxs)(R,{children:[`${o.adults} `+(1===o.adults?"adult":"adults"),o.children>0?`, ${o.children} `+(1===o.children?"child":"children"):null,o.infants>0?`, ${o.infants} `+(1===o.infants?"infant":"infants"):null,o.pets>0?`, ${o.pets} `+(1===o.pets?"pet":"pets"):null]})]}),(0,Be.jsx)(T,{type:"button",onClick:()=>E(!0),children:"Edit"})]})]}),(0,Be.jsx)(D,{}),(0,Be.jsx)(gt,{updateCoupon:p}),(0,Be.jsx)(D,{}),(0,Be.jsxs)(z,{children:[(0,Be.jsx)(I,{children:"Price details"}),(0,Be.jsxs)(H,{children:[s.displayItems.priceItems.filter((e=>"Deposit"!==e.label)).map(((e,t)=>{const i=0===t;return(0,Be.jsxs)(P,{onClick:()=>{i&&K()},children:[(0,Be.jsx)(N,{showBreakdown:i,children:e.label}),(0,Be.jsx)(N,{children:e.amountFormatted}),i&&F&&(0,Be.jsx)(rt.A,{bookingDetails:s,toggleModal:K})]},e.label)})),s.displayItems.subTotalItems.map(((e,t)=>"Total (AUD)"===e.label?(0,Be.jsxs)(P,{children:[(0,Be.jsx)(N,{style:{fontWeight:"600"},children:e.label}),(0,Be.jsx)(N,{style:{fontWeight:"600"},children:e.amountFormatted})]},e.label):null))]})]}),(0,Be.jsx)(D,{}),m?(0,Be.jsx)(Be.Fragment,{children:(0,Be.jsxs)(G,{children:[(0,Be.jsxs)(I,{children:["Pay ",s.displayItems.subTotalItems[0].amountFormatted," AUD"]}),!isNaN(a.valueOf())&&!isNaN(r.valueOf())&&(0,Be.jsx)(nt,{createBookingRequest:x,clientSecret:u,listing:i,startDate:a,endDate:r,cancellationPolicy:f})]})}):(0,Be.jsxs)(Be.Fragment,{children:[(0,Be.jsx)(Xe,{listing:i,startDate:a,cancellationPolicy:f}),(0,Be.jsx)(ee,{type:"button",onClick:()=>S(!0),children:"Sign up or log in to book"})]}),O&&(0,Be.jsx)(st.A,{startDate:a,endDate:r,listing:i,unavailableDates:q,saveFunc:h,cancelFunc:()=>{J(!1)},handleClickOutside:()=>{J(!1)}}),U&&(0,Be.jsx)(ot.A,{adults:o.adults,infants:o.infants,children:o.children,pets:o.pets,listingOwnerData:l,toggleGuests:()=>{E(!1)},listing:i,updateGuests:d})]})}):null}var pt=i(9082),ut=i(8306),xt=i(8069),ft=i(8530),mt=i(2204),yt=i(6450),bt=i(6750),$t=i(5370);const wt=()=>{(0,He.useEffect)((()=>{"function"===typeof window.gtag||console.warn("Google Analytics not loaded")}),[]);return{gtagSendEvent:()=>{"function"===typeof window.gtag&&window.gtag("event","conversion_event_purchase",{page_name:"create-booking",send_to:"G-PZWKZQZSK4"})}}},_t=(0,yt.Ay)({app:"Anystay",plugins:[(0,bt.A)({writeKey:"2zz3NP7VoxNPsFN0hwpZ9JvF3mxUUjct"})]});function jt(){const{gtagSendEvent:e}=wt(),t=(0,Ce.Zp)(),{bookingID:i,id:n,arrivalDate:s,departureDate:o}=(0,Ce.g)(),[a,r]=(0,Je.useRecoilState)(Oe.e),[l,c]=(0,Je.useRecoilState)(ft.N),[g,h]=(0,Je.useRecoilState)(mt.Z),[p,u]=(0,Je.useRecoilState)(pt.H),[x,f]=(0,He.useState)(0),[m,y]=(0,He.useState)(null),b=(0,Ce.zy)(),$=(0,He.useMemo)((()=>{const e=new URLSearchParams(b.search),t={};for(let[i,n]of e.entries())t[i]=n;return t}),[b.search]),[w,_]=(0,He.useState)({guests:0,adults:0,children:0,infants:0,pets:0}),[j,v]=(0,He.useState)(s?new Date(`${s.split("-")[2]}-${s.split("-")[1]}-${s.split("-")[0]}`):null),[k,A]=(0,He.useState)(o?new Date(`${o.split("-")[2]}-${o.split("-")[1]}-${o.split("-")[0]}`):null),[S,G]=(0,He.useState)(null),[D,z]=(0,He.useState)(null),[I,C]=(0,He.useState)(null),[W,B]=(0,He.useState)(null),[R,T]=(0,He.useState)("https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png"),[H,P]=(0,He.useState)(null),[N,O]=(0,He.useState)(null),[J,U]=(0,He.useState)(""),[E,q]=(0,He.useState)(!1),[M]=(0,$t.lT)(["referralCode"]),F=(0,He.useCallback)((()=>{const e=$.adults&&Number($.adults)>=0?Number($.adults):1,t=$.children&&Number($.children)>=0?Number($.children):0,i={guests:e+t,adults:e,children:t,infants:$.infants&&Number($.infants)>=0?Number($.infants):0,pets:$.pets&&Number($.pets)>=0?Number($.pets):0};return _(i),i}),[$.adults,$.children,$.infants,$.pets]),L=(0,He.useCallback)((async e=>{const t=await(0,Ee.p)("get","dev-anystay-booking",`booking/${e}`,{headers:{Authorization:p,bookingId:e}});let i=await(0,Ee.p)("get","dev-anystay-listing",`listing/${t.body.bookingRequest.listingmodelID}`);const n={guests:Number(t.body.bookingRequest.adults+t.body.bookingRequest.children),adults:t.body.bookingRequest.adults,children:t.body.bookingRequest.children,infants:t.body.bookingRequest.infants,pets:t.body.bookingRequest.pets};return C(t.body.bookingRequest),_(n),v(new Date(t.body.bookingRequest.arrivalDate)),A(new Date(t.body.bookingRequest.departureDate)),y(i.body.listing),G(i.body.listing.cancellationPolicy),{listing:i.body.listing,guests:n,startDate:new Date(t.body.bookingRequest.arrivalDate),endDate:new Date(t.body.bookingRequest.departureDate)}}),[p]),Q=(0,He.useCallback)((async e=>{let t=await(0,Ee.p)("get","dev-anystay-listing",`listing/${e}`);return y(t.body.listing),G(t.body.listing.cancellationPolicy),t.body.listing}),[]),Y=(0,He.useCallback)((async(e,t,i,n,s)=>{try{let o=await(0,Ee.p)("put","dev-anystay-booking","booking/payment",{headers:{Authorization:p},body:{listingModelId:n.id,arrivalDate:e.toString(),departureDate:t.toString(),guests:i,userModelId:s.id,referralCode:M.referralCode}});if(o.success&&o.paymentIntent&&o.clientSecret&&o.bookingDetails)return z(o.paymentIntent),P(o.clientSecret),void O(o.bookingDetails);o.success||"Payment intent was not created due to invalid booking."!==o.message&&"Payment intent was not created due to selected dates not available"!==o.message||(O(o.bookingDetails),q(!0))}catch(o){console.log(o)}}),[p]),K=async(e,t,i,n,s)=>{if(!D&&j&&k&&m)await Y(j,k,n,m,s);else try{let o=await(0,Ee.p)("post","dev-anystay-booking","booking/payment",{headers:{Authorization:p},body:{coupon:e,paymentIntentID:null===D||void 0===D?void 0:D.id,listingmodelID:m.id,arrivalDate:t.toString(),departureDate:i.toString(),guests:n,instantBookEnabled:m.instantBookEnabled,userId:s.id,referralCode:M.referralCode}});return o.success&&o.paymentIntent&&o.clientSecret&&o.bookingDetails&&(z(o.paymentIntent),P(o.clientSecret),O(o.bookingDetails)),o}catch(o){return console.log(o),{success:!1,errorCode:"SOMETHING_WENT_WRONG"}}},Z=(0,He.useCallback)((async(e,t,s,o,r)=>{try{let d=await(0,Ee.p)("post","dev-anystay-booking",`booking/details/${e.id}`,{headers:{Authorization:p},body:{coupon:t,listingModelId:e.id,arrivalDate:s.toString(),departureDate:o.toString(),guests:r,referralCode:M.referralCode}});return d.success?(_t.track("CreateBookingPriceDelivered",{loggedIn:g,userId:g?null===a||void 0===a?void 0:a.id:l,bookingID:i,listingID:n,bookingDetails:d.bookingDetails}),O(d.bookingDetails)):"Booking is not available."!==d.message&&"Payment intent was not created due to selected dates not available"!==d.message||(O(d.bookingDetails),q(!0),_t.track("CreateBookingPriceFailed",{loggedIn:g,userId:g?null===a||void 0===a?void 0:a.id:l,bookingID:i,listingID:n,bookingDetails:d.bookingDetails})),d}catch(d){return console.log(d),{success:!1,errorCode:"SOMETHING_WENT_WRONG"}}}),[p]);return(0,He.useEffect)((()=>{(async()=>{let e=null,r=null,l=null,d=null;if(i){const t=await L(i);e=t.startDate,r=t.endDate,l=t.guests,d=t.listing}else l=F(),e=s?new Date(`${s.split("-")[2]}-${s.split("-")[1]}-${s.split("-")[0]}`):null,r=o?new Date(`${o.split("-")[2]}-${o.split("-")[1]}-${o.split("-")[0]}`):null,d=await Q(n);a&&e&&r?await Y(e,r,l.guests,d,a):e&&r?await Z(d,null,e,r,l.guests):t("/")})()}),[s,o,i,n,a,Z,Y,L,F,Q,t]),(0,He.useEffect)((()=>{_t.track("CreateBookingPageView",{loggedIn:g,userId:g?null===a||void 0===a?void 0:a.id:l,bookingID:i,listingID:n,arrivalDate:s,departureDate:o,guest:w.guests,adults:$.adults,children:$.children,infants:$.infants,pets:$.pets})}),[]),N&&m?(0,Be.jsxs)(d,{pageIndex:x,children:[(0,Be.jsx)(ut.A,{title:"Confirm your stay"}),(0,Be.jsx)(we,{pageIndex:x,children:0===x?(0,Be.jsx)(je,{children:(0,Be.jsx)(Le.N_,{to:"/",children:(0,Be.jsx)(ke,{src:"https://d292awxalydr86.cloudfront.net/Branding/(new1)+full+logo+red.svg",alt:"Anystay Logo"})})}):(0,Be.jsxs)(Be.Fragment,{children:[(0,Be.jsx)(_e,{children:(0,Be.jsx)(Le.N_,{to:"/",children:(0,Be.jsx)(ve,{src:"https://d292awxalydr86.cloudfront.net/Branding/(new1)+logo+icon+red.svg",alt:"Anystay Logo"})})}),(0,Be.jsx)(Ae,{href:"https://help.anystay.com.au/",target:"_blank",rel:"noopener norefferer",children:"Get help"})]})}),0===x&&(0,Be.jsxs)(Be.Fragment,{children:[(0,Be.jsx)(ht,{pageIndex:x,listing:m,imageKey:JSON.parse(m.listingImages[0]).key,bookingDetails:N,guests:w,startDate:j,endDate:k,listingOwnerData:W,updateGuests:async e=>{let t=null;const s=e.adults+e.children;a?t=await K(J,j,k,s,a):m&&j&&k&&(t=await Z(m,J,j,k,s)),t.success&&(_({guests:s,adults:e.adults,children:e.children,infants:e.infants,pets:e.pets}),_t.track("UpdatedGuestsFromCreateBooking",{loggedIn:g,userId:g?null===a||void 0===a?void 0:a.id:l,bookingID:i,listingID:n,guests:s,adults:e.adults,children:e.children,infants:e.infants,pets:e.pets}))},updateDates:async e=>{let t=null;a?t=await K(J,e[0],e[1],w.guests,a):m&&w.guests&&(t=await Z(m,J,e[0],e[1],w.guests)),t.success&&(v(e[0]),A(e[1]),_t.track("UpdatedDatesFromCreateBooking",{loggedIn:g,userId:g?null===a||void 0===a?void 0:a.id:l,bookingID:i,listingID:n,arrivalDate:e[0],departureDate:e[1]}))},updateCoupon:async e=>{let t=null;return a?t=await K(e,j,k,w.guests,a):m&&j&&k&&w.guests&&(t=await Z(m,e,j,k,w.guests)),t.success&&(U(e),_t.track("AddedCouponFromCreateBooking",{loggedIn:g,userId:g?null===a||void 0===a?void 0:a.id:l,bookingID:i,listingID:n,couponCodeInput:e})),t},clientSecret:H,createBookingRequest:async t=>{t?(_t.track("CreateBookingSubmitted",{loggedIn:g,userId:g?null===a||void 0===a?void 0:a.id:l,bookingID:i,listingID:n}),await(0,Ee.p)("put","dev-anystay-booking","booking",{body:{listingModelId:m.id,coupon:J,arrivalDate:j.toString(),departureDate:k.toString(),paymentIntentId:t.paymentIntent.id,guests:w.guests,adults:w.adults,children:w.children,infants:w.infants,pets:w.pets,bookingId:i||null,userModelId:a.id,referralCode:M.referralCode},headers:{Authorization:p}}).then((async t=>{if(t.success){if(t.body.bookingRequest.UserHostModel.UserModel.profilePicture){const e=(0,xt.A)(t.body.bookingRequest.UserHostModel.UserModel.profilePicture,t.body.bookingRequest.UserHostModel.UserModel.identityID,100);T(e)}B(t.body.bookingRequest.UserHostModel.UserModel),f(1),C(t.body.bookingRequest),window.scrollTo(0,0),window.fbq("track","Purchase",{currency:"AUD",value:parseFloat(`${(t.body.bookingRequest.paymentAmount/100).toFixed(2)}`)}),e(),_t.track("CreateBookingSuccess",{loggedIn:g,userId:g?null===a||void 0===a?void 0:a.id:l,bookingID:t.body.bookingRequest.id,listingID:n})}})).catch((async e=>{console.log(e),_t.track("CreateBookingFailed",{loggedIn:g,userId:g?null===a||void 0===a?void 0:a.id:l,bookingID:i,listingID:n})}))):console.log("No payment intent, can't request booking")},cancellationPolicy:S}),(0,Be.jsx)(Re,{listing:m,imageKey:JSON.parse(m.listingImages[0]).key})]}),1===x&&(0,Be.jsx)(qe,{listingOwnerProfilePictureURL:R,listingOwnerData:W,bookingRequest:I,setPageIndex:f,listing:m,pageIndex:x,accessToken:p,imageKey:JSON.parse(m.listingImages[0]).key}),2===x&&(0,Be.jsx)(Ue,{bookingRequest:I,listing:m,pageIndex:x}),E&&(0,Be.jsx)(Ke.A,{closeModal:()=>{q(!1)}})]}):(0,Be.jsx)(Ie.A,{reverse:!0,guestMode:!0})}Ge.k2.moment=ze()}}]);
//# sourceMappingURL=3252.7a0813f1.chunk.js.map
//# debugId=c78add22-b4d2-569f-aa57-5c5eb976296e
